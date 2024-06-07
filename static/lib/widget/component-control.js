import piq from '/lib/piq/dist/piq/core/piq.js';
import {html, css} from '/lib/piq/dist/piq/utils/template-tag.js';

class ComponentControl extends piq {
  name() {
    return 'component-control';
  };

  style() {
    return css`
      .component-control {
        display: grid;
        grid-template-columns: 1fr;
      }

      .component-control {
        display: grid;
        grid-template-columns: 1fr;
        border: 1px solid #333;
        border-radius: 5px;
        overflow: hidden;
      }

      .component-control header {
        background: #333;
        padding: calc(var(--space-s) / 2) var(--space-s);
        font-size: 16px;
      }

      .component-control label {
        background: #222;
        color: #999;
        padding: calc(var(--space-s) / 2) var(--space-s);
        font-size: 16px;
      }

      .component-control select {
        padding: var(--space-s);
        width: 100%;
        background: transparent;
        color: var(--color-fg);
        font-size: 16px;
        border: none;
      }

      .component-control select option {
        background: var(--color-bg);
      }

      .component-control input[type="text"],
      .component-control select,
      .component-control textarea {
        box-sizing: border-box;
        border: none;
        padding: var(--space-s);
        width: 100%;
        background: #111;
        color: #999;
        font-size: 16px;
      }

      .component-control input[type="text"]:focus,
      .component-control select:focus,
      .component-control textarea:focus {
        outline: none;
        background: var(--color-bg);
        color: var(--color-fg);
      }
    `;
  };

  data() {
    return {
      sectionName: this.props('data-section-name'),
      component: this.props('data-component'),
      title: this.props('data-title'),
      body: this.props('data-body'),
    }
  };

  setDefaultComponent() {
    const options = this.querySelectorAll('option');
    options.forEach((i) => {
      if (i.value === this.data().component) {
        i.selected = true;
      }
    });
  };

  focus() {
    const _this = this;
    const controls = this.querySelectorAll('[data-node]');
    controls.forEach((i) => {
      if (i.dataset.node === 'section') {
        return;
      }

      i.addEventListener('input', function() {
        this.setAttribute('value', this.value);
        _this.output();
      }, false);
    });
  };

  output() {
    const dataNode = this.querySelectorAll('[data-node]');
    const resObj = {};
    dataNode.forEach((i) => {
      if (i.dataset.node === 'section') {
        resObj[i.dataset.node] = i.innerText;
      } else {
        resObj[i.dataset.node] = i.value;
      }
    });
    this.setAttribute('data-output', JSON.stringify(resObj));
  };

  template() {
    return html`
        <section class="component-control">
          <header data-node="section">${this.data().sectionName}</header>
          <label>Component</label>
          <select data-node="component">
            <option name="media-object" value="media-object">media-object</option>
            <option name="media-object-reverse" value="media-object-reverse">media-object-reverse</option>
            <option name="hero-main" value="hero-main">hero-main</option>
          </select>
          <label>Title</label>
          <input data-node="title" type="text" value="${this.data().title}" />
          <label>Body</label>
          <textarea data-node="body" id="" name="" cols="30" rows="5">${this.data().body}</textarea>
        </section>
    `;
  };

  connected() {
    this.setDefaultComponent();
    this.output();
    this.focus();
  };
};

customElements.define('component-control', ComponentControl);


