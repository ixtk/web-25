import "./App.css";

import { Routes, Route } from "react-router";
import { HomePage } from "./HomePage";

export function Store() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
    </Routes>
  );
}
