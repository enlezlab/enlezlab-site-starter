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
        left: calc(-600px - var(--space-m));
        width: 600px;
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
      .page-interact__controls {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: var(--space-m);
      }

      .page-interact__control-item {
        display: grid;
        grid-template-columns: 1fr;
        border: 1px solid #333;
        border-radius: 5px;
        overflow: hidden;
      }

      .page-interact__control-item header {
        background: #333;
        padding: calc(var(--space-s) / 2) var(--space-s);
        font-size: 16px;
      }

      .page-interact__control-item label {
        background: #222;
        color: #999;
        padding: calc(var(--space-s) / 2) var(--space-s);
        font-size: 16px;
      }

      .page-interact select {
        padding: var(--space-s);
        width: 100%;
        background: transparent;
        color: var(--color-fg);
        font-size: 16px;
        border: none;
      }

      .page-interact select option {
        background: var(--color-bg);
      }

      .page-interact input[type="text"],
      .page-interact select,
      .page-interact textarea {
        box-sizing: border-box;
        border: none;
        padding: var(--space-s);
        width: 100%;
        background: #111;
        color: #999;
        font-size: 16px;
      }

      .page-interact input[type="text"]:focus,
      .page-interact select:focus,
      .page-interact textarea:focus {
        outline: none;
        background: var(--color-bg);
        color: var(--color-fg);
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
        padding-left: 600px
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
      <section class="page-interact__control-item">
        <header>Theme</header>
        <label>Color Themes</label>
        <select class="theme-select" name="">
          <option value="" selected disabled>Choose a Theme</option>
          <option value="00">Theme A</option>
          <option value="01">Theme B</option>
        </select>
      </section>
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

  /*=== dom content interaction ===*/
  /* make this its own component, getting messy now... */

  node() {
    const node = document.querySelectorAll('hero-main')[0];
    return node;
  };

  nodeData() {
    const data = this.node().dataset.output;
    const dataObj = JSON.parse(data);
    dataObj.component = 'hero-main'
    return dataObj;
  };

  nodeEdit(id, componentName) {
    return html`
        <section data-section-id="00" class="page-interact__control-item">
          <header>Hero</header>
          <label>Component</label>
          <select data-output-item data-output-name="component" data-output-value="${this.nodeData().component}">
            <option name="media-object" value="media-object">media-object</option>
            <option name="media-object-reverse" value="media-object-reverse">media-object-reverse</option>
            <option name="hero-main" value="hero-main">hero-main</option>
          </select>
          <label>Title</label>
          <input data-output-item data-output-name="title" data-output-value="${this.nodeData().title}" type="text" value="${this.nodeData().title}" />
          <label>Body</label>
          <textarea data-output-item data-output-name="body" data-output-value="${this.nodeData().body}" id="" name="" cols="30" rows="10">${this.nodeData().body}</textarea>
        </section>
    `;
  };

  nodeEditAction() {
    const _this = this;
    const node = this.node();
    const select = this.querySelectorAll('[data-section-id="00"] select')[0];
    const title = this.querySelectorAll('[data-section-id="00"] input')[0];
    const body = this.querySelectorAll('[data-section-id="00"] textarea')[0];

    const options = select.querySelectorAll('option');
    options.forEach((i) => {
      if (i.value === this.nodeData().component) {
        i.selected = true;
      }
    });

    /* component select */
    select.addEventListener('input', function () {
      _this.output();
    }, false);

    /* title control */
    title.addEventListener('input', function () {
      node.querySelectorAll('h1')[0].innerHTML = this.value;
      _this.output();
    }, false);

    /* body control */
    body.addEventListener('input', function () {
      node.querySelectorAll('p')[0].innerHTML = this.value;
      _this.output();
    }, false);
  }

  /*=== end of dom content interaction ===*/


  output() {
    const outputItems = this.querySelectorAll('.page-interact__control-item');
    let res = [];

    outputItems.forEach((i) => {
      const dataItem = i.querySelectorAll('[data-output-item]');
      let item = {};
      dataItem.forEach((key) => {
        item[key.dataset.outputName] = key.value;
      });
      res.push(item);
    });

    this.setAttribute('data-output', JSON.stringify(res));

    return res;
  };

  template() {
    return html`
      <div class="page-interact">
        <div class="page-interact__controls">
         ${this.themeSelect()}
         ${this.nodeEdit()}
        </div>

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

    this.nodeEditAction();

  };

}

customElements.define('page-interact', PageInteract);
