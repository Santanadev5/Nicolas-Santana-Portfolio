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
