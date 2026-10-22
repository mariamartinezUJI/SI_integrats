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
const CV_URL = "";   // carpeta de Google Drive amb els CV
```

Tots els botons «CV» apunten a la mateixa carpeta de Drive (`CV_URL`). Mentre estiga buida, apunten a `#`.

## Privacitat

No pugeu cap CV ni dades personals: `.gitignore` exclou `*cv*.pdf`, `*cv*.docx` i `cv/`.
