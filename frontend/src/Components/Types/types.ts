import { z } from "zod";

export const productFormSchema = z.object({
  name: z.string().min(1, { message: "Nome do produto é obrigatório" }),
  qty: z.number().min(0, { message: "Quantidade não pode ser negativa" }),
  price: z.number().min(0, { message: "Preço não pode ser negativo" }),
  photo: z
    .string()
    .url({ message: "URL da foto inválida" })
    .optional()
    .or(z.literal("")),
  categories: z.array(
    z.object({
      id: z.string(),
    })
  ),
});

export type ProductFormValues = z.infer<typeof productFormSchema>;

export interface CategoryRelation {
  id: string;
}

export interface Product {
  id: number;
  name: string;
  qty: number;
  price: number;
  photo: string;
  categories: CategoryRelation[];
}
