import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app/App";
import "@fontsource-variable/lexend/index.css";
import "@fontsource/unbounded/index.css";
import "@fontsource-variable/geologica/index.css";
import "@fontsource/roboto/index.css";
import "@fontsource-variable/roboto-flex/index.css";
import "@fontsource-variable/montserrat/index.css";
import "@fontsource-variable/onest/index.css";
import "./i18n";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
