
const dark = document.querySelectorAll('.contact-brc, .product-detail')
export default function nav() {
  class Nav {
    constructor() {
      this.htmlNode = document.querySelector(`html`)
      this.body = document.querySelector(`body`)
      this.root = document.querySelector(`.root`)
      this.header = document.querySelector(`.header`)
      this.navNode = document.querySelector(`.header__nav`)
      this.burgerNode = document.querySelector('.header__burger')
      this.closeNode = document.querySelector('.header__close')
      this.init()
    }
    init() {
      if (this.navNode && this.burgerNode) {
        this.openHendler()
        this.closeHendler()
        this.scrollHendler()
      }
      if (dark.length) {
        this.header.classList.remove('light')
        this.header.classList.add('dark')
      }
    }
    open() {
      this.navNode ? this.navNode.classList.add('active') : null;
      this.burgerNode ? this.burgerNode.classList.add('active') : null;
      this.body ? this.body.classList.add('o-hidden') : null;
    }
    close() {
      this.navNode ? this.navNode.classList.remove('active') : null;
      this.burgerNode ? this.burgerNode.classList.remove('active') : null;
      this.body ? this.body.classList.remove('o-hidden') : null;
    }
    openHendler() {
      this.burgerNode.addEventListener('click', (e) => {
        e.preventDefault()
        this.open()
      })
    }
    closeHendler() {
      this.closeNode.addEventListener('click', (e) => {
        e.preventDefault()
        this.close()
      })
    }
    scrollHendler() {
      let lastScroll = 0;
      window.addEventListener('scroll', () => {

        if (lastScroll < this.htmlNode.scrollTop) { // down
          this.header ? this.header.classList.add('scroll') : null;
          this.header ? this.header.classList.remove('down') : null;
          this.burgerNode ? this.burgerNode.classList.add('active') : null;
          this.navNode ? this.navNode.classList.remove('open') : null;
        } else if (this.htmlNode.scrollTop === 0) {
          this.header ? this.header.classList.remove('down') : null;
          this.burgerNode ? this.burgerNode.classList.add('active') : null;
        } else { // up
          this.header ? this.header.classList.add('down') : null;
          this.burgerNode ? this.burgerNode.classList.remove('active') : null;
        }
        if (this.htmlNode.scrollTop < this.header.clientHeight - (this.header.clientHeight * 60 / 100)) {
          this.header ? this.header.classList.remove('scroll') : null;
          this.burgerNode ? this.burgerNode.classList.remove('active') : null;
        }
        lastScroll = this.htmlNode.scrollTop

      })
    }
  }

  const nav = new Nav();
  window.nav = nav
}