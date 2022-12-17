import Slider from "../../js/common/slider";

new class GameMechanics {
  constructor() {
    const hostRef = document.getElementById("game-mechanics");
    if (!hostRef) return;

    const swiperContainerElem = hostRef.querySelector('#js-swiper-container');
    const btnPrev = hostRef.querySelector('#js-btn-prev');
    const btnNext = hostRef.querySelector('#js-btn-next');
    const swiperPaginationElem = hostRef.querySelector('#js-pagination-slider');

    new Slider(
      swiperContainerElem,
      { mx: "auto" },
      1,
      btnPrev,
      btnNext,
      swiperPaginationElem,
      10,
    );
  }
}
