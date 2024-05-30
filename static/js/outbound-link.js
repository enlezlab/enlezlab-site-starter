(() => {
  const isInBound = (url) => {
    if (url.includes(window.location.hostname)) {
      return true;
    } else {
      return false;
    }
  };

  const urlList = document.querySelectorAll('a');

  urlList.forEach((i) => {
    if (isInBound(i.href) === false) {
      i.setAttribute('target', '_blank');
    }
  });
})();
