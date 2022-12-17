import Slider from "../../js/common/slider";

new class Marketplace {
  constructor() {
    const hostRef = document.getElementById("marketplace");
    if (!hostRef) return;

    const swiperContainerElem = hostRef.querySelector('#js-swiper-container');
    const btnPrev = hostRef.querySelector('#js-btn-prev');
    const btnNext = hostRef.querySelector('#js-btn-next');

    new Slider(
      swiperContainerElem,
      { mx: 5, fl: 4, md: 3 },
      1,
      btnPrev,
      btnNext,
      null,
      1
    );

    const tabRefs = hostRef.querySelectorAll('[data-tab]');
    const infoRefs = Array.from(hostRef.querySelectorAll('[data-name]'));

    tabRefs.forEach(tabRef => {
      tabRef.onclick = () => {
        infoRefs.forEach(item => {
          if (item.getAttribute('data-name') === tabRef.getAttribute('data-tab')) {
            item.classList.add("active");
          } else {
            item.classList.remove("active");
          }
        })
      }
    })
  }
}
