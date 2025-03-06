import "./App.css";
import { HomePage } from "./HomePage";
import { Route, Routes } from "react-router";

export function Store() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
    </Routes>
  )
}
