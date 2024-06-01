// src/utils/scoped-style.js
var isHead = (s) => {
  if (s.includes("{")) {
    return true;
  }
  return false;
};
var hasPrefix = (s, pfx) => {
  if (s.includes(pfx)) {
    return true;
  }
  return false;
};
var isMediaQuery = (s) => {
  if (s.includes("@")) {
    return true;
  }
  return false;
};
var scopedStyle = (s, pfx) => {
  const lines = s.split("\n");
  const segment = lines.map((line) => {
    let r = [];
    if (isHead(line) && !hasPrefix(line, pfx) && !isMediaQuery(s)) {
      line = pfx + " " + line.trim();
      r.push(line);
    } else {
      r.push(line);
    }
    return r;
  });
  const res = segment.join("");
  return res;
};
var scoped_style_default = scopedStyle;

// src/core/piq.js
var piq = class extends HTMLElement {
  constructor() {
    const s = super();
    this.setStyle = () => {
      const id = `style_${s.name()}`;
      ;
      const css = s.style();
      const styleNode = document.getElementById(id);
      if (styleNode) {
        return;
      }
      const style = document.createElement("style");
      style.id = id;
      style.innerHTML = scoped_style_default(css, s.name());
      document.head.appendChild(style);
    };
    this.render = async () => {
      this.innerHTML = await s.template();
      if (s.connected !== void 0) {
        await s.connected();
      }
    };
  }
  props(s) {
    return this.getAttribute(s);
  }
  static get observedAttributes() {
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
  }
};
var piq_default = piq;
export {
  piq_default as default
};
