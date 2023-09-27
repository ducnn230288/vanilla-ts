import './index.less'
// vanilla-lazyload 17
new LazyLoad({callback_error: (el: any) => (el.src = 'https://via.placeholder.com/440x560/?text=Error') });

// swiper 10
import {setupSwiper } from './swiper.ts';
setupSwiper();

import {setupMenuMobile } from './menu-mobile.ts';
setupMenuMobile(document.getElementsByClassName('handle-menu'));

// Array.from(document.getElementsByClassName('handle-dialog')).forEach((el) => el.addEventListener('click', () =>  {
//   const temp = document.getElementById("template-1");
//   if (temp) {
//     const a = document.importNode(temp, true);
//     a.innerHTML = a.innerHTML.replace(/{{test}}/g, 'TEST')
//     Message.html(a.innerHTML);
//   }
// }))

// glightbox 3
GLightbox({});

// echarts 5
// import { setupEchart } from './echart.ts'
// setupEchart();

// inputmask 5
Inputmask().mask(document.querySelectorAll("input"));


// sweetalert2 11
// import { Message } from './message.ts'
// document.getElementById('success')!.addEventListener('click', () => Message.success({text: 'Success'}))
// document.getElementById('warning')!.addEventListener('click', () => Message.warning({text: 'Warning'}))
// document.getElementById('confirm')!.addEventListener('click', () => Message.confirm({text: 'Confirm'}))
// document.getElementById('error')!.addEventListener('click', () => Message.error({text: 'Error'}))


import { 
  toggleDropDown, 
  toggleDropList, 
  chooseItem, searchItem, 
  showMore, 
  dropHome, 
  dropShop, 
  dropProduct,
  dropInv,
  dropVen,
  dropMega,
  dropMen,
  dropWomen,
  dropTech,
  dropBlog,
  dropLayout,
  dropLng,
  dropPage,
  closeMenu,
  openMenu
} from './togglemenu.ts'
toggleDropDown(document.querySelector<HTMLButtonElement>('#menubtn')!)
toggleDropList(document.querySelector<HTMLButtonElement>('#btnlist')!)
chooseItem(document.querySelector<HTMLButtonElement>('#btnlist')!)
searchItem(document.querySelector<HTMLInputElement>('#search')!)
showMore(document.querySelector<HTMLButtonElement>('#plusbtn')!)
dropHome(document.querySelector<HTMLElement>('#homebtn')!)
dropShop(document.querySelector<HTMLElement>('#shopbtn')!)
dropProduct(document.querySelector<HTMLElement>('#productbtn')!)
dropInv(document.querySelector<HTMLElement>('#invbtn')!)
dropVen(document.querySelector<HTMLElement>('#venbtn')!)
dropMega(document.querySelector<HTMLElement>('#megabtn')!)
dropWomen(document.querySelector<HTMLElement>('#wmbtn')!)
dropMen(document.querySelector<HTMLElement>('#mbtn')!)
dropTech(document.querySelector<HTMLElement>('#techbtn')!)
dropBlog(document.querySelector<HTMLElement>('#blogbtn')!)
dropLayout(document.querySelector<HTMLElement>('#layoutbtn')!)
dropLng(document.querySelector<HTMLElement>('#lngbtn')!)
dropPage(document.querySelector<HTMLElement>('#pagebtn')!)
closeMenu(document.querySelector<HTMLElement>('#closemenu')!)
openMenu(document.querySelector<HTMLElement>('.openmenu')!)
openMenu(document.querySelector<HTMLElement>('.openmenu2')!)

import { slideOutAnimation } from './animation.ts'
slideOutAnimation(document.querySelector<HTMLElement>('#navxl')!)
