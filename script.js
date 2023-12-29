// Menu Hamburguer
const hamburguer = document.getElementById("hamburguer");

function toggleMenu() {
  const responsivo = document.getElementById("header-responsivo");
  responsivo.classList.toggle("active");
}

hamburguer.addEventListener("click", toggleMenu);
