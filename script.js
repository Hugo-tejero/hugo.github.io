window.onload = function() {
  // Animación del encabezado
  var header = document.querySelector("header");
  header.classList.add("fadeIn");

  // Animación de los artículos
  var articles = document.querySelectorAll("article");
  for (var i = 0; i < articles.length; i++) {
    articles[i].classList.add("fadeIn");
  }
};
