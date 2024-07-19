import { animationSlide } from "./gasp";

export const setupSwiper = () => {
  const defaultSetting = {
    loop: true,
    autoHeight: true,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: "#button-next",
      prevEl: "#button-prev",
    },
    on: {
      init: (el: typeof Swiper) => animationSlide(el.slides[el.activeIndex], 0),
      slideChangeTransitionStart: (el: typeof Swiper) =>
        animationSlide(el.slides[el.activeIndex], 0),
    },
    autoplay: {
      delay: 5000,
    },
  };
  new Swiper(".mySwiper", {
    ...defaultSetting,
    slidesPerView: 1,
  });
};
