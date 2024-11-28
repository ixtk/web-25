import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
// import { BlogComponent } from "./hw-2-blog-component/App";
// import { FigurineCreator } from "./hw-7-figurine-creator/App";
import { OneWayChat } from "./hw-8-one-way-chat/App"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <BlogComponent /> */}
    <OneWayChat />
    {/* <FigurineCreator /> */}
  </StrictMode>
)
