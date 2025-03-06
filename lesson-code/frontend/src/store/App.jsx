import "./App.css";
import { HomePage } from "./HomePage";
import { Route, Routes } from "react-router";
import { ProductPage } from "./ProductPage";

export function Store() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/products/:productId" element={<ProductPage />} />
    </Routes>
  )
}
