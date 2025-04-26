// src/pages/Product.tsx
import { useState } from "react";
import { Link } from "react-router";
import { ProductCard } from "../ProductCard/ProductCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Product = () => {
  const [search, setSearch] = useState("");

  const products = Array.from({ length: 10 }).map((_, i) => ({
    id: i + 1,
    name: `Produto ${i + 1}`,
    description: "Lorem ipsum dolor sit amet consectetur adipisci elit",
  }));

  // Filtro
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="p-4">
      <div className="flex justify-around items-center mb-4">
        {/* Filter */}
        <Input
          type="text"
          placeholder="Buscar produto..."
          className="max-w-80"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Botão Para adicionar novos produtos */}
        <Button variant={"outline"} asChild>
          <Link to="/product/0">Adicionar Produto</Link>
        </Button>
      </div>

      {/* Grid de Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};
