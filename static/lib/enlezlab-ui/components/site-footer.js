import piq from '/lib/piq/dist/piq/core/piq.js';
import {html, css} from '/lib/piq/dist/piq/utils/template-tag.js';

class SiteFooter extends piq {
  name() {
    return 'site-footer';
  };

  data() {
    return JSON.parse(this.props('data-json'));
  };

  navGen() {
    let nav = '';
    const listNav = this.data();

    listNav.forEach((i) => {
      const item = html`
          <a href="${i.url}">
            ${i.name}
          </a>
      `;
      nav += item;
    });

    return nav;
  };

  style() {
    return css`
      .site-footer {
        background: var(--color-03);
        padding: var(--space-l);
        font-family: var(--font-ui);
        font-weight: 400;
        color: var(--color-01);
        position: relative;
        margin-top: calc(var(--space-l) * 4);
        overflow-x: clip;
      }

      .site-footer a {
        color: var(--color-01);
      }

      .site-footer__inner {
        display: grid;
        grid-template-columns: 200px 1fr auto;
        grid-gap: var(--space-m);
        margin-bottom: var(--space-l);
      }

      .site-footer__logo {
        max-width: 200px;
        height: 100px;
        display: grid;
        grid-template-columns: 200px;
      }

      .site-footer__logo img {
        filter: grayscale(1) invert(1) brightness(100);
        max-height: 80px;
      }

      .site-footer__nav {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: var(--space-s);
      }

      .site-footer__legal {
        text-align: center;
        font-family: var(--font-ui);
        font-size: .8rem;
      }

      @media (max-width: 768px) {

        .site-footer__logo {
          margin: 0 auto;
        }

        .site-footer__inner {
          grid-template-columns: 1fr;
          grid-gap: var(--space-m);
          text-align: center;
          margin-bottom: var(--space-l);
        }
      }
    `;
  };

  template() {
    return html`
      <footer class="site-footer">
        <div class="site-footer__inner container">
          <a href="/" class="site-footer__logo">
            <img class="site-footer__logo--img" src="/logo.svg" alt="">
          </a>

          <div></div>

          <nav class="site-footer__nav">
            ${this.navGen()}
          </nav>
        </div>

        <div class="site-footer__legal">
          <div class="mb-m">
            <a href="${this.props('data-policy-url')}">${this.props('data-policy-text')}</a>
          </div>
          <div>
            &copy; ${this.props('data-site-name')}
          </div>
        </div>
      </footer>
    `;
  };
};

customElements.define('site-footer', SiteFooter);
