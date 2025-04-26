import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Plus } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { ProductFormValues } from "../Types/types";

interface CategoryFieldsProps {
  form: UseFormReturn<ProductFormValues>;
  addCategory: () => void;
}

export const CategoryFields = ({ form, addCategory }: CategoryFieldsProps) => (
  <div className="space-y-2">
    <FormLabel>Categorias</FormLabel>
    {form.watch("categories").map((_, index) => (
      <FormField
        key={index}
        control={form.control}
        name={`categories.${index}.id`}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input placeholder="ID da Categoria" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    ))}
    <Button
      type="button"
      variant="outline"
      size="sm"
      className="mt-2"
      onClick={addCategory}
    >
      <Plus className="mr-2 h-4 w-4" />
      Adicionar Categoria
    </Button>
  </div>
);
