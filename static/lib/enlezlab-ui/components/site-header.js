import piq from '/lib/piq/dist/piq/core/piq.js';
import {html, css} from '/lib/piq/dist/piq/utils/template-tag.js';

class SiteHeader extends piq {
  name() {
    return 'site-header';
  };

  data() {
    return JSON.parse(this.props('data-json'));
  };

  navGen() {
    let nav = '';
    const listNav = this.data();

    listNav.forEach((i) => {
      const item = html`
        <li class="site-header__nav-item">
          <a href="${i.url}">
            ${i.name}
          </a>
        </li>
      `;
      nav += item;
    });

    return nav;
  };

  navMobileAction() {
    const btnMobile = this.querySelectorAll('#btn_mobile')[0];
    const siteHeaderNav = document.querySelectorAll('.site-header__nav')[0];
    btnMobile.addEventListener('click', function () {
      (document.body).classList.toggle('body-lock');
      this.classList.toggle('is-active')
      siteHeaderNav.classList.toggle('site-header__nav--opened');
    }, false);
  };

  style() {
    return css`
      .site-header {
        padding: var(--space-m);
      }

      .site-header ul {
        padding: 0;
        margin: 0;
      }

      .site-header li {
        list-style: none;
      }

      .site-header__logo {
        max-width: 300px;
        display: grid;
        grid-template-columns: 200px;
        align-items: center;
      }

      .site-header__logo img {
        width: 100%;
        max-height: 80px;
        height: 100px;
      }

      .site-header__inner {
        display: grid;
        grid-template-columns: 1fr auto;
        grid-gap: var(--space-m);
        align-items: center;
      }

      .site-header__nav > ul {
        font-family: var(--font-ui);
        color: var(--color-03);
        font-weight: 400;
        font-size: 90%;
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: repeat(3, auto);
        grid-gap: var(--space-m);
        position: relative;
      }

      .site-header__nav-icon {
        width: 20px;
        transition: .3s ease;
      }

      .site-header__nav-icon--active {
        transform: rotate(180deg);
      }

      .site-header__nav-btn {
        display: none;
        width: 30px;
      }

      .site-header__nav-btn img {
        width: 100%;
      }


      @media (max-width: 768px) {
        .site-header a {
          color: var(--color-01);
        }

        .site-header__inner {
          grid-template-columns: 1fr 30px;
          grid-gap: 0;
        }

        .site-header__logo {
          max-width: 200px;
          display: grid;
          grid-gap: var(--space-s);
          grid-template-columns: 200px;
          align-items: center;
        }

        .site-header__nav {
          display: none;
        }

        .site-header__nav > ul {
          display: block;
        }

        .site-header__nav-item {
          text-align: center;
          font-size: 1.5rem;
          font-weight: 900;
          margin: var(--space-m) 0;
        }

        .site-header__nav--opened {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: var(--color-03);
          color: var(--color-01);
          z-index: 10;
          padding: calc(var(--space-l) * 4) var(--space-l);
          overflow-y: scroll;
          box-sizing: border-box;
        }

        .site-header__logo {
          grid-row: 1 / 2;
        }

        .site-header__nav-btn {
          display: block;
          grid-row: 1 / 2;
          cursor: pointer;
          z-index: 10;
        }

        .site-header__nav-btn .site-header__nav-btn--open {
          display: block;
        }

        .site-header__nav-btn .site-header__nav-btn--close {
          display: none;
        }

        .site-header__nav-btn.is-active .site-header__nav-btn--open {
          display: none;
        }

        .site-header__nav-btn.is-active .site-header__nav-btn--close {
          display: block;
          filter: invert(1);
        }

      }

    `;
  }

  template() {
    return html`
      <header class="site-header">
        <div class="site-header__inner container">
          <a href="/" class="site-header__logo">
            <img class="site-header__logo--img" src="${this.props('data-logo-url')}" alt="${this.props('data-logo-text')}">
          </a>

          <nav>
            <div class="site-header__nav">
              <ul>
                ${this.navGen()}
              </ul>
            </div>
          </nav>

          <div id="btn_mobile" class="site-header__nav-btn">
            <img class="site-header__nav-btn--open" src="/icons/menu.svg" alt="">
            <img class="site-header__nav-btn--close"src="/icons/x.svg" alt="">
          </div>

        </div>
      </header>
    `;
  };

  connected() {
    this.navMobileAction();
  };
};

customElements.define('site-header', SiteHeader)
