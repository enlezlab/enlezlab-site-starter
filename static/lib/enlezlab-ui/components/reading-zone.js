import piq from '/lib/piq/dist/piq/core/piq.js';
import {html, css} from '/lib/piq/dist/piq/utils/template-tag.js';

class ReadingZone extends piq {
  name() {
    return 'reading-zone';
  };

  style() {
    return css`

    `;
  };

  template() {
    return html`
      <section class="reading-zone container--l">
        <p>
          ${this.props('data-body')}
        </p>
      </section>
    `;
  };

};

customElements.define('reading-zone', ReadingZone);
