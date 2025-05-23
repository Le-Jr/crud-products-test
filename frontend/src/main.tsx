import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { ProductPage } from "./Components/Product/Product.tsx";
import "./index.css";
import { ProductForm } from "./Components/ProductId/ProductForm.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to={"/product"} />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/product/:id" element={<ProductForm />} />
    </Routes>
  </BrowserRouter>
);
