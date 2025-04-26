// src/components/ProductCard.tsx
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    description: string;
  };
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="border rounded-xl p-4 flex flex-col gap-2 shadow hover:shadow-md transition max-w-2xl">
      <h4 className="text-lg font-bold">{product.name}</h4>

      <p className="text-sm text-gray-600">{product.description}</p>

      <div className="flex justify-between mt-4">
        <Button variant={"outline"}>
          <Link to={`/product/${product.id}`}>Editar</Link>
        </Button>

        <Button variant={"destructive"} className="cursor-pointer">
          Remover
        </Button>
      </div>
    </div>
  );
};
