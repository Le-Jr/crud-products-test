import { Button } from "@/components/ui/button";

interface FormButtonProps {
  isEditing: boolean;
}

export const FormButton = ({ isEditing }: FormButtonProps) => (
  <Button type="submit">
    {isEditing ? "Atualizar Produto" : "Adicionar Produto"}
  </Button>
);
