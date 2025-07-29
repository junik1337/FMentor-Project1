import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import Footer from "./Footer";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <Footer />
  </StrictMode>
);
