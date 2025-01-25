import './less.less';
import './style/camping.less';
import './style/home.less';
import './style/layout.less';
import './style/new.less';
import './style/tool.less';
import './style/touring.less';

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

import { setupMenuMobile, toggleClassList } from './menu-mobile';
setupMenuMobile(document.getElementsByClassName('handle-menu'));
// swiper 10
// setupSwiper();

// echarts 5
// setupEchart();

window.onload = async () => {
  Array.from(document.getElementsByClassName('handle-filter')).forEach(el => {
    el.addEventListener('click', () => {
      const isShow = document.getElementById('filter')!.classList.contains('active');
      setTimeout(
        () => {
          toggleClassList(document.getElementById('bg-filter'), ['opacity-0', '-left-full', 'opacity-50', 'left-0']);
        },
        !isShow ? 0 : 200,
      );
      setTimeout(
        () => {
          toggleClassList(document.getElementById('filter'), ['active']);
          toggleClassList(document.getElementById('cate-container'), ['-left-80', 'left-0']);
        },
        !isShow ? 200 : 0,
      );
    });
  });
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

(window as any).loadHandlebarsTemplate = loadHandlebarsTemplate;
