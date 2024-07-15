import './less.less';

// sweetalert2 11
import { API } from './api';
import { Message } from './message';
(<any>window).API = API;
(<any>window).Message = Message;

import { setupFormValid } from './validation';
setupFormValid();
(<any>window).SetupFormValid = setupFormValid;
(<any>window)._MESSAGE_ = {
  required: 'Xin vui lòng nhập nội dung',
  email: 'Xin vui lòng nhập địa chỉ email hợp lệ!',
  minLengthCheckBox: 'Xin vui lòng chọn ít nhất ',
  minLength: 'Xin vui lòng nhập tối thiểu ',
  maxLength: 'Xin vui lòng nhập không quá ',
  compare: 'Xin vui lòng nhập không quá ',
};

import { setupMenuMobile } from './menu-mobile';
setupMenuMobile(document.getElementsByClassName('handle-menu'));
// swiper 10
import { setupSwiper } from './swiper';
setupSwiper();

// echarts 5
import { setupEchart } from './echart';
setupEchart();

window.onload = async () => {
  const test = await API.post({
    url: '/authentication/jwt/login',
    values: {
      deviceName: 'Chrome/116.0.0.0 desktop/mac-os-x-15 ccfeecc0-533f-8a96-f60d-8d6253b60420',
      deviceNo: 'Macintosh',
      deviceType: 'BROWSER',
      password: '41234231',
      remember: false,
      username: '12342134',
    },
  });
  console.log(test);
};
