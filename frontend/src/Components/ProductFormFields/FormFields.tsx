import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { ProductFormValues } from "../Types/types";

interface ProductFormFieldsProps {
  form: UseFormReturn<ProductFormValues>;
}

export const ProductFormFields = ({ form }: ProductFormFieldsProps) => (
  <>
    <FormField
      control={form.control}
      name="name"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Nome do Produto</FormLabel>
          <FormControl>
            <Input {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />

    <FormField
      control={form.control}
      name="qty"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Quantidade</FormLabel>
          <FormControl>
            <Input
              type="number"
              {...field}
              onChange={(e) => field.onChange(Number(e.target.value))}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />

    <FormField
      control={form.control}
      name="price"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Preço</FormLabel>
          <FormControl>
            <Input
              type="number"
              step="0.01"
              {...field}
              onChange={(e) => field.onChange(Number(e.target.value))}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />

    <FormField
      control={form.control}
      name="photo"
      render={({ field }) => (
        <FormItem>
          <FormLabel>URL da Foto</FormLabel>
          <FormControl>
            <Input {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  </>
);
