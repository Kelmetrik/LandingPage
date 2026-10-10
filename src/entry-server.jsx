import { renderToString } from "react-dom/server";
import App from "./App";
import { content } from "./content";
export function renderPage(lang, privacy) {
  const c = content[lang];
  return {
    html: renderToString(<App lang={lang} privacy={privacy} />),
    title: privacy ? `${c.privacyContent.title} — Kelmetrik` : c.title,
    description: privacy ? c.privacyContent.intro : c.description,
  };
}
