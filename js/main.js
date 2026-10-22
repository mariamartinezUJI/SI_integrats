/* ===== CONFIGURACIÓ: l'únic lloc que cal editar ===== */
const NOM = "Mestral";                 // nom de la consultora (provisional)
const SUBTITOL = "Consultoria ERP";
const CV_URL = "https://drive.google.com/drive/folders/1tfepl_rPzUGna0sojasRQL4zgvXp2QsA"; // carpeta de Google Drive amb els CV; buida = els botons «CV» queden amb «#»
/* ================================================== */

document.title = NOM + " · " + SUBTITOL;
document.querySelectorAll("[data-nom]").forEach(function (e) { e.textContent = NOM; });
document.querySelectorAll("[data-subtitol]").forEach(function (e) { e.textContent = SUBTITOL; });
if (CV_URL) {
  document.querySelectorAll("a[data-cv]").forEach(function (a) {
    a.href = CV_URL;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
  });
}
