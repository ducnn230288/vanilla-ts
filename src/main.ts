import './less.less'

// vanilla-lazyload 17
new LazyLoad({callback_error: (el: any) => (el.src = 'https://via.placeholder.com/1x1/?text=') });

// glightbox 3
GLightbox({});

// sweetalert2 11
import { Message } from './message.ts'
import { API } from './api.ts'

import { setupFormValid } from './validation.ts'
setupFormValid();

(<any>window).API = API;
(<any>window).Message = Message;
(<any>window).SetupFormValid = setupFormValid;
(<any>window)._MESSAGE_ = {
  required: 'Xin vui lòng nhập nội dung',
  email: 'Xin vui lòng nhập địa chỉ email hợp lệ!',
  mincheck: 'Xin vui lòng chọn ít nhất '
};

import { setupMenuMobile } from './menu-mobile.ts';
setupMenuMobile(document.getElementsByClassName('handle-menu'));
// swiper 10
import { setupSwiper } from './swiper.ts';
setupSwiper();
