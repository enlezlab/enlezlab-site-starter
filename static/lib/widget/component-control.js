import piq from '/lib/piq/dist/piq/core/piq.js';
import {html, css} from '/lib/piq/dist/piq/utils/template-tag.js';

class ComponentControl extends piq {
  name() {
    return 'component-control';
  };

  style() {
    return css`
    `;
  };

  template() {
    return html`
      component control
    `;
  }
};

customElements.define('component-control', ComponentControl);


