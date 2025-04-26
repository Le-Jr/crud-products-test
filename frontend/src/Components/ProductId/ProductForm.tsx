import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { toast } from "react-hot-toast";
import { productFormSchema, ProductFormValues } from "../Types/types";
import { ProductFormFields } from "../ProductFormFields/FormFields";
import { CategoryFields } from "../ProductCategoryFields/ProductCategoryFields";

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

  const handleAddCategory = () => {
    form.setValue("categories", [...form.getValues("categories"), { id: "" }]);
  };

  // Função para remover categoria adicionada
  const handleRemoveCategory = (index: number) => {
    const currentCategories = form.getValues("categories");
    form.setValue(
      "categories",
      currentCategories.filter((_, i) => i !== index)
    );
  };

  useEffect(() => {
    if (isEditing) {
      setFetchingProduct(true);

      axios
        .get(`${API_URL}/product/${id}`)
        .then((response) => {
          const productData = response.data;
          console.log("Produto carregado:", productData);

          form.reset({
            name: productData.name,
            qty: productData.qty,
            price: productData.price,
            photo: productData.photo || "",
            // Corrige a estrutura das categorias
            categories: productData.categories.map((id: string) => ({ id })),
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

  const onSubmit = async (values: ProductFormValues) => {
    try {
      setLoading(true);

      const categories = values.categories.map((category) => category.id);

      const productData = {
        ...values,
        categories,
      };

      if (isEditing) {
        await axios.patch(`${API_URL}/product/${id}`, productData);
        toast.success("Produto atualizado com sucesso!");
      } else {
        await axios.post(`${API_URL}/product`, productData);
        toast.success("Produto criado com sucesso!");
      }

      navigate("/product");
    } catch (error) {
      console.error("Erro ao salvar produto:", error);
      toast.error(`Erro ao ${isEditing ? "atualizar" : "criar"} produto`);
    } finally {
      setLoading(false);
    }
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
                addCategory={handleAddCategory}
                removeCategory={handleRemoveCategory} // Prop adicionada
              />
              <div className="flex justify-between gap-4 mt-6">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => navigate("/product")}
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
