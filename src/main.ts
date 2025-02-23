/**
  Template Name    : Theme
  Author           : ducnn230288
  Version          : 1.0
  File Name        : main.js
  Author Portfolio : https://github.com/ducnn230288

  Core script to handle the entire theme and core functions
**/
import './less.less';
import './style/camping.less';
import './style/home.less';
import './style/layout.less';
import './style/new.less';
import './style/tool.less';
import './style/touring.less';

import { API } from './api';
import { setupDropdown } from './dropdown';
import { setupMenuMobile } from './menu-mobile';
import { Message } from './message';
import { setupModal } from './modal';
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
      setupMenuMobile(document.getElementsByClassName('handle-menu'));
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
