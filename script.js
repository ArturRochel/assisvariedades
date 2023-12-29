// Menu Hamburguer
const hamburguer = document.getElementById("hamburguer");

function toggleMenu() {
  const responsivo = document.getElementById("header-responsivo");
  responsivo.classList.toggle("active");
  hamburguer.classList.toggle("active");
  document.onclick = function (e) {
    if (!responsivo.contains(e.target) && !hamburguer.contains(e.target)) {
      responsivo.classList.remove("active");
      hamburguer.classList.remove("active");
    }
  };
}

hamburguer.addEventListener("click", toggleMenu);
