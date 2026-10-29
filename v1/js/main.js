/* Configuració del web: nom i subtítol de la consultora */
const NOM = "Mestral";
const SUBTITOL = "Consultoria ERP";

document.title = NOM + " · " + SUBTITOL;
document.querySelectorAll("[data-nom]").forEach(function (e) { e.textContent = NOM; });
document.querySelectorAll("[data-subtitol]").forEach(function (e) { e.textContent = SUBTITOL; });
