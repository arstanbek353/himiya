export default function () {
  const sectionNodes = document.querySelectorAll('.product-detail')
  sectionNodes.forEach(element => {
    const thumbNode = element.querySelector('.product-detail__bot-slider')
    var thumbswiper = new Swiper(thumbNode, {
      slidesPerView: 'auto',
      loopedSlides: 4,
    });
    const sliderNode = element.querySelector('.product-detail__top-slider')
    var swiper = new Swiper(sliderNode, {
      slidesPerView: 'auto',
      loopedSlides: 4,
      thumbs: {
        swiper: thumbswiper,
      }
    });
  })
}