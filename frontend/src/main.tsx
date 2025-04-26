import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { Product } from "./Components/Product/Product.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to={"/product"} />} />
      <Route path="/product" element={<Product />} />
    </Routes>
  </BrowserRouter>
);
