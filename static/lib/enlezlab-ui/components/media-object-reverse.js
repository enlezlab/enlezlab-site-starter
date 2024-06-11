import piq from '/lib/piq/dist/piq/core/piq.js';
import {html, css} from '/lib/piq/dist/piq/utils/template-tag.js';

class MediaObjectReverse extends piq {
  name() {
    return 'media-object-reverse';
  };

  style() {
    return css`
        media-object-reverse {
          container-type: inline-size;
          display: block;
        }

        .media-object {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          grid-template-rows: 1fr;
          grid-gap: var(--space-l);
          align-items: center;
          margin-bottom: calc(var(--space-l) * 4);
          margin-top: calc(var(--space-l) * 2);
          color: var(--color-03);
        }

          .media-object__img {
            margin: 0;
            border-radius: 10px;
            overflow: hidden;
          }

          .media-object__img img {
            width: 100%;
            margin: 0 auto;
            display: block;
          }

          .media-object__text h2 {
            margin-top: 0;
            margin-bottom: var(--space-s);
            font-size: 2rem;
          }

          .media-object__text p {
            font-family: var(--font-ui);
            line-height: 1.5;
          }

          .media-object--reverse{
            display: grid;
            grid-template-columns: 1.2fr 1fr;
            grid-template-rows: 1fr;
            align-items: center;
          }

          .media-object--reverse .media-object__img {
            grid-column: 2 / 3;
            grid-row: 1 / 2;
          }

          .media-object--reverse .media-object__text {
            grid-column: 1 / 2;
            grid-row: 1 / 2;
          }

          @container (max-width: 768px) {

            .media-object {
              grid-template-columns: 1fr;
              margin-bottom: calc(var(--space-l) * 1);
            }

            .media-object--reverse .media-object__img {
              grid-column: 1 / 2;
              grid-row: 1 / 2;
            }

            .media-object--reverse .media-object__text {
              grid-column: 1 / 2;
              grid-row: 2 / 3;
            }

            .media-object__text h2 {
              margin-bottom: var(--space-m);
              font-size: 1.5rem;
            }
          }

          @media (max-width: 768px) {
            .media-object {
              grid-template-columns: 1fr;
              margin-bottom: calc(var(--space-l) * 1);
            }

            .media-object--reverse .media-object__img {
              grid-column: 1 / 2;
              grid-row: 1 / 2;
            }

            .media-object--reverse .media-object__text {
              grid-column: 1 / 2;
              grid-row: 2 / 3;
            }

            .media-object__text h2 {
              margin-bottom: var(--space-m);
              font-size: 1.5rem;
            }
          }
    `;
  };

  heading(title, level) {
    if (!level) {
      return `
        <h2>${title}</h2>
      `;
    }

    return `
      <h${level}>${title}</h${level}>
    `
  }

  template() {
    return html`
      <div class="media-object media-object--reverse">
        <figure class="media-object__img">
          <img src="${this.props('data-image')}" alt="">
        </figure>
        <div class="media-object__text">
          ${this.heading(`${this.props('data-title')}`, `${this.props('data-title-level')}`)}
          <span>${this.props('data-subtitle')}</span>
          <p>
            ${this.props('data-body')}
          </p>
          <a href="${this.props('data-cta-link')}" class="btn btn--primary">
            ${this.props('data-cta-text')}
          </a>
        </div>
      </div>
    `;
  };
};

customElements.define('media-object-reverse', MediaObjectReverse);
