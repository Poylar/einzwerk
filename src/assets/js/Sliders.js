import Swiper from "swiper";
import "swiper/scss";

const reviewSliderContainer = document.querySelector(".js-reviews-slider");
if (reviewSliderContainer) {
  new Swiper(reviewSliderContainer, {
    slidesPerView: 2.2,
    spaceBetween: 40,
  });
}
