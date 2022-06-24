export default {
  refs: {
    get headerEl() { return document.querySelector('.header'); },
  },

  init() {
    window.onscroll = () => this.onScroll();
  },

  onScroll() {
    const { headerEl } = this.refs;

    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) headerEl.classList.add('header--scroll');
    else headerEl.classList.remove('header--scroll');
  },
};