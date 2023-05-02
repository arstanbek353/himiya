export default function () {
  const sectionNodes = document.querySelectorAll('.main-news')
  sectionNodes.forEach(element => {
    const sliderNode = element.querySelector('.main-news__slider')
    const prevNode = element.querySelector('.main-news__prev')
    const nextNode = element.querySelector('.main-news__next')
    const delay = 3000
    var swiper = new Swiper(sliderNode, {
      slidesPerView: 'auto',
      loopedSlides: 4,
      // autoplay: {
      //   delay: delay,
      // },
      navigation: {
        nextEl: nextNode,
        prevEl: prevNode,
        disabledClass: 'disabled',
      },
    });
  })
}