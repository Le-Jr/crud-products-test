import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus, Trash } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { ProductFormValues } from "../Types/types";

interface CategoryFieldsProps {
  form: UseFormReturn<ProductFormValues>;
  addCategory: () => void;
  removeCategory: (index: number) => void;
}

export const CategoryFields = ({
  form,
  addCategory,
  removeCategory,
}: CategoryFieldsProps) => (
  <div className="space-y-4">
    <FormLabel>Categorias</FormLabel>
    {form.watch("categories").map((_, index) => (
      <FormField
        key={index}
        control={form.control}
        name={`categories.${index}.id`}
        render={({ field }) => (
          <FormItem className="flex items-center justify-between space-x-2">
            <FormControl className="flex-1">
              <Input
                placeholder="ID da Categoria"
                {...field}
                className="mr-2"
              />
            </FormControl>
            <FormMessage />
            <Button
              type="button"
              variant="outline"
              size="icon"
              className="ml-2"
              onClick={() => removeCategory(index)}
            >
              <Trash className="h-4 w-4" />
            </Button>
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
