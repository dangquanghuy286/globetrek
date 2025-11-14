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
document.addEventListener("DOMContentLoaded", () => {
  const heroSwiperEl = document.querySelector(".mySwiper");
  const indicatorEl = document.querySelector(".slide-number");

  if (heroSwiperEl) {
    const preview = parseInt(heroSwiperEl.dataset.preview) || 1;
    const autoplay = heroSwiperEl.dataset.autoplay === "true";
    const loop = heroSwiperEl.dataset.loop === "true";
    const speed = parseInt(heroSwiperEl.dataset.speed) || 1000;

    const swiper = new Swiper(".mySwiper", {
      slidesPerView: preview,
      spaceBetween: 0,
      loop: loop,
      speed: speed,
      autoplay: autoplay
        ? {
            delay: 3000,
            disableOnInteraction: false,
          }
        : false,
      navigation: {
        nextEl: ".flex-next",
        prevEl: ".flex-prev",
      },
      simulateTouch: false,
      allowTouchMove: false,
      effect: "fade",
      fadeEffect: { crossFade: true },

      on: {
        init: function () {
          updateSlideIndicator(this);
        },
        slideChange: function () {
          updateSlideIndicator(this);
        },
      },
    });

    heroSwiperEl.addEventListener("mouseenter", () => {
      swiper.autoplay?.stop();
    });

    heroSwiperEl.addEventListener("mouseleave", () => {
      swiper.autoplay?.start();
    });
    function updateSlideIndicator(swiperInstance) {
      if (!indicatorEl) return;
      const current = swiperInstance.realIndex + 1;
      indicatorEl.textContent = `${current} / 3`;
    }
  }
});
// =============== Testinial=============================
document.addEventListener("DOMContentLoaded", function () {
  const testimonialEl = document.querySelector(".tf-sw-testimonial");

  if (testimonialEl) {
    const swTestimonial = new Swiper(".tf-sw-testimonial", {
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 1000,
      navigation: {
        clickable: true,
        nextEl: ".flex-next",
        prevEl: ".flex-prev",
      },
      pagination: {
        el: ".sw-pagination-tes",
        clickable: true,
      },
      loop: true,
      breakpoints: {
        575: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        1440: {
          slidesPerView: 1,
          spaceBetween: 0,
          centeredSlides: false,
        },
      },
    });
  }
});
// =================Mobile===========================
document.addEventListener("DOMContentLoaded", function () {
  const tfSwMobile = document.querySelector(".tf-sw-mobile");

  if (tfSwMobile) {
    let swiperMb;
    const screenWidth = tfSwMobile.dataset.screen;

    function initSwiperMb() {
      if (
        window.matchMedia(`only screen and (max-width: ${screenWidth}px)`)
          .matches
      ) {
        if (!swiperMb) {
          const preview = parseInt(tfSwMobile.dataset.preview, 10) || 1;
          const spacing = parseInt(tfSwMobile.dataset.space, 10) || 0;

          swiperMb = new Swiper(".tf-sw-mobile", {
            slidesPerView: preview,
            spaceBetween: spacing,
            speed: 1000,
            pagination: {
              el: ".sw-pagination-topchose",
              clickable: true,
            },
            navigation: {
              nextEl: ".nav-prev",
              prevEl: ".nav-next",
              clickable: true,
            },
          });
        }
      } else {
        if (swiperMb) {
          swiperMb.destroy(true, true);
          swiperMb = null;

          const wrapper = tfSwMobile.querySelector(".swiper-wrapper");
          const slides = tfSwMobile.querySelectorAll(".swiper-slide");

          if (wrapper) wrapper.removeAttribute("style");
          slides.forEach((slide) => slide.removeAttribute("style"));
        }
      }
    }

    initSwiperMb();
    window.addEventListener("resize", initSwiperMb);
  }
});
// ===================Find Wish========================
document.addEventListener("DOMContentLoaded", () => {
  const tfSwLatest = document.querySelector(".tf-perfect-tour");
  if (tfSwLatest) {
    const preview = tfSwLatest.dataset.preview;
    const tablet = tfSwLatest.dataset.tablet;
    const mobile = tfSwLatest.dataset.mobile;
    const mobileSm = tfSwLatest.dataset.mobileSm;
    const spacingLg = tfSwLatest.dataset.spaceLg;
    const spacingMd = tfSwLatest.dataset.spaceMd;
    const spacing = tfSwLatest.dataset.space;

    const swiper = new Swiper(".tf-perfect-tour", {
      slidesPerView: parseInt(mobile),
      spaceBetween: parseInt(spacing),
      pagination: {
        el: ".sw-pagination-wish",
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
// ==================Type==============================
document.addEventListener("DOMContentLoaded", () => {
  const swiperEl = document.querySelector(".tf-sw-types");

  if (swiperEl) {
    const preview = swiperEl.dataset.preview;
    const desktopSm = swiperEl.dataset.desktopSm;
    const tablet = swiperEl.dataset.tablet;
    const mobile = swiperEl.dataset.mobile;
    const mobileSm = swiperEl.dataset.mobileSm;

    const spacing = swiperEl.dataset.space;
    const spacingMd = swiperEl.dataset.spaceMd;
    const spacingXl = swiperEl.dataset.spaceXl;
    const spacingLg = swiperEl.dataset.spaceLg;

    new Swiper(".tf-sw-types", {
      slidesPerView: parseInt(mobile),
      spaceBetween: parseInt(spacing),
      speed: 1000,
      navigation: {
        clickable: true,
        nextEl: ".nav-prev",
        prevEl: ".nav-next",
      },
      pagination: {
        el: ".sw-pagination-types",
        clickable: true,
      },
      breakpoints: {
        575: {
          slidesPerView: parseInt(mobileSm),
          spaceBetween: parseInt(spacingMd),
        },
        768: {
          slidesPerView: parseInt(tablet),
          spaceBetween: parseInt(spacingMd),
        },
        1024: {
          slidesPerView: parseInt(desktopSm),
          spaceBetween: parseInt(spacingXl),
        },
        1200: {
          slidesPerView: parseInt(preview),
          spaceBetween: parseInt(spacingLg),
        },
      },
    });
  }
});
