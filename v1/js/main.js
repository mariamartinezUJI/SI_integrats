/* Configuració del web: nom i subtítol de la consultora */
const NOM = "Mestral";
const SUBTITOL = "Consultoria ERP";

var pagina = document.documentElement.getAttribute("data-pagina");
document.title = (pagina ? pagina + " · " : "") + NOM + " · " + SUBTITOL;
document.querySelectorAll("[data-nom]").forEach(function (e) { e.textContent = NOM; });
document.querySelectorAll("[data-subtitol]").forEach(function (e) { e.textContent = SUBTITOL; });

// «Desplega-ho tot» / «Plega-ho tot» dels acordions
document.querySelectorAll("[data-desplega]").forEach(function (boto) {
  boto.addEventListener("click", function () {
    var detalls = boto.closest("[data-acords]").querySelectorAll("details");
    var obrir = Array.prototype.some.call(detalls, function (d) { return !d.open; });
    detalls.forEach(function (d) { d.open = obrir; });
    boto.textContent = obrir ? "Plega-ho tot" : "Desplega-ho tot";
  });
});
