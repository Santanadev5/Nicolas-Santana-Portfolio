document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // Controle das setas
  document.querySelector('.seta-esquerda').addEventListener('click', () => {
    swiper.slidePrev(); // Navega para o slide anterior
  });

  document.querySelector('.seta-direita').addEventListener('click', () => {
    swiper.slideNext(); // Navega para o próximo slide
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // Controle das setas
  document.querySelector('.seta-esquerda').addEventListener('click', () => {
    swiper.slidePrev(); // Navega para o slide anterior
  });

  document.querySelector('.seta-direita').addEventListener('click', () => {
    swiper.slideNext(); // Navega para o próximo slide
  });

  // Função de rolagem suave personalizada
  function smoothScroll(target, duration) {
    let startPosition = window.pageYOffset;
    let targetPosition = document.getElementById(target).offsetTop - 50; // Ajuste para não cobrir o título
    let distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      let timeElapsed = currentTime - startTime;
      let progress = Math.min(timeElapsed / duration, 1); // Limita a progressão de 0 a 1

      window.scrollTo(0, startPosition + distance * easeInOutCubic(progress));

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }

    function easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    requestAnimationFrame(animation);
  }

  // Aplica a rolagem suave aos links do menu
  document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      smoothScroll(targetId, 800); // Define a duração da animação (800ms)
    });
  });
});
