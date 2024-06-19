import piq from '/lib/piq/dist/piq/core/piq.js';
import {html, css} from '/lib/piq/dist/piq/utils/template-tag.js';

class ContentSlider extends piq {
  name() {
    return 'content-slider';
  };

  data() {
    const src = this.props('data-json');
    return JSON.parse(src);
  };

  itemCount() {
    const count = this.data().length;
    return count.toString();
  };

  style() {
    return css`
      content-slider {
        display: grid;
        grid-template-columns: 40px 1fr 40px;
        grid-template-rows: 1fr;
        grid-gap: 2rem;
      }

      .content-slider__track {
        grid-column: 2 / 3;
        grid-row: 1 / 2;
      }

      .content-slider__btn-left {
        grid-column: 1 / 2;
        grid-row: 1 / 2;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .content-slider__btn-right {
        grid-column: 3 / 4;
        grid-row: 1 / 2;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      content-slider ul {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      content-slider li {
        list-style: none;
        box-sizing: border-box;
      }

      .content-slider__container {
        display: block;
        width: 100%;
        overflow: hidden;
      }

      .content-slider__track {
        display: grid;
        grid-template-columns: repeat(${this.itemCount()}, 1fr);
        width: ${this.itemCount() * 100}%;
        height: 100%;
        transition: .3s ease;
      }

      .content-slider__slide {
        width: 100%;
        padding: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .content-slider__slide-inner {

      }

      .content-slider__btn {
        border-radius: 50%;
        background: var(--color-03);
        display: inline-block;
        cursor: pointer;
        box-sizing: border-box;
        display: grid;
        align-items: center;
        justify-content: center;
        padding: 5px;
      }

      .content-slider__btn svg {
        stroke: #fff;
      }
    `;
  };

  iconLeft() {
    return html`
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
    `;
  };

  iconRight() {
    return html`
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
    `;
  };

  slideInfo() {
    const data = this.data();
    const info = [];
    data.forEach((i, idx) => {
      const base = idx + 1;
      const segmentWidth = 100 / data.length;
      const pos = (segmentWidth * base) - segmentWidth;
      const item = {
        index: idx,
        position: `${pos}%`,
      }

      info.push(item);
    });

    return info;
  };

  setPos(n) {
    this.setAttribute('data-current-pos', n);
  };

  curPos() {
    const curPos = parseInt(this.props('data-current-pos'));
    return curPos;
  };

  goTo(n) {
    const track = this.querySelectorAll('.content-slider__track')[0];
    const pos = this.slideInfo()[n].position;
    track.setAttribute('style', `transform: translateX(-${pos})`);
    this.setPos(n);
  };

  goToNext() {
    const curPos = this.curPos();
    if (curPos === this.itemCount() - 1) {
      return;
    }
    this.goTo(curPos + 1);
  };

  goToPrev() {
    const curPos = this.curPos();
    if (curPos === 0) {
      return;
    }
    this.goTo(curPos - 1);
  };

  setBtnAction() {
    const btnPrev = this.querySelectorAll('.content-slider__btn-prev')[0];
    const btnNext = this.querySelectorAll('.content-slider__btn-next')[0];
    const _this = this;

    btnPrev.addEventListener('click', function() {
      _this.goToPrev();
    }, false);

    btnNext.addEventListener('click', function() {
      _this.goToNext();
    }, false);

  };

  slides() {
    const data = this.data();
    let slides = '';
    data.forEach((i) => {
      const slide = html`
        <li class="content-slider__slide">
          <div class="content-slider__slide-inner">
          ${i.body}
          </div>
        </li>
      `;

      slides += slide;
    });
    return html`
      ${slides}
    `;
  };

  template() {
    return html`
      <div class="content-slider__container">
        <ul class="content-slider__track">
          ${this.slides()}
        </ul>
      </div>
      <div class="content-slider__btn-left">
        <div class="content-slider__btn content-slider__btn-prev">${this.iconLeft()}</div>
      </div>
      <div class="content-slider__btn-right">
        <div class="content-slider__btn content-slider__btn-next">${this.iconRight()}</div>
      </div>
    `;
  };

  connected() {
    this.setPos(0);
    this.setBtnAction();
  };
};

customElements.define('content-slider', ContentSlider);
