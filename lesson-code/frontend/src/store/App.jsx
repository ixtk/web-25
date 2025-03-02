import "./App.css";

import { Routes, Route } from "react-router";
import { HomePage } from "./HomePage";
import { ProductPage } from "./ProductPage";

export function Store() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/products/:id" element={<ProductPage />} />
    </Routes>
  );
}
