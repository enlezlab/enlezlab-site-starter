import piq from '/lib/piq/dist/piq/core/piq.js';
import {html, css} from '/lib/piq/dist/piq/utils/template-tag.js';

class HeroMain extends piq {
  name() {
    return 'hero-main';
  };

  style() {
    return css`
      hero-main {
        display: block;
      }

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
  };

  cta() {
    if (this.props('data-cta-text')) {
      return `
          <a href="${this.props('data-cta-link')}" class="btn btn--primary">
            ${this.props('data-cta-text')}
          </a>
      `;
    }
  };

  output() {
    const res = {
      title: this.props('data-title'),
      body: this.props('data-body'),
    };

    return JSON.stringify(res)
  };

  template() {
    return html`
      <section class="hero">
        <div class="container">
          ${this.heading(this.props('data-title'), '1')}
          <p>
          ${this.props('data-body')}
          </p>
          ${this.cta()}
        </div>
      </section>
    `;
  };

  connected() {
    this.setAttribute('data-output', this.output());
  };
};

customElements.define('hero-main', HeroMain);
