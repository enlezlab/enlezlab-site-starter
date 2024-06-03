import piq from '/lib/piq/dist/piq/core/piq.js';
import {html, css} from '/lib/piq/dist/piq/utils/template-tag.js';

class ReadingZone extends piq {
  name() {
    return 'reading-zone';
  };

  style() {
    return css`
      .reading-zone {
      }

      .reading-zone h1 {
        font-size: 2.2rem;
      }

      .reading-zone a {
        word-wrap: break-word;
      }

      .reading-zone__featured-img {
        overflow: hidden;
        border-radius: 10px;
      }

      @media (max-width: 768px) {
        .reading-zone h1 {
          font-size: 1.5rem;
        }

        .reading-zone h2 {
          font-size: 1.2rem;
        }

        .reading-zone h3 {
          font-size: 1rem;
        }

        .reading-zone p,
        .reading-zone li {
          font-size: .9rem;
        }
      }

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
