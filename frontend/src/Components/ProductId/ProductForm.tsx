import { useParams, useNavigate } from "react-router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { productFormSchema, ProductFormValues, Product } from "../Types/types";
import { ProductFormFields } from "../ProductFormFields/FormFields";
import { CategoryFields } from "../ProductCategoryFields/ProductCategoryFields";

export const ProductForm = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const isEditing = id !== "0" && id !== undefined;

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

  useEffect(() => {
    if (isEditing) {
      fetch(`/api/products/${id}`)
        .then((res) => res.json())
        .then((data: Product) => {
          form.reset({
            name: data.name,
            qty: data.qty,
            price: data.price,
            photo: data.photo,
            categories: data.categories,
          });
        });
    }
  }, [id, isEditing, form]);

  const onSubmit = (values: ProductFormValues) => {
    const url = isEditing ? `/api/products/${id}` : "/api/products";
    const method = isEditing ? "PATCH" : "POST";

    fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...values,
        id: isEditing ? Number(id) : 0,
      }),
    }).then(() => navigate("/product"));
  };

  const addCategory = () => {
    const currentCategories = form.getValues("categories");
    form.setValue("categories", [...currentCategories, { id: "" }]);
  };

  return (
    <Card className="max-w-2xl mx-auto my-6">
      <CardHeader>
        <CardTitle>
          {isEditing ? "Editar Produto" : "Adicionar Novo Produto"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <ProductFormFields form={form} />
            <CategoryFields form={form} addCategory={addCategory} />
            <Button type="submit" className="w-full cursor-pointer">
              {isEditing ? "Salvar Alterações" : "Criar Produto"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
