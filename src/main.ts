import './index.less'
import './css/style.css'
// vanilla-lazyload 17
new LazyLoad({ callback_error: (el: any) => (el.src = 'https://via.placeholder.com/440x560/?text=Error') });

// gsap 3
import { animationSlide } from "./gasp.ts";

animationSlide(document.getElementById('title')!, 0);
// swiper 10
new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 0,
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  on: {
    init: (el: any) => animationSlide(el.slides[el.activeIndex], 0),
    slideChangeTransitionStart: (el: any) => animationSlide(el.slides[el.activeIndex], 0),
  },
  autoplay: {
    delay: 5000,
  },
});

new Swiper(".swiperSectionContact", {
  loop: true,
  spaceBetween: 20,
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  breakpoints: {
    1366: {
      slidesPerView: 5,
    },
    1024: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 3,
    },
    500: {
      slidesPerView: 2,
    },
  },
  on: {
    init: (el: any) => animationSlide(el.slides[el.activeIndex], 0),
    slideChangeTransitionEnd: (el: any) => animationSlide(el.slides[el.activeIndex], 0),
  },
});

new Swiper(".relatedSwiper", {
  loop: true,
  spaceBetween: 20,
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
    },
    640: {
      slidesPerView: 2,
    },
  },
  on: {
    init: (el: any) => animationSlide(el.slides[el.activeIndex], 0),
    slideChangeTransitionEnd: (el: any) => animationSlide(el.slides[el.activeIndex], 0),
  },
  autoplay: {
    delay: 5000,
  },
});
/// menu

Array.from(document.getElementsByClassName('handle-menu')).forEach((el) => {
  el.addEventListener('click', () => {
    toggleClassList(document.getElementById('hamburger'), ['body-menu-opened']);
    toggleClassList(document.getElementById('bg-menu'), ['opacity-0', '-right-full', 'opacity-70', 'right-0']);
    toggleClassList(document.getElementById('menu'), ['-right-80', 'right-0']);
    toggleClassList(document.getElementById('list-menu'), ['top-0', 'opacity-100', 'top-10', 'opacity-0']);
  })
});

const toggleClassList = (element: HTMLElement| null, classList: string[]) => element && classList.forEach((e) => element.classList.toggle(e))

// glightbox 3
GLightbox({});

// sweetalert2 11
// import { Message } from './message.ts'
// document.getElementById('success')!.addEventListener('click', () => Message.success({ text: 'Success' }))
// document.getElementById('warning')!.addEventListener('click', () => Message.warning({ text: 'Warning' }))
// document.getElementById('confirm')!.addEventListener('click', () => Message.confirm({ text: 'Confirm' }))
// document.getElementById('error')!.addEventListener('click', () => Message.error({ text: 'Error' }))


// import { setupCounter } from './counter.ts'
// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
