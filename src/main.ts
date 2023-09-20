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








const temp = document.getElementById("template-1");
if (temp) {
  const template = Handlebars.compile(temp.innerHTML);
  const data = {"datass": JSON.stringify({ "name": "Alan", "hometown": "Somewhere, TX",
      "kids": [{"name": "Jimmy", "age": "12"}, {"name": "Sally", "age": "4"}]}), "name": "Alan", "hometown": "Somewhere, TX",
    "kids": [{"name": "Jimmy", "age": "12"}, {"name": "Sally", "age": "4"}] };
  document.getElementById('text')!.innerHTML = template(data);
}

Array.from(document.getElementsByClassName('handle-dialog')).forEach((el) => el.addEventListener('click', (e) =>  {
  const temp = document.getElementById("template-1");
  if (temp) {
    const template = Handlebars.compile(temp.innerHTML);
    const data = { "name": "Alan", "hometown": "Somewhere, TX",
      "kids": [{"name": "Jimmy", "age": "12"}, {"name": "Sally", "age": "4"}]};
    Message.html(template(data));
  }

}))

// echarts 5
import { setupEchart } from './echart.ts'
setupEchart();

// inputmask 5
Inputmask().mask(document.querySelectorAll("input"));

document.getElementById('success')!.addEventListener('click', () => Message.success({text: 'Success'}))
document.getElementById('warning')!.addEventListener('click', () => Message.warning({text: 'Warning'}))
document.getElementById('confirm')!.addEventListener('click', () => Message.confirm({text: 'Confirm'}))
document.getElementById('error')!.addEventListener('click', () => Message.error({text: 'Error'}))

window.onload = async () => {
  const test = await API.post('/authentication/jwt/login', {
    deviceName:
      "Chrome/116.0.0.0 desktop/mac-os-x-15 ccfeecc0-533f-8a96-f60d-8d6253b60420",
    deviceNo: "Macintosh",
    deviceType: "BROWSER",
    password: "41234231",
    remember: false,
    username: "12342134",
  });
  console.log(test);
};

