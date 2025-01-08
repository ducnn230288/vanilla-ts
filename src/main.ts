import './less.less';
import './style/home.less';
import './style/layout.less';
import './style/camping.less';
import './style/new.less';
import './style/touring.less';
import './style/tool.less';

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
// setupSwiper();

// echarts 5
// setupEchart();

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

export const loadHandlebarsTemplate = async ({
  urlTemplate,
  template,
  urlOrData,
  targetId,
  templateId,
  keyData,
}: {
  urlTemplate?: string;
  template?: string;
  urlOrData: string | any[] | Record<string, any>;
  targetId: string;
  templateId?: string;
  keyData?: string;
}) => {
  let data: any[] | Record<string, any>;

  if (typeof urlOrData === 'string') {
    const response = await fetch(urlOrData);
    data = await response.json();
  } else {
    data = urlOrData;
  }

  let templateText: string;

  if (templateId) {
    const templateElement = document.getElementById(templateId);
    if (!templateElement) {
      console.error(`Template with id ${templateId} not found`);
      return;
    }
    templateText = templateElement.innerHTML;
  } else if (template) {
    templateText = template;
  } else if (urlTemplate) {
    const templateSource = await fetch(urlTemplate);
    templateText = await templateSource.text();
  } else {
    console.error('No template source provided');
    return;
  }

  const templateHbs = Handlebars.compile(templateText);

  const html = Array.isArray(data) ? templateHbs({ [keyData || 'data']: data }) : templateHbs(data);

  const list = document.getElementById(targetId);

  if (list) {
    list.innerHTML = html;
  } else {
    console.error(`Element with id ${targetId} not found.`);
  }
};
