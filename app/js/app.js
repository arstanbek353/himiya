
import mainSlider from '~/app/js/main-slider.js'
import partnersSlider from '~/app/js/partners-slider.js'
import newsSlider from '~/app/js/news-slider.js'
import detailSlider from '~/app/js/detail-slider.js'
import modal from '~/app/js/modal.js'
import contact from '~/app/js/contact.js'
import nav from '~/app/js/nav.js'

document.addEventListener('DOMContentLoaded', () => {
  mainSlider()
  partnersSlider()
  newsSlider()
  detailSlider()
  modal()
  contact()
  nav()
  const contactBtn = document.querySelector('.contact__btn')
  const poster = document.querySelector('.contact__poster')
  const map = document.querySelector('.contact__map')
  const body = document.querySelector('body')

  if (contactBtn) {
    contactBtn.addEventListener('click', () => {
      poster.classList.toggle('active')
      map.classList.toggle('active')
    })
  }

  const filterBtn = document.querySelector('.catalog-filter__open')
  const filterClose = document.querySelector('.catalog-filter__close')
  const filterContent = document.querySelector('.catalog-filter__content')

  if (filterBtn) {
    filterBtn.addEventListener('click', () => {
      filterContent.classList.add('active')
      body.classList.add('o-hidden')
    })
    filterClose.addEventListener('click', () => {
      filterContent.classList.remove('active')
      body.classList.remove('o-hidden')
    })
  }
})
