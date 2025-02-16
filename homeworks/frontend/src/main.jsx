import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
// import { BlogComponent } from "./hw-2-blog-component/App";
// import { JobListingsConditionals } from "./hw-3-job-listings-conditionals/App"
// import { FlightsTable } from "./hw-5-flights-table/App"
// import { FigurineCreator } from "./hw-7-figurine-creator/App";
// import { OneWayChat } from "./hw-8-one-way-chat/App";
// import { GameSettings } from "./hw-9-game-settings/App"
// import { MemeGenerator } from "./hw-10-meme-creator/App"
import { BookerForm } from "./hw-11-booker-form/App"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <BlogComponent /> */}
    {/* <FlightsTable /> */}
    {/* <JobListingsConditionals /> */}
    {/* <OneWayChat /> */}
    {/* <FigurineCreator /> */}
    {/* <GameSettings /> */}
    {/* <MemeGenerator /> */}
    <BookerForm />
  </StrictMode>
)
