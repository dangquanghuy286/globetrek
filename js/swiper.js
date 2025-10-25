// ===============Latest ===========================
document.addEventListener("DOMContentLoaded", () => {
  const tfSwLatest = document.querySelector(".tf-swiper-latest");
  if (tfSwLatest) {
    const preview = tfSwLatest.dataset.preview;
    const tablet = tfSwLatest.dataset.tablet;
    const mobile = tfSwLatest.dataset.mobile;
    const mobileSm = tfSwLatest.dataset.mobileSm;
    const spacingLg = tfSwLatest.dataset.spaceLg;
    const spacingMd = tfSwLatest.dataset.spaceMd;
    const spacing = tfSwLatest.dataset.space;

    const swiper = new Swiper(".tf-swiper-latest", {
      slidesPerView: parseInt(mobile),
      spaceBetween: parseInt(spacing),
      pagination: {
        el: ".sw-pagination-latest",
        clickable: true,
      },
      navigation: {
        clickable: true,
        nextEl: ".nav-prev-latest",
        prevEl: ".nav-next-latest",
      },
      breakpoints: {
        575: {
          slidesPerView: parseInt(mobileSm),
          spaceBetween: parseInt(spacing),
        },
        768: {
          slidesPerView: parseInt(tablet),
          spaceBetween: parseInt(spacingMd),
        },
        1200: {
          slidesPerView: parseInt(preview),
          spaceBetween: parseInt(spacingLg),
        },
      },
    });
  }
});
