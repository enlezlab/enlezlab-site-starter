// src/utils/template-tag.js
var html = (s, ...v) => {
  return s.reduce((acc, str, i) => acc + str + (v[i] || ""), "");
};
var css = (s, ...v) => {
  return s.reduce((acc, str, i) => acc + str + (v[i] || ""), "");
};
export {
  css,
  html
};
