function zmenObrazek(cesta, kliknutyElement) {
  document.getElementById("mainImage").src = cesta;

  var miniatury = document.querySelectorAll(".thumbnail");
  miniatury.forEach(function (miniatura) {
    miniatura.classList.remove("active");
  });

  kliknutyElement.classList.add("active");
}
