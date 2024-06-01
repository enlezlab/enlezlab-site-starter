import scopedStyle from '../utils/scoped-style.js';

/* main entry point */
class piq extends HTMLElement {

  constructor() {
    // Use super to access decendent's context
    const s = super()

    // Set Style
    this.setStyle = () => {
      const id = `style_${s.name()}`;;
      const css = s.style();
      const styleNode = document.getElementById(id);

      if (styleNode) {
        return;
      }

      const style = document.createElement('style');
      style.id = id;
      style.innerHTML = scopedStyle(css, s.name());
      document.head.appendChild(style);
    };

    // Render method for component
    this.render = async () => {

      this.innerHTML = await s.template();

      if (s.connected !== undefined) {
        await s.connected();
      }
    };

  };

  props(s) {
    // return attribute data
    return this.getAttribute(s);
  };

  static get observedAttributes() {

    // Support for not breaking iOS 12 (not support static)
    if (!this.attr) {
      return;
    }

    return this.attr();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (newValue === oldValue) {
      return;
    }
    this.render();
  }

  connectedCallback() {
    this.setStyle();
    this.render();
  };
};


export default piq;
