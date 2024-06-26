import piq from '/lib/piq/dist/piq/core/piq.js';
import {html, css} from '/lib/piq/dist/piq/utils/template-tag.js';

class PageInteract extends piq {
  name() {
    return 'page-interact';
  };

  style() {
    return css`
      page-interact {
        --color-bg: #000;
        --color-fg: #fff;
        @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
        font-family: "Roboto", sans-serif;
      }

      ::-webkit-scrollbar {
        width: 10px;
      }

      ::-webkit-scrollbar-thumb {
        background: #666666;
        border-radius: 6px;
      }

      ::-webkit-scrollbar-track {
        background-color: #222222;
        border-left: 1px solid #333333;
      }

      .page-interact {
        box-sizing: border-box;
        background: var(--color-bg);
        color: var(--color-fg);
        padding: var(--space-m);
        position: fixed;
        top: 0;
        left: calc(-600px - var(--space-m));
        width: 600px;
        height: 100%;
        transition: .3s ease;
        overflow-y: scroll;
      }

      .page-interact--opened {
        left: 0;
      }

      .page-interact__toggle {
        width: 40px;
        height: 40px;
        display: block;
        background: var(--color-bg);
        position: fixed;
        left: var(--space-m);
        bottom: var(--space-m);
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid var(--color-fg);
        box-shadow: 0px 0px 10px rgba(0, 0, 0, .5);
        cursor: pointer;
        z-index: 9999;
      }
      .page-interact__controls {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: var(--space-s);
      }

      .page-interact__control-item {
        display: grid;
        grid-template-columns: 1fr;
        border: 1px solid #333;
        border-radius: 5px;
        overflow: hidden;
      }

      .page-interact__control-item header {
        background: #333;
        padding: calc(var(--space-s) / 2) var(--space-s);
        font-size: 16px;
      }

      .page-interact__control-item label {
        background: #222;
        color: #999;
        padding: calc(var(--space-s) / 2) var(--space-s);
        font-size: 16px;
      }

      .page-interact select {
        padding: var(--space-s);
        width: 100%;
        background: transparent;
        color: var(--color-fg);
        font-size: 16px;
        border: none;
      }

      .page-interact select option {
        background: var(--color-bg);
      }

      .page-interact input[type="text"],
      .page-interact select,
      .page-interact textarea {
        box-sizing: border-box;
        border: none;
        padding: var(--space-s);
        width: 100%;
        background: #111;
        color: #999;
        font-size: 16px;
      }

      .page-interact input[type="text"]:focus,
      .page-interact select:focus,
      .page-interact textarea:focus {
        outline: none;
        background: var(--color-bg);
        color: var(--color-fg);
      }
    `;
  };

  shrinkBody() {
    const head = document.head;
    const style = document.createElement('style');
    style.innerHTML = css`
      body {
        transition: .3s ease;
      }

      .body-shrink {
        padding-left: 600px
      }
    `;

    head.appendChild(style);
  };

  iconSetting() {
    return html`
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
    `;
  };

  rootColorVar(id) {

    switch (id) {
      case "00":
        return css`
          :root {
            --color-00: #000000;
            --color-01: #ffffff;
            --color-02: #d9abf4;
            --color-03: #301640;
            --color-04: #e0c8ee;
          }
        `;

      case "01":
        return css`
          :root {
            --color-00: #000000;
            --color-01: #ffffff;
            --color-02: #229a95 ;
            --color-03: #062c2a;
            --color-04: #b2e6e4;
          }
        `;
    }
  };

  updateRootVar(rootVar) {
    const head = document.head;
    const styleNode = document.createElement('style');
    styleNode.innerHTML = rootVar;
    head.appendChild(styleNode);
  };

  themeSelect() {
    return html`
      <section class="page-interact__control-item">
        <header>Theme</header>
        <label>Color Themes</label>
        <select class="theme-select" name="">
          <option value="" selected disabled>Choose a Theme</option>
          <option value="00">Theme A</option>
          <option value="01">Theme B</option>
        </select>
      </section>
    `;
  };

  themeSelectAction() {
    const themeSelect = this.querySelectorAll('.theme-select')[0];
    const _this = this;
    themeSelect.addEventListener('change', function () {
      _this.updateRootVar(_this.rootColorVar(this.value));
    }, false);
  };

  toggleAction() {
    const body = document.body;
    const pageInteract = this.querySelectorAll('.page-interact')[0];
    const toggle = this.querySelectorAll('.page-interact__toggle')[0];
    toggle.addEventListener('click', function () {
      pageInteract.classList.toggle('page-interact--opened');
      body.classList.toggle('body-shrink');
    }, false);
  };


  output() {
    const outputItems = this.querySelectorAll('component-control');
    let res = [];

    outputItems.forEach((i) => {
      i.output();
      const item = i.dataset.output;
      const data = JSON.parse(item);
      res.push(data)
    });

    this.setAttribute('data-output', JSON.stringify(res));

    return res;
  };

