
/* *
 * @function
 * @name isHead
 * @param {string} s - String value
 * @returns {boolean}
 * @description If `s` contains "{" , recognize as the head of CSS block
 *
 * */
const isHead = (s) => {
  if (s.includes('{')) {
    return true;
  }

  return false;
};

/* *
 * @function
 * @name hasPrefix
 * @param {string} s - String value
 * @param {string} pfx - A reference to check if `s` contains prefix
 * @returns {boolean}
 * @description Check if `s` contain prefix
 * */

const hasPrefix = (s, pfx) => {
  if (s.includes(pfx)) {
    return true;
  }

  return false;
};

/* *
 * @function
 * @name isMediaQuery
 * @param {string} s - Stirng value
 * @returns {boolean}
 * @description Check if line is media query
 * */

const isMediaQuery = (s) => {
  if (s.includes('@')) {
    return true;
  }

  return false;
};

/* *
 * @function
 * @name scopedStyle
 * @param {string} s - CSS string value
 * @param {string} prefix - Prefix to use to scope CSS
 * @returns {string}
 * @description Add prefix as namespace to multi line CSS string
 *
 * @example
 *
 * const cssStringValue = `
 *   .myclass {
 *     display: block;
 *   }
 * `;
 *
 * cosnt componentName = 'my-component';
 *
 * scopedStyle(cssStringValue, componentName);
 *
 */

const scopedStyle = (s, pfx) => {

  // Split a multiline string to an array
  const lines = s.split('\n');

  // Loop over each line, if is head of the CSS block
  // and does not have prefix already, then prepend prefix
  const segment = lines.map((line) => {
    let r = []

    if (isHead(line) && !hasPrefix(line, pfx) && !isMediaQuery(s)) {
      line = pfx + ' ' + line.trim();
      r.push(line);
    } else {
      r.push(line);
    }

    return r;
  });

  // Join the segment array to final scoped CSS string
  const res = segment.join('');

  return res;
};

export default scopedStyle;
