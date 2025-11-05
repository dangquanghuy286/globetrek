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
// =============== Hero Swiper ===========================
// document.addEventListener("DOMContentLoaded", () => {
//   const heroSwiperEl = document.querySelector(".mySwiper");
//   const indicatorEl = document.querySelector(".slide-number");

//   if (heroSwiperEl) {
//     const preview = parseInt(heroSwiperEl.dataset.preview) || 1;
//     const autoplay = heroSwiperEl.dataset.autoplay === "true";
//     const loop = heroSwiperEl.dataset.loop === "true";
//     const speed = parseInt(heroSwiperEl.dataset.speed) || 1000;

//     const swiper = new Swiper(".mySwiper", {
//       slidesPerView: preview,
//       spaceBetween: 0,
//       loop: loop,
//       speed: speed,
//       autoplay: autoplay
//         ? {
//             delay: 3000,
//             disableOnInteraction: false,
//           }
//         : false,
//       navigation: {
//         nextEl: ".flex-next",
//         prevEl: ".flex-prev",
//       },
//       effect: "fade",
//       fadeEffect: { crossFade: true },

//       on: {
//         init: function () {
//           updateSlideIndicator(this);
//         },
//         slideChange: function () {
//           updateSlideIndicator(this);
//         },
//       },
//     });

//     function updateSlideIndicator(swiperInstance) {
//       if (!indicatorEl) return;
//       const current = swiperInstance.realIndex + 1;
//       indicatorEl.textContent = `${current} / 3`;
//     }
//   }
// });
