export class Modal {
  private readonly trigger: HTMLElement;
  private readonly options: {
    closeOnOutsideClick?: boolean;
    closeOnEsc?: boolean;
    trapFocus?: boolean;
  };
  private content?: HTMLElement;
  private isOpen: boolean = false;

  constructor(trigger: HTMLElement) {
    this.trigger = trigger;
    this.options = {
      closeOnOutsideClick: false,
      closeOnEsc: true,
      trapFocus: false,
    };

    this.init();
  }

  private init(): void {
    if (this.trigger.dataset.modal && !window._Modal[this.trigger.dataset.modal]) {
      window._Modal[this.trigger.dataset.modal] = {
        open: () => this.open(),
        close: () => this.close(),
      };
    }
  }

  private setupCloseButton(): void {
    if (!this.content || !this.trigger.dataset.modal) return;
  }

  public open(): void {
    if (this.isOpen) return;
    if (!this.trigger.dataset.modal) return;
    const template = document.getElementById(this.trigger.dataset.modal);
    if (template instanceof HTMLTemplateElement) {
      const clone = template.content.cloneNode(true);
      this.content = document.createElement('div');
      this.content.classList.add('modal');
      const content = document.createElement('div');
      content.classList.add('content');
      content.appendChild(clone);
      this.content.appendChild(content);
      document.body.appendChild(this.content);

      this.isOpen = true;
      this.content.classList.add('show');

      document.body.style.overflow = 'hidden';

      const contentHeight = this.content.scrollHeight;
      const viewportHeight = window.innerHeight;

      if (contentHeight === viewportHeight) {
        this.content.classList.add('small');
      }
      setTimeout(() => {
        this.content?.scrollTo(0, 0);
      });
      this.setupEventListeners();
    }
  }

  private setupEventListeners(): void {
    window._FormValid.setupFormValid();
    this.setupCloseButton();
    if (this.options.closeOnOutsideClick) {
      document.addEventListener('click', this.handleOutsideClick);
    }

    if (this.options.closeOnEsc) {
      document.addEventListener('keydown', this.handleEscape);
    }

    if (this.options.trapFocus) {
      this.trapFocus();
    }
  }

  private readonly handleOutsideClick = (e: MouseEvent): void => {
    if (!this.content) return;
    if (!this.content.contains(e.target as Node) && e.target !== this.trigger) {
      this.close();
    }
  };

  private readonly handleEscape = (e: KeyboardEvent): void => {
    if (e.key === 'Escape') {
      this.close();
    }
  };

  private trapFocus(): void {
    if (!this.content) return;
    const focusableElements = this.content.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    if (!focusableElements) return;

    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    firstElement.focus();

    this.content.addEventListener('keydown', e => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey && document.activeElement === firstElement) {
        lastElement.focus();
        e.preventDefault();
      } else if (document.activeElement === lastElement) {
        firstElement.focus();
        e.preventDefault();
      }
    });
  }

  protected close(): void {
    if (!this.isOpen || !this.content) return;
    this.isOpen = false;
    this.content.classList.remove('show');
    document.body.style.overflow = '';
    this.removeEventListeners();
  }

  private removeEventListeners(): void {
    document.removeEventListener('click', this.handleOutsideClick);
    document.removeEventListener('keydown', this.handleEscape);
    setTimeout(() => {
      this.content?.remove();
      this.content = undefined;
    }, 300);
  }
}
export const setupModal = () => {
  window._Modal = {};
  document.querySelectorAll('[data-modal]').forEach((target: HTMLElement) => {
    if (!window._Modal[target.dataset.modal ?? '']) new Modal(target);
    target.addEventListener('click', () => window._Modal[target.dataset.modal ?? ''].open());
  });
};
