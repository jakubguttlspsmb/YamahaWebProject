const modelNameDisplay = document.getElementById("modelNameDisplay");

function zmenObrazek(cesta, kliknutyElement) {
  document.getElementById("mainImage").src = cesta;

  var miniatury = document.querySelectorAll(".thumbnail");
  miniatury.forEach(function (miniatura) {
    miniatura.classList.remove("active");
  });

  const altText = kliknutyElement.alt;

  modelNameDisplay.textContent = altText;

  kliknutyElement.classList.add("active");
}

window.onload = function () {
  const firstThumbnail = document.querySelector(".thumbnail.active");
  if (firstThumbnail) {
    zmenObrazek(firstThumbnail.src, firstThumbnail);
  }
};
