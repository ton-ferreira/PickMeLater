import { createRoot } from "react-dom/client";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Router from "./router";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./provider";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";

createRoot(document.getElementById("root")!).render(
  <CssVarsProvider defaultMode="light">
    <AppProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AppProvider>
  </CssVarsProvider>
);
