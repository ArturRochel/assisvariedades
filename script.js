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

// Animações
const target = document.querySelectorAll("[data-anime]");
const animationClass = "animado";

function animando() {
  const scrollY = window.scrollY + (window.innerHeight * 3) / 4;
  target.forEach(function (e) {
    if (scrollY > e.offsetTop) {
      e.classList.add(animationClass);
    } else {
      e.classList.remove(animationClass);
    }
  });
}

animando();

if (target.length) {
  window.addEventListener("scroll", animando);
}
