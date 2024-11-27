import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BlogComponent } from "./hw-2-blog-component/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BlogComponent />
  </StrictMode>
);
