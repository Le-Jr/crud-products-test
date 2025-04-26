import { useState, useEffect } from "react";
import { Link } from "react-router";
import { ProductCard } from "../ProductCard/ProductCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Product } from "../Types/products";

const API_URL = "http://localhost:3000";

export const ProductPage = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/product`, {
        params: { name: search },
      });

      // Converte categorias para o formato correto
      const formattedProducts = response.data.map((product: any) => ({
        ...product,
        categories: product.categories.map((c: string | { id: string }) =>
          typeof c === "string" ? { id: c } : c
        ),
      }));

      setProducts(formattedProducts);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
      toast.error("Não foi possível carregar os produtos");
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveProduct = async (id: string) => {
    try {
      if (window.confirm("Tem certeza que deseja remover este produto?")) {
        await axios.delete(`${API_URL}/product/${id}`);
        toast.success("Produto removido com sucesso!");
        fetchProducts();
      }
    } catch (error) {
      console.error("Erro ao remover produto:", error);
      toast.error("Não foi possível remover o produto");
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetchProducts();
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [search]);

  return (
    <main className="p-4">
      <div className="flex justify-around items-center mb-4">
        <Input
          type="text"
          placeholder="Buscar produto..."
          className="max-w-80"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <Button variant={"outline"} asChild>
          <Link to="/product/0">Adicionar Produto</Link>
        </Button>
      </div>

      {loading ? (
        <div className="flex justify-center py-8">
          <p>Carregando produtos...</p>
        </div>
      ) : products.length === 0 ? (
        <div className="flex justify-center py-8">
          <p>Nenhum produto encontrado</p>
        </div>
      ) : (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onRemove={() => handleRemoveProduct(product.id)}
            />
          ))}
        </section>
      )}
    </main>
  );
};
