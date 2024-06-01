
// import piq from '/src/core/piq.js';
// import {html, css} from '/src/utils/template-tag.js';
import piq from '../dist/piq/core/piq.js';
import {html, css} from '../dist/piq/utils/template-tag.js';

// Mock use case
class TheThing extends piq {

  static attr = () => {
    return [
      'type',
      'label'
    ];
  };

  name() {
    return 'the-thing'
  };

  data(s) {
    return super.props(s);
  };

  style() {
    return css`

      .child-class {
        /*test scope*/
      }

      ${this.name()} .yo {

      }

      .test-name {
        color: red;
        background: green;
      }

      ${this.name()} {
        display: block;
        border: 1px solid red;
        padding: 1rem
      }

      @media (max-width: 768px) {
        .test-name {
          background: purple;
        }
      }
    `;
  };

  template() {
    return html`
      <div>===========fisrt level</div>
        <well-then type="${this.data('type')}" label="789"></well-then>
        <div class="test-name"> ${this.data('type')} </div>
        <div> ${this.data('label')} </div>
    `;
  }

  connected() {
    console.log('connected');
  }
};

customElements.define('the-thing', TheThing);


// Mock use case
class WellThen extends piq {

  static attr = () => {
    return [
      'type',
      'label'
    ];
  };

  name() {
    return 'well-then'
  };

  data(s) {
    return super.props(s);
  };

  style() {
    return css`
      {
        display: block;
        border: 1px solid orange;
        padding: 1rem;
      }
    `;
  };

  template() {
    return html`
      <div>====second level</div>
      <div> ${this.data('type')} </div>
      <div> ${this.data('label')} </div>
    `;
  }
};

customElements.define('well-then', WellThen);

