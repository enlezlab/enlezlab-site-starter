import piq from '/lib/piq/dist/piq/core/piq.js';
import {html, css} from '/lib/piq/dist/piq/utils/template-tag.js';

class FormBasic extends piq {
  name() {
    return 'form-basic';
  };

  data() {
    return JSON.parse(this.props('data-json'));
  };

  inputGen(data) {
    const type = data.type;
    switch (true) {
      case (type === 'text' || type === 'email' || type === 'tel'):
        return `
          <label>${data.label}</label>
          <input type="${data.type}" name="${data.name}" placeholder="${data.placeholder}" />
        `
      case (type === 'textarea'):
        return `
          <label>${data.label}</label>
          <textarea id="" name="${data.name}" cols="30" rows="10" placeholder="${data.placeholder}"></textarea>
        `
      default:
        return;
    }
  };

  inputs() {
    let inputs = '';
    this.data().forEach((i) => {
      inputs += this.inputGen(i);
    });

    return inputs;
  };

  consentCheck() {
    return html`
      <div class="consent-wrap">
        <input id="consent" name="consent" type="checkbox">
        <label for="consent">
          <span>
            ${this.props('data-consent-text')}
          </span>

          <a href="${this.props('data-policy-url')}" style="text-transform: lowercase;">
            ${this.props('data-policy-text')}
          </a>
        </label>
      </div>
    `;
  };

  consentCheckAction() {
    const consent = this.querySelectorAll('#consent')[0];
    const btnSubmit = this.querySelectorAll('#btn_submit')[0];

    consent.addEventListener('input', function () {
      const state = this.checked;

      if (state === true) {
        btnSubmit.classList.remove('btn--disabled');
      }

      if (state === false) {
        btnSubmit.classList.add('btn--disabled');
      }

    }, false);
  };

  success() {
    console.log('Form submit success!');
    this.innerHTML = html`
      <h2>success</h2>
    `;
  };

  failed() {
    console.log('Form submit failed...');
    this.innerHTML = html`
      <h2>failed</h2>
    `;
  };

  handleSubmit(event, scope) {
    event.preventDefault();

    const myForm = event.target;
    const formData = new FormData(myForm);
    const _this = this;

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then((res) => {
        scope.success();
      })
      .catch((error) => {
        scope.failed();
      });
  };

  submitAction() {
    const form = this.querySelectorAll('#form_inquiry')[0];
    const _this = this;
    form.addEventListener('submit', function () {
      _this.handleSubmit(event, _this)
    }, false);
  };

  style() {
    return css`

    `;
  };

  template() {
    return html`
      <div class="container--s">
        <form id="form_inquiry" class="form-basic" name="${this.props('data-form-name')}" data-netlify="true">
          ${this.inputs()}
          ${this.consentCheck()}

          <button id="btn_submit" class="btn btn--primary btn--disabled">
            Submit
          </button>
        </form>
      </div>
    `;
  };

  connected() {
    this.consentCheckAction();
    this.submitAction();
  };
};

customElements.define('form-basic', FormBasic);
