/* Configuració del web */
const NOM = "Mestral";
const SUBTITOL = "Consultoria ERP";
const CV_CARPETA = "https://drive.google.com/drive/folders/16yo0gE1xngANMm3dZndUI8KOeoqEqRpN";
const CV_PERSONES = {
  alberto: "https://drive.google.com/file/d/1mDau6XA0AAevucVWlV9aLbJrwuaqBDru/view?usp=sharing",
  fran:    "https://drive.google.com/file/d/1JkrPV2lwtznBTC_r-h-7hm2N2YO7iIe9/view?usp=sharing",
  lluis:   "https://drive.google.com/file/d/1L4Mu0TI-tcb4PnGRWOOoqUeWJRCrZFFj/view?usp=sharing",
  maria:   "https://drive.google.com/file/d/1sYU8KIjVVwXWvsn17ter6JKQzizNPhN8/view?usp=sharing"
};

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
