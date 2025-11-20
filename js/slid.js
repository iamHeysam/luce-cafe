const swiper = new Swiper(".swiper-container", {
  speed: 800,
  loop: true,

  breakpoints: {
    210: {
      slidesPerView: 2,
    },
    300: {
      slidesPerView: 3,
    },
    400: {
      slidesPerView: 4,
    },
    490: {
      slidesPerView: 5,
    },
  },
});
