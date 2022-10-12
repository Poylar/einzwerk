document.addEventListener("click", (e) => {
  if (e.target.closest(".js-start-video")) {
    const preview = e.target.closest(".js-start-video").querySelector(".video__preview-wrapper");
    const video = e.target.closest('.js-start-video').querySelector(".video__src");
    preview.remove();
    video.play();
  }
});
