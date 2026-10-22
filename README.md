# Mestral · Consultoria ERP

Web d'una sola pàgina (identitat de la consultora, «Qui som», serveis i cas d'èxit amb l'empresa client, l'estructura, el procés i les activitats) del projecte de l'assignatura **EI/MT1046 Sistemes d'Informació Integrats** (Universitat Jaume I, curs 2026/2027). Projecte amb finalitats acadèmiques.

HTML, CSS i un poc de JavaScript, sense compilació ni dependències. Rutes relatives.

- Repositori: <https://github.com/mariamartinezUJI/SI_integrats>
- URL: <https://mariamartinezuji.github.io/SI_integrats/>

## Publicar a GitHub Pages

**Settings → Pages → Deploy from a branch → `main` → `/ (root)` → Save.**

## Configuració

- **Nom i subtítol de la consultora:** al principi de `js/main.js` (`NOM` i `SUBTITOL`).
- **Enllaços dels CV:** a l'atribut `href` de cada botó «CV» de la secció «Qui som» (`index.html`). Són enllaços a fitxers de Google Drive amb accés restringit.

## Seguretat

La pàgina declara una política de seguretat de contingut (`Content-Security-Policy`) que només permet recursos propis i les tipografies de Google Fonts. Si s'hi afegeix un recurs extern nou, cal afegir-ne l'origen a aquesta política.

## Privacitat

No pugeu cap CV ni dades personals: `.gitignore` exclou `*cv*.pdf`, `*cv*.docx` i `cv/`.
