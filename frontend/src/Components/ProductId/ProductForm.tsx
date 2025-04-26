import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { toast } from "react-hot-toast";

import { productFormSchema, ProductFormValues, Product } from "../Types/types";
import { ProductFormFields } from "../ProductFormFields/FormFields";
import { CategoryFields } from "../ProductCategoryFields/ProductCategoryFields";

// Definindo a URL base da API conforme configuração Docker
const API_URL = "http://localhost:3000";

export const ProductForm = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const isEditing = id !== "0" && id !== undefined;
  const [loading, setLoading] = useState(false);
  const [fetchingProduct, setFetchingProduct] = useState(false);

  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productFormSchema),
    defaultValues: {
      name: "",
      qty: 0,
      price: 0,
      photo: "",
      categories: [],
    },
  });

  // Buscar dados do produto para edição
  useEffect(() => {
    if (isEditing) {
      setFetchingProduct(true);

      axios
        .get(`${API_URL}/product/${id}`)
        .then((response) => {
          const productData: Product = response.data;
          console.log("Produto carregado:", productData);

          form.reset({
            name: productData.name,
            qty: productData.qty,
            price: productData.price,
            photo: productData.photo || "",
            categories: productData.categories || [],
          });
        })
        .catch((error) => {
          console.error("Erro ao buscar produto:", error);
          toast.error("Não foi possível carregar os dados do produto");
        })
        .finally(() => {
          setFetchingProduct(false);
        });
    }
  }, [id, isEditing, form]);

  // Enviar o formulário (criar ou atualizar produto)
  const onSubmit = async (values: ProductFormValues) => {
    try {
      setLoading(true);

      if (isEditing) {
        // Atualização de produto existente
        await axios.patch(`${API_URL}/product/${id}`, {
          ...values,
          id: id,
        });
        toast.success("Produto atualizado com sucesso!");
      } else {
        // Criação de novo produto
        await axios.post(`${API_URL}/product`, values);
        toast.success("Produto criado com sucesso!");
      }

      // Redirecionar para a lista de produtos
      navigate("/product");
    } catch (error) {
      console.error("Erro ao salvar produto:", error);

      if (axios.isAxiosError(error)) {
        // Log detalhado para ajudar no diagnóstico
        console.error("Status:", error.response?.status);
        console.error("Mensagem:", error.message);
        console.error("Detalhes:", error.response?.data);

        // Mensagem específica com base no tipo de erro
        if (error.response?.status === 400) {
          toast.error(
            "Dados inválidos. Verifique os campos e tente novamente."
          );
        } else if (error.response?.status === 404) {
          toast.error("Produto não encontrado.");
        } else {
          toast.error(`Erro ao ${isEditing ? "atualizar" : "criar"} produto`);
        }
      } else {
        toast.error(`Erro ao ${isEditing ? "atualizar" : "criar"} produto`);
      }
    } finally {
      setLoading(false);
    }
  };

  // Adicionar nova categoria ao formulário
  const addCategory = () => {
    const currentCategories = form.getValues("categories");
    form.setValue("categories", [...currentCategories, { id: "" }]);
  };

  // Remover categoria do formulário
  const removeCategory = (index: number) => {
    const currentCategories = form.getValues("categories");
    const updatedCategories = [...currentCategories];
    updatedCategories.splice(index, 1);
    form.setValue("categories", updatedCategories);
  };

  // Cancelar e voltar para a lista de produtos
  const handleCancel = () => {
    navigate("/product");
  };

  return (
    <Card className="max-w-2xl mx-auto my-6">
      <CardHeader>
        <CardTitle>
          {isEditing ? "Editar Produto" : "Adicionar Novo Produto"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {fetchingProduct ? (
          <div className="flex justify-center py-8">
            <p>Carregando dados do produto...</p>
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <ProductFormFields form={form} />
              <CategoryFields
                form={form}
                addCategory={addCategory}
                removeCategory={removeCategory}
              />

              <div className="flex justify-between gap-4 mt-6">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleCancel}
                  className="w-1/2"
                >
                  Cancelar
                </Button>

                <Button
                  type="submit"
                  className="w-1/2 cursor-pointer"
                  disabled={loading}
                >
                  {loading
                    ? "Salvando..."
                    : isEditing
                    ? "Salvar Alterações"
                    : "Criar Produto"}
                </Button>
              </div>
            </form>
          </Form>
        )}
      </CardContent>
    </Card>
  );
};
