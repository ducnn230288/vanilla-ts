export class FormValidator {
  readonly regexEmail = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/;
  public formData = {};
  public selects = {};
  public messages: Record<string, string> = {};
  public formStatus = {};

  public setupFormValid() {
    Array.from(document.getElementsByTagName('form')).forEach(el => {
      if (!el.noValidate) return;
      const nameForm = el.getAttribute('name') ?? '';
      this.formData[nameForm] = {};
      this.formStatus[nameForm] = false;
      this.selects[nameForm] = {};
      el.addEventListener('submit', event => {
        event.preventDefault();
        this.submitForm(el);
      });

      Array.from(['input', 'textarea']).forEach(tag =>
        Array.from(el.querySelectorAll(tag)).forEach((element: HTMLInputElement) => {
          this.addEventBlur(element, tag, nameForm);
        }),
      );
      Array.from(['.pretty > input', 'select', 'range-slider']).forEach(tag =>
        Array.from(el.querySelectorAll(tag)).forEach((element: HTMLInputElement) => {
          if (element.type.indexOf('select') > -1)
            this.selects[nameForm][element.name] = new Choices(element, {
              removeItemButton: true,
            });
          console.log(element, tag, nameForm);
          this.addEventChange(element, tag, nameForm);
        }),
      );
    });
  }

  private addEventBlur(element: HTMLInputElement, tag: string, nameForm: string) {
    element.addEventListener('blur', () => this.showMessage(element, tag, 'blur', nameForm), false);
  }

  private addEventChange(element: HTMLInputElement, tag: string, nameForm: string) {
    element.addEventListener('change', () => this.showMessage(element, tag, 'change', nameForm), false);
  }

  private submitForm(el: HTMLFormElement) {
    const nameForm = el.getAttribute('name') ?? '';
    Array.from(['input', 'textarea']).forEach(tag =>
      el.querySelectorAll('.group > ' + tag).forEach(element => {
        this.showMessage(element as HTMLInputElement, tag, 'blur', nameForm);
      }),
    );
    Array.from(['.pretty > input', 'select']).forEach(tag =>
      el.querySelectorAll(tag).forEach(element => {
        this.showMessage(element as HTMLInputElement, tag, 'change', nameForm, true);
      }),
    );
    this.formStatus[nameForm] = el.querySelectorAll('.group.error').length === 0;
    return true;
  }

  private showMessage(el: HTMLInputElement, tag: string, event: string, nameForm: string, isSubmit = false) {
    const parentElement = el.closest('.group');
    const nameValue = el.getAttribute('name') ?? '';

    if (!parentElement) return;

    if (!isSubmit) {
      this.updateFormData(el, tag, nameForm, nameValue);
    }

    const message = this.getMessage(el, nameForm, isSubmit);
    gsap.timeline({
      defaults: { duration: 0.3, ease: 'power1.inOut' },
    });
    const error = parentElement.querySelector('p');

    if (message) {
      this.handleErrorMessage(parentElement, tag, nameForm, nameValue, message, error, event);
    } else {
      this.handleNoErrorMessage(parentElement, tag, error, event, nameForm);
    }
  }

  private updateFormData(el: HTMLInputElement, tag: string, nameForm: string, nameValue: string) {
    if (tag === 'select') {
      this.formData[nameForm][nameValue] =
        el.type.indexOf('multiple') > -1
          ? this.selects[nameForm][nameValue].getValue().map((i: any) => i.value)
          : this.selects[nameForm][nameValue].getValue().value;
    } else {
      this.formData[nameForm][nameValue?.replaceAll('[]', '')] =
        nameValue.indexOf('[]') === -1
          ? el.value
          : [].filter
              .call(document.getElementsByName(nameValue), (c: HTMLInputElement) => c.checked)
              .map((c: HTMLInputElement) => c.value);
    }
  }

  private handleErrorMessage(
    parentElement: Element,
    tag: string,
    nameForm: string,
    nameValue: string,
    message: string,
    error: Element | null,
    event: string,
  ) {
    if (error) {
      error.innerHTML = message;
      parentElement.classList.add('error');
      return;
    }
    if (tag === 'select') this.selects[nameForm][nameValue].destroy();
    const oldInput = parentElement.querySelectorAll(tag);
    parentElement.innerHTML += `<p class="error">${message}</p>`;
    const p = parentElement.querySelector('p');
    const tl = gsap.timeline({
      defaults: { duration: 0.3, ease: 'power1.inOut' },
    });
    tl.from(p, { marginTop: '-15', opacity: '0', fontSize: '10' });

    parentElement.classList.add('error');
    Array.from(parentElement.querySelectorAll(tag)).forEach((input: HTMLInputElement, index) => {
      if (tag === 'select') {
        this.selects[nameForm][input.name] = new Choices(input, {
          removeItemButton: true,
        });
      }
      input.checked = (oldInput[index] as HTMLInputElement).checked;
      input.value = (oldInput[index] as HTMLInputElement).value;
      input.addEventListener(event, () => this.showMessage(input, tag, event, nameForm), false);
    });
  }

  private handleNoErrorMessage(
    parentElement: Element,
    tag: string,
    error: Element | null,
    event: string,
    nameForm: string,
  ) {
    const oldInput = parentElement.querySelectorAll(tag);
    parentElement.classList.remove('error');
    const tl = gsap.timeline({
      defaults: { duration: 0.3, ease: 'power1.inOut' },
    });
    if (error) tl.to(error, { marginTop: '-15', opacity: '0', fontSize: '10' });
    setTimeout(() => {
      parentElement.querySelector('p')?.remove();
      Array.from(parentElement.querySelectorAll(tag)).forEach((input: HTMLInputElement, index) => {
        input.checked = (oldInput[index] as HTMLInputElement).checked;
        input.addEventListener(event, () => this.showMessage(input, tag, event, nameForm), false);
      });
    }, 300);
  }

  private getMessage(el: HTMLInputElement, nameForm: string, isSubmit: boolean) {
    let { value } = el;
    const { required, type, name, dataset } = el;

    if (isSubmit || (type === 'checkbox' && name && name.indexOf('[]') > -1)) {
      value = this.formData[nameForm][name.replace('[]', '')] as string;
    }

    if (this.isRequiredInvalid(value, required, name)) {
      return window._Text.required;
    }

    if (this.isEmailInvalid(value, type)) {
      return window._Text.email;
    }

    if (this.isMinLengthInvalid(value, dataset)) {
      return window._Text.minLengthCheckBox + dataset['minLength'] + ' ký tự';
    }

    if (this.isMaxLengthInvalid(value, dataset)) {
      return window._Text.minLengthCheckBox + dataset['maxLength'] + ' ký tự';
    }

    if (this.isRegexInvalid(value, dataset)) {
      return dataset.hasOwnProperty('message') ? dataset['message'] : window._Text.required;
    }

    if (this.isCompareInvalid(value, el, dataset)) {
      return dataset.hasOwnProperty('message') ? dataset['message'] : window._Text.required;
    }

    if (this.isCheckboxMinLengthInvalid(type, name, dataset, value)) {
      return window._Text.minLengthCheckBox + dataset['minLength'];
    }

    return '';
  }

  private isRequiredInvalid(value: any, required: boolean, name: string): boolean {
    return !value && required && name.indexOf('[]') === -1;
  }

  private isEmailInvalid(value: any, type: string): boolean {
    return value && type === 'email' && !this.regexEmail.test(value.trim());
  }

  private isMinLengthInvalid(value: any, dataset: DOMStringMap): boolean {
    return value && dataset.hasOwnProperty('minLength') && value.length < parseInt(dataset['minLength']!);
  }

  private isMaxLengthInvalid(value: any, dataset: DOMStringMap): boolean {
    return value && dataset.hasOwnProperty('maxLength') && value.length > parseInt(dataset['maxLength']!);
  }

  private isRegexInvalid(value: any, dataset: DOMStringMap): boolean {
    return value && dataset.hasOwnProperty('regex') && !new RegExp(dataset['regex']!).test(value.trim());
  }

  private isCompareInvalid(value: any, el: HTMLInputElement, dataset: DOMStringMap): boolean {
    if (value && dataset.hasOwnProperty('compare')) {
      const compare = el.parentElement?.parentElement?.querySelector(
        `[name='${dataset['compare']}']`,
      ) as HTMLInputElement;
      return !!compare && !!compare.value && compare.value.trim() !== value.trim();
    }
    return false;
  }

  private isCheckboxMinLengthInvalid(type: string, name: string, dataset: DOMStringMap, value: any): boolean {
    return (
      type === 'checkbox' &&
      name.indexOf('[]') > -1 &&
      dataset.hasOwnProperty('minLength') &&
      (!value || value.length < parseInt(dataset['minLength']!))
    );
  }
}
