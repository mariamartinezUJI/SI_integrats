/* ===== CONFIGURACIÓ: l'únic lloc que cal editar ===== */
const NOM = "Mestral";                 // nom de la consultora (provisional)
const SUBTITOL = "Consultoria ERP";
const CV_CARPETA = "https://drive.google.com/drive/folders/16yo0gE1xngANMm3dZndUI8KOeoqEqRpN"; // carpeta de Drive amb tots els CV (s'usa si una persona no té enllaç propi)
const CV_PERSONES = {                  // enllaç al CV de cada persona; buit = carpeta
  alberto: "https://drive.google.com/drive/folders/16yo0gE1xngANMm3dZndUI8KOeoqEqRpN",
  fran:    "https://drive.google.com/drive/folders/16yo0gE1xngANMm3dZndUI8KOeoqEqRpN",
  lluis:   "https://drive.google.com/drive/folders/16yo0gE1xngANMm3dZndUI8KOeoqEqRpN",
  maria:   "https://drive.google.com/drive/folders/16yo0gE1xngANMm3dZndUI8KOeoqEqRpN"
};
/* ================================================== */

document.title = NOM + " · " + SUBTITOL;
document.querySelectorAll("[data-nom]").forEach(function (e) { e.textContent = NOM; });
document.querySelectorAll("[data-subtitol]").forEach(function (e) { e.textContent = SUBTITOL; });
document.querySelectorAll("a[data-cv]").forEach(function (a) {
  var url = CV_PERSONES[a.getAttribute("data-cv")] || CV_CARPETA;
  if (!url) return;
  a.href = url;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
});
