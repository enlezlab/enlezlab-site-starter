
(() => {
  // Sub Nav
  const hasSubNav = document.querySelectorAll('.site-header__nav--has-subnav');

  const reset = () => {
    const allSubNav = document.querySelectorAll('.site-header__subnav');
    const iconChevron = document.querySelectorAll('.site-header__nav-icon');
    allSubNav.forEach((i) => {
      i.classList.remove('site-header__subnav--opened');
    });

    iconChevron.forEach((i) => {
      i.classList.remove('site-header__nav-icon--active');
    });
  }

  hasSubNav.forEach((i) => {
    i.addEventListener('click', function () {
      event.stopImmediatePropagation();
      const subNav = i.parentElement.querySelectorAll('.site-header__subnav')[0];
      const iconChevron = document.querySelectorAll('.site-header__nav-icon')[0]
      subNav.classList.toggle('site-header__subnav--opened');
      iconChevron.classList.toggle('site-header__nav-icon--active');

    }, false);
  });

  (document.body).addEventListener('click', reset, false);

})();

(() => {
  // Mobile Nav
  const btnMobile = document.getElementById('btn_mobile');
  const siteHeaderNav = document.querySelectorAll('.site-header__nav')[0];
  btnMobile.addEventListener('click', function () {
    console.log(this);
    (document.body).classList.toggle('body-lock');
    this.classList.toggle('is-active')
    siteHeaderNav.classList.toggle('site-header__nav--opened');
  }, false);
})();



