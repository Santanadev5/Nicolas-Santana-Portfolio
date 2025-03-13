document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  document.querySelector('.seta-esquerda').addEventListener('click', () => {
    swiper.slidePrev(); 
  });

  document.querySelector('.seta-direita').addEventListener('click', () => {
    swiper.slideNext(); 
  });

  function smoothScroll(target, duration) {
    let startPosition = window.pageYOffset;
    let targetPosition = document.getElementById(target).offsetTop - 50; // Ajuste de 50px para o scroll
    let distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      let timeElapsed = currentTime - startTime;
      let progress = Math.min(timeElapsed / duration, 1);

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

  document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      smoothScroll(targetId, 800); // Usando scroll suave para qualquer link de navegação
    });
  });
});
