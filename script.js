function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle('light');

  const img = document.querySelector("#profile img");
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png");
    img.setAttribute("alt", "Foto do Lucas Monteiro com fundo branco");
  } else {
    img.setAttribute("src", "./assets/avatar.png");
    img.setAttribute("alt", "Foto do Lucas Monteiro com o fundo de carro");
  }
}