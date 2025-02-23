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
import { setupFormValid } from './validation';

declare global {
  interface Window {
    SetupFormValid: typeof setupFormValid;
    API: typeof API;
    Message: typeof Message;
    _FORMSTATUS_: Record<string, boolean>;
    _MESSAGE_: Record<string, string>;
    _FORM_: { [formName: string]: { [fieldName: string]: unknown } };
    _SELECT_: { [formName: string]: { [fieldName: string]: typeof Choices } };
    _CLOSE_MODAL_: { [modalName: string]: () => void };
  }
}

const Theme = (() => {
  /* Function ============ */
  return {
    init: () => {
      // console.log('init');
      (<any>window).API = API;
      setupDropdown();
      setupMenuMobile(document.getElementsByClassName('handle-menu'));
      (<any>window).Message = Message;
      setupTooltip();

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
      setupModal();
    },

    load: () => {
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
