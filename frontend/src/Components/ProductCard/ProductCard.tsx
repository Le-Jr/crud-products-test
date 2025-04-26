import { Button } from "@/components/ui/button";
import { Link } from "react-router";

interface Product {
  id: string;
  categories: string[];
  name: string;
  qty: number;
  price: number;
  photo: string;
}

// Definindo a interface para as props do ProductCard
interface ProductCardProps {
  product: Product;
  onRemove: () => void;
}

export const ProductCard = ({ product, onRemove }: ProductCardProps) => {
  return (
    <div className="border rounded-xl p-4 flex flex-col gap-2 shadow hover:shadow-md transition max-w-2xl">
      <h4 className="text-lg font-bold">{product.name}</h4>

      {/* <p className="text-sm text-gray-600">{product.description}</p> */}

      <div className="mt-2">
        <p className="text-sm">
          <span className="font-medium">Preço:</span> R${" "}
          {product.price.toFixed(2)}
        </p>
        <p className="text-sm">
          <span className="font-medium">Qtd. em estoque:</span> {product.qty}
        </p>
      </div>

      <div className="flex justify-between mt-4">
        <Button variant={"outline"} asChild>
          <Link to={`/product/${product.id}`}>Editar</Link>
        </Button>

        <Button
          variant={"destructive"}
          className="cursor-pointer"
          onClick={onRemove}
        >
          Remover
        </Button>
      </div>
    </div>
  );
};
