import './index.less'

// vanilla-lazyload 17
new LazyLoad({callback_error: (el: any) => (el.src = 'https://via.placeholder.com/440x560/?text=Error') });

// glightbox 3
GLightbox({});

// sweetalert2 11
import { Message } from './message.ts'
import { API } from './api.ts'
(<any>window)._METHOD_ = {
  API: API,
  Message: Message,
};

import { setupValidation } from './validation.ts'
setupValidation();

import { setupMenuMobile } from './menu-mobile.ts';
setupMenuMobile(document.getElementsByClassName('handle-menu'));

// swiper 10
import { setupSwiper } from './swiper.ts';
setupSwiper();
