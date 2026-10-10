import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import { initializeAnalytics } from "./lib/runtime";
const lang = window.location.pathname.startsWith("/es") ? "es" : "en";
const privacy = /\/(privacy|privacidad)\/?$/.test(window.location.pathname);
initializeAnalytics(lang);
const root = document.getElementById("root");
const app = (
  <StrictMode>
    <App lang={lang} privacy={privacy} />
  </StrictMode>
);
if (root.hasChildNodes()) hydrateRoot(root, app);
else createRoot(root).render(app);
