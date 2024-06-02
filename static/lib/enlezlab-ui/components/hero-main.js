import piq from '/lib/piq/dist/piq/core/piq.js';
import {html, css} from '/lib/piq/dist/piq/utils/template-tag.js';

class HeroMain extends piq {
  name() {
    return 'hero-main';
  };

  style() {
    return css`
      .hero {
        text-align: center;
        padding: 0 var(--space-l);
        color: var(--color-03);
        margin-top: calc(var(--space-l) * 3);
        margin-bottom: calc(var(--space-l) * 4);
        position: relative;
        overflow-x: clip;
      }

      .hero h1 {
        margin: 0;
      }

      .hero p {
        font-family: var(--font-heading);
      }

    @media (max-width: 768px) {

      .hero {
        margin-top: calc(var(--space-l) * 1);
        margin-bottom: calc(var(--space-l) * 2);
        padding: 0 var(--sapce-s);
        height: 100vh;
      }

        .hero h1 {
          font-size: 1.5rem;
        }

        .hero p {
          font-size: .9rem;
        }
    }
    `;
  };

  heading(title, level) {
    return `
      <h${level}>${title}</h${level}>
    `
  }

  template() {
    return html`
      <section class="hero">
        <div class="container">
          ${this.props('data-body')}
        </div>
      </section>
    `;
  };
};

customElements.define('hero-main', HeroMain);
