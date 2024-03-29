// Animações
const target = document.querySelectorAll("[data-anime]");
const ativar = "animado";

if (target) {
  function animar() {
    const scrollY = window.scrollY + (window.innerHeight * 3) / 4;
    target.forEach(function (e) {
      if (scrollY > e.offsetTop) {
        e.classList.add(ativar);
      } else {
        e.classList.remove(ativar);
      }
    });
  }
}

animar();

if (target.length) {
  window.addEventListener("scroll", animar);
}

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

// PERGUNTAS FREQUENTES
const perguntas = document.querySelectorAll("dt");

if (perguntas) {
  const active = "ativo";
  perguntas[0].classList.add(active);
  perguntas[0].nextElementSibling.classList.add(active);

  function clicado(e) {
    e.currentTarget.classList.toggle(active);
    e.currentTarget.nextElementSibling.classList.toggle(active);
  }

  perguntas.forEach((pergunta) => {
    pergunta.addEventListener("click", clicado);
  });
}
