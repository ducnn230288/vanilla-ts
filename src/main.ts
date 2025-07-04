/**
  Template Name    : Theme
  Author           : ducnn230288
  Version          : 1.0
  File Name        : main.js
  Author Portfolio : https://github.com/ducnn230288

  Core script to handle the entire theme and core functions
**/
import './less.less';

import { API } from './api';
import { setupDropdown } from './dropdown';
import { setupEchart } from './echart';
import { setupMenuMobile } from './menu-mobile';
import { Message } from './message';
import { setupModal } from './modal';
import { setupSwiper } from './swiper';
import { setupTooltip } from './tooltip';
import { FormValidator } from './validation';

declare global {
  interface Window {
    _API: typeof API;
    _Message: typeof Message;
    _FormValid: FormValidator;
    _Modal: {
      [modalName: string]: {
        open: () => void;
        close: () => void;
      };
    };
    _Text: Record<string, string>;
  }
}
window._Text = {
  required: 'Xin vui lòng nhập nội dung',
  email: 'Xin vui lòng nhập địa chỉ email hợp lệ!',
  minLengthCheckBox: 'Xin vui lòng chọn ít nhất ',
  minLength: 'Xin vui lòng nhập tối thiểu ',
  maxLength: 'Xin vui lòng nhập không quá ',
  compare: 'Xin vui lòng nhập không quá ',
};
const Theme = (() => {
  /* Function ============ */
  return {
    init: () => {
      // console.log('init');
      window._API = API;
      window._Message = Message;
      window._FormValid = new FormValidator();
      window._FormValid.setupFormValid();

      setupDropdown();
      setupEchart();
      setupMenuMobile();
      setupSwiper();
      setupTooltip();
      setupModal();
    },

    load: () => {
      gsap.to(document.querySelector('.preloader'), {
        opacity: '0',
        display: 'none',
        duration: 0.5,
      });
      // console.log('load');
    },

    scroll: () => {
      // console.log('scroll');
    },

    resize: () => {
      // console.log('resize');
    },
  };
})();

/* Document.ready Start */
document.addEventListener('DOMContentLoaded', () => Theme.init());
/* Document.ready END */

/* Window Load START */
window.onload = async () => Theme.load();
/*  Window Load END */

/* Window Resize START */
window.addEventListener('resize', () => Theme.resize(), true);
/*  Window Resize END */

/* Window Resize START */
window.addEventListener('scroll', () => Theme.scroll(), true);
/*  Window Resize END */

// const test = await API.post({
//   url: '/authentication/jwt/login',
//   values: {
//     deviceName: 'Chrome/116.0.0.0 desktop/mac-os-x-15 ccfeecc0-533f-8a96-f60d-8d6253b60420',
//     deviceNo: 'Macintosh',
//     deviceType: 'BROWSER',
//     password: '41234231',
//     remember: false,
//     username: '12342134',
//   },
// });
// console.log(test);
