import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import FormContextProvider from "./lib/formContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FormContextProvider>
      <App />
    </FormContextProvider>
  </StrictMode>
);
