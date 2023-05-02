export default function () {
  const sectionNodes = document.querySelectorAll('.partners')
  sectionNodes.forEach(element => {
    const sliderNode = element.querySelector('.partners__slider')
    const prevNode = element.querySelector('.partners__prev')
    const nextNode = element.querySelector('.partners__next')
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