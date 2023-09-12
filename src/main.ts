import './index.less'
import './css/style.css'
// vanilla-lazyload 17
new LazyLoad({ callback_error: (el: any) => (el.src = 'https://via.placeholder.com/440x560/?text=Error') });

// gsap 3
import { animationSlide } from "./gasp.ts";
animationSlide(document.getElementById('title')!, 0);

// glightbox 3
GLightbox({});

// sweetalert2 11
import { Message } from './message.ts'
// document.getElementById('success')!.addEventListener('click', () => Message.success({ text: 'Success' }))
// document.getElementById('warning')!.addEventListener('click', () => Message.warning({ text: 'Warning' }))
// document.getElementById('confirm')!.addEventListener('click', () => Message.confirm({ text: 'Confirm' }))
// document.getElementById('error')!.addEventListener('click', () => Message.error({ text: 'Error' }))
// handle-dialog
Array.from(document.getElementsByClassName('handle-dialog')).forEach((el) => el.addEventListener('click', () =>  {
  const temp = document.getElementsByTagName("template")[0];
  const item = temp.content.querySelector("div");
  if (item) {
    const a = document.importNode(item, true);
    a.textContent += 'tesst';
    const tmp = document.createElement("div");
    tmp.appendChild(a);
    Message.html(tmp.innerHTML);
  }
}))

// import { setupCounter } from './counter.ts'
// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
import {setupSwiper } from './swiper.ts';
setupSwiper();

import {setupMenuMobile } from './menu-mobile.ts';
setupMenuMobile(document.getElementsByClassName('handle-menu'));
