import { Button } from "@/components/ui/button";
import { Link } from "react-router";

interface Product {
  id: string;
  categories: Array<{ name: string }>;
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
      {/* Exibindo a imagem do produto */}
      <img
        src={product.photo}
        alt={product.name}
        className="w-full h-64 object-cover rounded-md"
      />

      <h4 className="text-lg font-bold mt-2">{product.name}</h4>

      <div className="mt-2">
        <p className="text-sm">
          <span className="font-medium">Preço:</span> R${" "}
          {product.price.toFixed(2)}
        </p>
        <p className="text-sm">
          <span className="font-medium">Qtd. em estoque:</span> {product.qty}
        </p>
      </div>

      {/* Exibindo as categorias */}
      <div className="mt-2">
        <p className="text-sm">
          <span className="font-medium">Categorias:</span>{" "}
          {product.categories.length > 0
            ? product.categories.map((c) => c.name).join(", ")
            : "Nenhuma categoria"}
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
