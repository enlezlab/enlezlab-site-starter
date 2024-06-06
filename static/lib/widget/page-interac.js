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
        box-sizing: border-box;
        background: var(--color-bg);
        color: var(--color-fg);
        padding: var(--space-m);
        position: fixed;
        top: 0;
        left: calc(-350px - var(--space-m));
        width: 350px;
        height: 100%;
        transition: .3s ease;
      }

      .page-interact--opened {
        left: 0;
      }

      .page-interact__toggle {
        width: 40px;
        height: 40px;
        display: block;
        background: var(--color-bg);
        position: fixed;
        left: var(--space-m);
        bottom: var(--space-m);
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid var(--color-fg);
        box-shadow: 0px 0px 10px rgba(0, 0, 0, .5);
        cursor: pointer;
        z-index: 9999;
      }

      .theme-select {
        border: 2px solid var(--color-fg);
        padding: var(--space-s);
        width: 100%;
        border-radius: 5px;
        background: transparent;
        color: var(--color-fg);
        font-size: 18px;
      }

      .theme-select option {
        background: var(--color-bg);
      }
    `;
  };

  shrinkBody() {
    const head = document.head;
    const style = document.createElement('style');
    style.innerHTML = css`
      body {
        transition: .3s ease;
      }

      .body-shrink {
        padding-left: 350px
      }
    `;

    head.appendChild(style);
  };

  iconSetting() {
    return html`
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
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
      </select>
    `;
  };

  themeSelectAction() {
    const themeSelect = this.querySelectorAll('.theme-select')[0];
    const _this = this;
    themeSelect.addEventListener('change', function () {
      _this.updateRootVar(_this.rootColorVar(this.value));
    }, false);
  };

  toggleAction() {
    const body = document.body;
    const pageInteract = this.querySelectorAll('.page-interact')[0];
    const toggle = this.querySelectorAll('.page-interact__toggle')[0];
    toggle.addEventListener('click', function () {
      pageInteract.classList.toggle('page-interact--opened');
      body.classList.toggle('body-shrink');
    }, false);
  };

  template() {
    return html`
      <div class="page-interact" draggable="true">
       ${this.themeSelect()}
       <div class="page-interact__toggle">
        ${this.iconSetting()}
       </div>
      </div>
    `;
  };

  connected() {
    this.themeSelectAction();
    this.toggleAction();
    this.shrinkBody();
  };

}

customElements.define('page-interact', PageInteract);