  updateOutput() {
    const _this = this;
    const dataNode = this.querySelectorAll('.component-control__btn-save');

    dataNode.forEach((i) => {
      i.addEventListener('click', function() {
        const controlNode = document.querySelectorAll(`component-control[data-uid="${i.dataset.controlName}"] .component-control__toggle`)[0];
        controlNode.click();
        _this.output();
        _this.pageUpdate();
      }, false);
    });

  };

  mockData() {
    return [
      {
        section: "hero",
        component: "hero-main",
        type: "hero-main",
        title: "Lead Gen Made Easy",
        body: "Assemble high converting lead gen pages with battle tested components",
      },
      {
        section: "summary",
        component: "media-object",
        type: "media-object",
        title: "Effortless Lead Gen",
        image: "/home/value-prop-01/main.jpg",
        cta_text: "learn more",
        cta_link: "/service",
        body: " Stop wasting time building from scratch. Our library of pre-built, high-performing components lets you assemble stunning lead gen pages in minutes. Simply choose the elements you need, customize the content, and hit publish. Focus on crafting your message, we will handle the design legwork ",
      },
      {
        section: "value prop",
        component: "media-object-reverse",
        type: "media-object",
        title: "Conversion Confidence",
        image: "/home/value-prop-02/main.jpg",
        cta_text: "learn more",
        cta_link: "/service",
        body: "Built with a proven design system, our pre-built components are optimized for maximum conversions. Each element is strategically placed to capture leads and guide visitors towards your desired action. Don't gamble with your lead flow, leverage the power of pre-tested design components.",
      },
      {
        section: "value prop",
        component: "media-object",
        type: "media-object",
        title: "Scalable Growth",
        image: "/home/value-prop-02/main.jpg",
        cta_text: "learn more",
        cta_link: "/service",
        body: "Your lead gen needs evolve, and so should your pages. Our modular system allows you to easily adapt and expand your landing pages as your campaigns grow. Simply add new components or adjust existing ones to fit your evolving marketing strategy. Build a foundation for long-term lead generation success.",
      },
    ]
  };

  controlGen() {
    let res = '';
    const data = this.mockData();
    data.forEach((i, idx) => {
      const prefix = idx.toString();
      const section = (i.section).replace(' ', '_');
      const item = html`
        <component-control
          data-uid="${prefix}_${section}"
          data-section-name="${i.section}"
          data-component="${i.component}"
          data-title="${i.title}"
          data-body="${i.body}"
          data-image="${i.image}"
          data-cta-text="${i.cta_text}"
          data-cta-link="${i.cta_link}"
        >
        </component-control>
      `;

      res += item;
    });
    return res;
  };

  pageGen() {
    const pageNode = document.querySelectorAll('.mock-page')[0];
    let pageNodeContent = '';
    const data = this.mockData();
    data.forEach((i, idx) => {
      const section = (i.section).replace(' ', '_');
      const uid = `${idx.toString()}_${section}`;
      const component = html`
        <${i.component}
          data-uid="${uid}"
          data-title="${i.title}"
          data-title-level="${i.level}"
          data-body="${i.body}"
          data-cta-text="${i.cta_text}"
          data-cta-link="${i.cta_link}"
          data-image="${i.image}"
        >
        </${i.component}>
      `;

      pageNodeContent += component;
    });

    pageNode.innerHTML = pageNodeContent;
  };

  pageUpdate() {
    const pageNode = document.querySelectorAll('.mock-page')[0];
    let pageNodeContent = '';
    const output = this.dataset.output;
    const data = JSON.parse(output);
    data.forEach((i, idx) => {
      const prefix = idx.toString();
      const section = (i.section).replace(' ', '_');
      const uid = `${prefix}_${section}`;
      const component = html`
        <${i.component}
          data-uid="${uid}"
          data-title="${i['title']}"
          data-title-level="${i['level']}"
          data-body="${i['body']}"
          data-cta-text="${i['cta-text']}"
          data-cta-link="${i['cta-link']}"
          data-image="${i['image']}"
        >
        </${i.component}>
      `;

      pageNodeContent += component;
    });

    pageNode.innerHTML = pageNodeContent;
  };

  widgetOpen() {
    /* temp helper to make widget open by default while developing */
    if (window.location.search === '?widget=open') {
      this.querySelectorAll('.page-interact')[0].classList.add('page-interact--opened');
      document.body.classList.add('body-shrink');
    }
  };

  template() {
    return html`
      <div class="page-interact">
        <logo-columod></logo-columod>
        <div class="page-interact__controls">
          ${this.themeSelect()}
          ${this.controlGen()}
        </div>

        <div class="page-interact__toggle">
          ${this.iconSetting()}
        </div>
      </div>
    `;
  };

  connected() {
    this.themeSelectAction();
    this.toggleAction();
    this.shrinkBody();
    this.pageGen();
    this.widgetOpen();

    /* defer output generation after initial execution is done */
    setTimeout(() => {
      this.output();
      this.updateOutput();
    }, 0);
  };

}

customElements.define('page-interact', PageInteract);
