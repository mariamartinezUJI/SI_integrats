# Mestral · Consultoria ERP

Web del projecte de consultoria ERP de l'assignatura **EI/MT1046 Sistemes d'Informació Integrats** (Universitat Jaume I, curs 2026/2027). Cas fictici amb finalitats acadèmiques.

És un web estàtic (HTML, CSS i JavaScript mínim), sense compilació ni dependències. Totes les rutes són relatives.

- Repositori: <https://github.com/mariamartinezUJI/SI_integrats>
- URL prevista: <https://mariamartinezuji.github.io/SI_integrats/>

## Estructura

```
index.html            Inici
qui-som.html          Equip (una targeta per membre)
serveis.html          Serveis
fases.html            Fases del projecte
fonts.html            Bibliografia (IEEE)
cas/                  Cas d'èxit: resum, empresa, estructura, procés i activitats
css/style.css         Estils i tokens de disseny (:root)
js/config.js          Nom, subtítol i enllaç de CV
js/main.js            Aplica la configuració, menú mòbil i botons de CV
img/                  Logo i favicon (SVG propis)
404.html              Pàgina d'error
REVISIO.md            Termes i dades normatives per revisar
```

## Publicar a GitHub Pages

1. Pugeu el contingut al repositori (branca `main`, arrel del projecte).
2. A GitHub: **Settings → Pages**.
3. **Build and deployment → Source: Deploy from a branch**.
4. **Branch: `main`**, carpeta **`/ (root)`**, i **Save**.
5. Espereu un minut: el web quedarà a <https://mariamartinezuji.github.io/SI_integrats/>.

El fitxer `.nojekyll` evita que GitHub Pages processe el web amb Jekyll. També funciona sense canvis a Vercel i a Netlify (directori de publicació: l'arrel, sense comanda de compilació).

## Canviar el nom de la consultora i l'enllaç de CV

Editeu **`js/config.js`**:

```js
window.SITE_CONFIG = {
  name: "Mestral",              // nom de la consultora
  tagline: "Consultoria ERP",   // subtítol
  cvFolderUrl: ""               // URL de la carpeta de Google Drive amb els CV
};
```

- El nom i el subtítol s'apliquen a la capçalera, al peu, al títol de cada pàgina i a les referències del text.
- Mentre `cvFolderUrl` estiga buit, els botons «CV» no es mostren. Quan hi poseu la URL, apareixen i tots apunten a aquesta carpeta.
- Els fitxers HTML porten «Mestral» com a text per defecte (per si no es carrega JavaScript); si canvieu el nom definitiu, convé substituir-lo també als HTML (cerca i substitució).

## Afegir una pàgina nova (fases següents)

1. Dupliqueu una pàgina existent (per exemple `fases.html`, o una de `cas/` si va dins del cas) i canvieu el contingut de `<main>`.
2. Afegiu l'enllaç al menú i al peu de la resta de pàgines (blocs `site-nav` i `Mapa del web`).
3. Si és una pàgina de `cas/`, afegiu-la també al submenú del cas.
4. Manteniu les rutes relatives: `../css/style.css` des d'una subcarpeta, `css/style.css` des de l'arrel.

## Privacitat

El repositori és públic i l'historial de Git ho conserva tot. **No pugeu cap CV** (PDF o DOCX) ni dades personals (telèfon, adreça, DNI, data de naixement, correu). `.gitignore` exclou `*cv*.pdf`, `*cv*.docx` i la carpeta `cv/`. Els CV es comparteixen només amb l'enllaç de carpeta de Google Drive d'accés restringit.

El web no usa cookies ni trackers. L'única petició externa és la tipografia DM Sans de Google Fonts, amb tipografia del sistema com a alternativa.

## Prova en local

```bash
python -m http.server 8000 --bind 127.0.0.1
```

Per comprovar les rutes relatives sota el subdirectori, serviu la carpeta *pare* i obriu <http://127.0.0.1:8000/SI_integrats/>.
