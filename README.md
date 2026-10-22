# Mestral · Consultoria ERP

Web d'una sola pàgina (identitat de la consultora, «Qui som» i serveis) del projecte de l'assignatura **EI/MT1046 Sistemes d'Informació Integrats** (Universitat Jaume I, curs 2026/2027). Cas fictici amb finalitats acadèmiques.

HTML, CSS i un poc de JavaScript, sense compilació ni dependències. Rutes relatives.

- Repositori: <https://github.com/mariamartinezUJI/SI_integrats>
- URL: <https://mariamartinezuji.github.io/SI_integrats/>

## Publicar a GitHub Pages

**Settings → Pages → Deploy from a branch → `main` → `/ (root)` → Save.**

## Canviar el nom o l'enllaç de CV

Al principi de `js/main.js`:

```js
const NOM = "Mestral";
const SUBTITOL = "Consultoria ERP";
const CV_CARPETA = "…";                 // carpeta de Drive amb tots els CV
const CV_PERSONES = { alberto: "…", fran: "…", lluis: "…", maria: "…" };  // enllaç al CV de cadascú (buit = carpeta)
```

Cada botó «CV» obri l'enllaç de la seua persona (`CV_PERSONES`); si està buit, obri la carpeta (`CV_CARPETA`).

## Privacitat

No pugeu cap CV ni dades personals: `.gitignore` exclou `*cv*.pdf`, `*cv*.docx` i `cv/`.
