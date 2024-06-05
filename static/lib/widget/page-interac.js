import piq from '/lib/piq/dist/piq/core/piq.js';
import {html, css} from '/lib/piq/dist/piq/utils/template-tag.js';

class PageInteract extends piq {
  name() {
    return 'page-interact';
  };

  style() {
    return css`
      page-interact {
        --color-bg: #000;
        --color-fg: #fff;
      }

      .page-interact {
        --color-bg: #000;
        background: var(--color-bg);
        color: var(--color-fg);
        padding: var(--space-m);
      }
    `;
  };

  rootColorVar(id) {
    switch (id) {
      case "00":
        return css`
          :root {
            --color-00: #000000;
            --color-01: #ffffff;
            --color-02: #d9abf4;
            --color-03: #301640;
            --color-04: #e0c8ee;
          }
        `;

      case "01":
        return css`
          :root {
            --color-00: #000000;
            --color-01: #ffffff;
            --color-02: #229a95 ;
            --color-03: #062c2a;
            --color-04: #b2e6e4;
          }
        `;
    }
  };

  updateRootVar(rootVar) {
    const head = document.head;
    const styleNode = document.createElement('style');
    styleNode.innerHTML = rootVar;
    head.appendChild(styleNode);
  };

  themeSelect() {
    return html`
      <select class="theme-select" name="">
        <option value="" selected disabled>Choose a Theme</option>
        <option value="00">Theme A</option>
        <option value="01">Theme B</option>
        <option value="02">Theme C</option>
      </select>
    `;
  };

  themeSelectAction() {
    const themeSelect = this.querySelectorAll('.theme-select')[0];
    const _this = this;
    themeSelect.addEventListener('change', function () {
      console.log(this.value);
      _this.updateRootVar(_this.rootColorVar(this.value));
    }, false);
  };

  template() {
    return html`
      <div class="page-interact" draggable="true">
       ${this.themeSelect()}
      </div>
    `;
  };

  connected() {
    this.themeSelectAction();
  };

}

customElements.define('page-interact', PageInteract);
