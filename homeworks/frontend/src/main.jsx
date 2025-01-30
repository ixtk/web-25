import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
// import { BlogComponent } from "./hw-2-blog-component/App";
// import { JobListingsConditionals } from "./hw-3-job-listings-conditionals/App"
// import { FlightsTable } from "./hw-5-flights-table/App"
// import { FigurineCreator } from "./hw-7-figurine-creator/App";
// import { OneWayChat } from "./hw-8-one-way-chat/App";
import { GameSettings } from "./hw-9-game-settings/App"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <BlogComponent /> */}
    {/* <FlightsTable /> */}
    {/* <JobListingsConditionals /> */}
    {/* <OneWayChat /> */}
    <GameSettings />
    {/* <FigurineCreator /> */}
  </StrictMode>
)
