function zmenObrazek(cesta, kliknutyElement) {
  // 1. Najde hlavní obrázek a změní mu src
  document.getElementById("mainImage").src = cesta;

  // 2. Všechny miniatury označí jako neaktivní
  var miniatury = document.querySelectorAll(".thumbnail");
  miniatury.forEach(function (miniatura) {
    miniatura.classList.remove("active");
  });

  // 3. Kliknutou miniaturu označí jako aktivní
  kliknutyElement.classList.add("active");
}
