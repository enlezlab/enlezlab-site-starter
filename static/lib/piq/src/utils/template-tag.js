const html = (s, ...v) => {
    return s.reduce((acc, str, i) => acc + str + (v[i] || ''), '');
};

const css = (s, ...v) => {
    return s.reduce((acc, str, i) => acc + str + (v[i] || ''), '');
};

export {
    html,
    css
}

