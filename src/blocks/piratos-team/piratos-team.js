import Slider from "../../js/common/slider";

new class PiratosTeam {
  constructor() {
    const hostRef = document.getElementById("piratos-team");
    if (!hostRef) return;

    const swiperContainerElem = hostRef.querySelector('#js-swiper-container');
    const btnPrev = hostRef.querySelector('#js-btn-prev');
    const btnNext = hostRef.querySelector('#js-btn-next');

    new Slider(
      swiperContainerElem,
      { mx: 3, fl: 2, md: 1 },
      1,
      btnPrev,
      btnNext,
      null,
      36
    );
  }
}
