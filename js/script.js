// =============Back To Top=================
document.addEventListener("DOMContentLoaded", () => {
  const gotop = document.getElementById("backtotop");
  const border = document.querySelector(".border-progress");

  window.addEventListener("scroll", () => {
    // Scrolled
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    //total px
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    //percent page scrolled
    const scrollPercent = (scrollTop / docHeight) * 100;
    // convert percent to deg
    const borderAngle = (scrollPercent / 100) * 360;

    border.style.setProperty("--progress-angle", `${borderAngle}deg`);

    if (scrollTop > 100) {
      gotop.classList.add("show");
    } else {
      gotop.classList.remove("show");
    }
  });
  // Cuộn lên đầu trang
  gotop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

// =============BreadCrumb==================
document.addEventListener("DOMContentLoaded", () => {
  const breadcrumbContainers = document.querySelectorAll(".breadcrumb-dynamic");
  if (!breadcrumbContainers.length) return;

  // get path
  const path = window.location.pathname;
  const parts = path.split("/").filter(Boolean);

  const capitalizeWords = (str) => {
    return str
      .split(" ")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
  };

  let breadcrumbHTML = `
    <a class="breadcrumb-item" href="index.html">Home</a>
  `;

  parts.forEach((part, index) => {
    const isLast = index === parts.length - 1;
    const name = capitalizeWords(part.replace(".html", "").replace(/-/g, " "));

    if (!isLast) {
      breadcrumbHTML += `
        <div class="breadcrumb-item dot"><span class="icon-CaretRight"></span></div>
        <a class="breadcrumb-item" href="${part}">${name}</a>
      `;
    } else {
      breadcrumbHTML += `
        <div class="breadcrumb-item dot"><span class="icon-CaretRight"></span></div>
        <div class="breadcrumb-item current">${name}</div>
      `;
    }
  });

  breadcrumbContainers.forEach((el) => {
    el.innerHTML = breadcrumbHTML;
  });
});

// =============Scroll======================
window.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
// ==================== Toggle MENU ===================
const toggleBtn = document.querySelector(".toggle-mobile");
const menu = document.querySelector(".mobile-menu");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close-btn");

toggleBtn.addEventListener("click", () => {
  menu.classList.add("active");
  overlay.classList.add("active");
  closeBtn.classList.add("active");
});

// ischecked overplay
[overlay, closeBtn].forEach((el) => {
  el.addEventListener("click", () => {
    menu.classList.remove("active");
    overlay.classList.remove("active");
    closeBtn.classList.remove("active");
  });
});
// =====================SUBMENU=================================
document.querySelectorAll(".mobile-dropdown").forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    const parent = e.currentTarget.parentElement;
    const subMenu = parent.querySelector(".mb-sub-menu");

    if (subMenu) {
      // Đóng tất cả nav-item
      document.querySelectorAll(".nav-item.active").forEach((otherItem) => {
        if (otherItem !== parent) {
          otherItem.classList.remove("active");
        }
      });

      // Toggle
      parent.classList.toggle("active");
    }
  });
});

// ===================-SUBMENU==============================
document.querySelectorAll(".sub-link.has-sub").forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    const parent = e.currentTarget.closest(".sub-item");
    const subSubMenu = parent.querySelector(".mb-sub-sub-menu");

    if (subSubMenu) {
      parent
        .closest(".mb-sub-menu")
        .querySelectorAll(".sub-item.open")
        .forEach((otherItem) => {
          if (otherItem !== parent) {
            otherItem.classList.remove("open");
            const nested = otherItem.querySelector(".mb-sub-sub-menu");
            if (nested) nested.style.display = "none";
          }
        });

      // Toggle submenu con
      const isOpen = parent.classList.toggle("open");
      subSubMenu.style.display = isOpen ? "flex" : "none";
    }
  });
});

// ===================Active-menu==============================
document.addEventListener("DOMContentLoaded", () => {
  const list = document.querySelectorAll(".toolbar-item");

  function activeLink(e) {
    list.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");
  }

  list.forEach((item) => item.addEventListener("click", activeLink));

  // ===================Active-Wishlist==============================
  const wishlistBtns = document.querySelectorAll(".btn-wished");

  wishlistBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      this.classList.toggle("active");

      // Filter wishlist sau khi toggle
      setTimeout(() => {
        filterWishlist();
      }, 300);
    });
  });

  // ===================Filter-Wishlist==============================
  function filterWishlist() {
    const wishlistContainer = document.querySelector(".tf-wishlist");
    const emptyWishlist = document.querySelector("#empty-wishlist");

    if (!wishlistContainer) return;

    const items = wishlistContainer.querySelectorAll(".item");
    let hasActive = false;

    items.forEach((item) => {
      const btnWish = item.querySelector(".btn-wished.active");

      if (!btnWish) {
        item.remove();
      } else {
        hasActive = true;
      }
    });

    // Hiển  empty state
    if (!hasActive) {
      wishlistContainer.style.display = "none";
      if (emptyWishlist) {
        emptyWishlist.style.display = "block";
      }
    } else {
      wishlistContainer.style.display = "";
      if (emptyWishlist) {
        emptyWishlist.style.display = "none";
      }
    }
  }
  filterWishlist();
});

// =====================Like ,Unlike===========================
document.addEventListener("DOMContentLoaded", () => {
  const actions = document.querySelectorAll(".action");

  actions.forEach((action) => {
    const likeBtn = action.querySelector(".like-btn");
    const unlikeBtn = action.querySelector(".unlike-btn");

    // is checked variable value
    if (likeBtn && unlikeBtn) {
      likeBtn.addEventListener("click", () => {
        likeBtn.classList.toggle("active");
        if (likeBtn.classList.contains("active")) {
          unlikeBtn.classList.remove("active");
        }
      });

      unlikeBtn.addEventListener("click", () => {
        unlikeBtn.classList.toggle("active");
        if (unlikeBtn.classList.contains("active")) {
          likeBtn.classList.remove("active");
        }
      });
    }
  });
});
// ====================Active Nav menu=========================
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(
    ".menu-nav .nav-link, .sub-menu a, .mega-menu a"
  );

  //  Remove active
  navLinks.forEach((i) => i.classList.remove("active"));
  document
    .querySelectorAll(".menu-item")
    .forEach((item) => item.classList.remove("active"));

  // Get current pạt
  const currentPath = window.location.pathname.split("/").pop() || "index.html";

  // Active for ref
  navLinks.forEach((link) => {
    const href = (link.getAttribute("href") || "").split("/").pop();
    if (href === currentPath) {
      link.classList.add("active");
      const parentMenu = link.closest(".menu-item");
      if (parentMenu) parentMenu.classList.add("active");
    }
  });
});

// ===================Active Sub Menu=========================
document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll(".group-select .select-items");

  dropdowns.forEach((dropdown) => {
    const current = dropdown.querySelector(".current");
    const list = dropdown.querySelector(".list");
    const dropdownMenu = dropdown.querySelector(".dropdown-menu");

    current?.addEventListener("click", (e) => {
      e.stopPropagation();

      dropdowns.forEach((other) => {
        if (other !== dropdown) {
          other.querySelector(".list")?.classList.remove("active");
          other.querySelector(".dropdown-menu")?.classList.remove("active");
          other.querySelector(".current")?.classList.remove("active");
        }
      });

      list?.classList.toggle("active");
      dropdownMenu?.classList.toggle("active");
      current?.classList.toggle("active");
    });

    // =========== Value Selection =============
    const options = dropdown.querySelectorAll(".option");
    options.forEach((option) => {
      option.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();

        const value = option.getAttribute("data-value");
        const text = option.querySelector(".content")?.innerText.trim();

        current.innerHTML = `
        ${text || "Select options"}
        <i class="icon fa-solid fa-chevron-down"></i>
      `;

        current.setAttribute("data-value", value || "");

        list?.classList.remove("active");
        current?.classList.remove("active");
      });
    });

    // ============ TIME PICKER LOGIC ============
    const selectDate = dropdown.querySelector(".select-date");
    if (
      selectDate &&
      list &&
      !dropdown.querySelector(".guest-item") &&
      !dropdown.querySelector(".datepicker-days")
    ) {
      if (list.children.length <= 1) {
        list.innerHTML = "";

        for (let hour = 0; hour < 24; hour++) {
          for (let minute = 0; minute < 60; minute += 30) {
            const timeValue = `${String(hour).padStart(2, "0")}:${String(
              minute
            ).padStart(2, "0")}`;
            const li = document.createElement("li");
            li.className = "time-option";
            li.textContent = timeValue;
            li.setAttribute("data-time", timeValue);
            list.appendChild(li);
          }
        }
      }

      // Add click event to time options
      const timeOptions = list.querySelectorAll("li");
      timeOptions.forEach((option) => {
        option.addEventListener("click", (e) => {
          e.preventDefault();
          e.stopPropagation();

          const timeValue =
            option.getAttribute("data-time") || option.textContent.trim();
          selectDate.value = timeValue;

          // Remove active class from all options
          timeOptions.forEach((opt) => opt.classList.remove("selected"));
          // Add active class to selected option
          option.classList.add("selected");

          list?.classList.remove("active");
          current?.classList.remove("active");
        });
      });
    }

    // Counter Logic
    const guestItems = dropdown.querySelectorAll(".guest-item");

    if (guestItems.length > 0) {
      guestItems.forEach((item) => {
        const minus = item.querySelector(".minus");
        const plus = item.querySelector(".plus");
        const input = item.querySelector("input");

        minus?.addEventListener("click", (e) => {
          e.stopPropagation();
          let value = parseInt(input.value) || 0;
          if (value > 0) {
            input.value = value - 1;
            updateCurrent();
          }
        });

        plus?.addEventListener("click", (e) => {
          e.stopPropagation();
          let value = parseInt(input.value) || 0;
          input.value = value + 1;
          updateCurrent();
        });

        input?.addEventListener("change", () => {
          if (input.value < 0) input.value = 0;
          updateCurrent();
        });
      });

      // Update current logic
      function updateCurrent() {
        const adults =
          parseInt(guestItems[0]?.querySelector("input").value) || 0;
        const children =
          parseInt(guestItems[1]?.querySelector("input").value) || 0;

        let parts = [];
        if (adults > 0) parts.push(`${adults} Adult${adults > 1 ? "s" : ""}`);
        if (children > 0)
          parts.push(`${children} Child${children > 1 ? "ren" : ""}`);

        let text = parts.length > 0 ? parts.join(" - ") : "Select guests";

        // save i
        const icon = current.querySelector("i");
        const img = current.querySelector("img");

        // remove
        current.innerHTML = "";

        // Add img -> text -> icon
        if (img) {
          current.appendChild(img.cloneNode(true));
        }
        current.appendChild(document.createTextNode(" " + text + " "));
        if (icon) {
          current.appendChild(icon.cloneNode(true));
        }
      }

      // Khởi tạo
      updateCurrent();
    }

    // ============ DATEPICKER LOGIC ============
    const dateInput = dropdown.querySelector(".date-input");
    const datepickerDays = dropdown.querySelector(".datepicker-days");
    const datepickerTitle = dropdown.querySelector(".datepicker-title");
    const prevBtn = dropdown.querySelector(".prev-month");
    const nextBtn = dropdown.querySelector(".next-month");

    if (dateInput && datepickerDays) {
      let currentDate = new Date();
      let selectedDate = null;

      // Render calendar
      function renderCalendar(year, month) {
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const prevLastDay = new Date(year, month, 0);

        const firstDayIndex = firstDay.getDay();
        const lastDate = lastDay.getDate();
        const prevLastDate = prevLastDay.getDate();

        // Update title
        const monthNames = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];
        datepickerTitle.textContent = `${monthNames[month]} ${year}`;

        // Clear days
        datepickerDays.innerHTML = "";

        // Previous month days
        for (let i = firstDayIndex; i > 0; i--) {
          const day = document.createElement("button");
          day.type = "button";
          day.className = "datepicker-day other-month";
          day.textContent = prevLastDate - i + 1;
          day.addEventListener("click", (e) => {
            e.stopPropagation();
            selectDate(new Date(year, month - 1, prevLastDate - i + 1));
          });
          datepickerDays.appendChild(day);
        }

        // Current month days
        const today = new Date();
        for (let i = 1; i <= lastDate; i++) {
          const day = document.createElement("button");
          day.type = "button";
          day.className = "datepicker-day";
          day.textContent = i;

          // Check if today
          if (
            i === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear()
          ) {
            day.classList.add("today");
          }

          // Check if selected
          if (
            selectedDate &&
            i === selectedDate.getDate() &&
            month === selectedDate.getMonth() &&
            year === selectedDate.getFullYear()
          ) {
            day.classList.add("selected");
          }

          // Check if weekend
          const dayOfWeek = new Date(year, month, i).getDay();
          if (dayOfWeek === 0 || dayOfWeek === 6) {
            day.classList.add("weekend");
          }

          day.addEventListener("click", (e) => {
            e.stopPropagation();
            selectDate(new Date(year, month, i));
          });

          datepickerDays.appendChild(day);
        }

        // Next month days
        const remainingDays = 42 - datepickerDays.children.length;
        for (let i = 1; i <= remainingDays; i++) {
          const day = document.createElement("button");
          day.type = "button";
          day.className = "datepicker-day other-month";
          day.textContent = i;
          day.addEventListener("click", (e) => {
            e.stopPropagation();
            selectDate(new Date(year, month + 1, i));
          });
          datepickerDays.appendChild(day);
        }
      }

      // Select date
      function selectDate(date) {
        selectedDate = date;
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear();
        dateInput.value = `${day}/${month}/${year}`;

        // Re-render to show selected
        renderCalendar(date.getFullYear(), date.getMonth());

        // Close dropdown
        list?.classList.remove("active");
        current?.classList.remove("active");
      }

      // Navigation
      prevBtn?.addEventListener("click", (e) => {
        e.stopPropagation();
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar(currentDate.getFullYear(), currentDate.getMonth());
      });

      nextBtn?.addEventListener("click", (e) => {
        e.stopPropagation();
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar(currentDate.getFullYear(), currentDate.getMonth());
      });

      // Initialize calendar
      renderCalendar(currentDate.getFullYear(), currentDate.getMonth());
    }
  });

  document.addEventListener("click", () => {
    dropdowns.forEach((dropdown) => {
      dropdown.querySelector(".list")?.classList.remove("active");
      dropdown.querySelector(".dropdown-menu")?.classList.remove("active");
      dropdown.querySelector(".current")?.classList.remove("active");
    });
  });

  // ========== Advanced Form Toggle ==========
  const advancedBtns = document.querySelectorAll(
    ".box-btn-filter .box-filter "
  );

  advancedBtns.forEach((advancedBtn, index) => {
    const formS1 = advancedBtn.closest(".form-s1");
    const advancedForm = formS1 ? formS1.querySelector(".advanced-form") : null;

    if (advancedBtn && advancedForm) {
      advancedBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        advancedForm.classList.toggle("show");

        document.querySelectorAll(".advanced-form").forEach((form) => {
          if (form !== advancedForm) form.classList.remove("show");
        });
      });
    }
  });

  // =============== Box Select ===============
  const boxSelect = document.querySelector(".box-select");
  if (boxSelect) {
    boxSelect.addEventListener("click", (e) => {
      e.stopPropagation();
      boxSelect.classList.toggle("active");
    });
    document.addEventListener("click", () => {
      boxSelect.classList.remove("active");
    });
  }
});

//==========Search=========================
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form-s1 form");
  if (!form) return;
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get location
    const locationDropdown = form.querySelector(
      ".form-group:nth-child(1) .current"
    );
    const locationValue = locationDropdown?.getAttribute("data-value") || "";

    // Get date
    const dateValue = form.querySelector(".date-input")?.value || "";

    // Get tour type
    const tourTypeDropdown = form.querySelector(
      ".form-group:nth-child(3) .current"
    );
    const tourType = tourTypeDropdown?.getAttribute("data-value") || "";

    // Get guests
    const guestInputs = form.querySelectorAll(".guest-item input");
    const guests = {
      adults: guestInputs[0]?.value || "0",
      children: guestInputs[1]?.value || "0",
    };

    // Get price from advanced form
    const minPrice = form.querySelector('input[name="min-value"]')?.value || "";
    const maxPrice = form.querySelector('input[name="max-value"]')?.value || "";

    // Get amenities from checkboxes
    const amenityCheckboxes = form.querySelectorAll(".tf-checkbox:checked");
    const amenities = Array.from(amenityCheckboxes)
      .map((cb) => cb.id)
      .join(",");

    // Create search params
    const queryString = new URLSearchParams({
      location: locationValue,
      date: dateValue,
      type: tourType,
      adults: guests.adults,
      children: guests.children,
      minPrice: minPrice,
      maxPrice: maxPrice,
      amenities: amenities,
    }).toString();

    // Redirect to search results
    window.location.href = `/search.html?${queryString}`;
  });
});

// ============ Price Range Slider =================
document.addEventListener("DOMContentLoaded", function () {
  const rangeSliders = document.querySelectorAll(".slider-range");
  const moneyFormat = wNumb({
    decimals: 0,
    thousand: ",",
    prefix: "$",
  });

  rangeSliders.forEach((slider) => {
    noUiSlider.create(slider, {
      start: [0, 10000],
      step: 1,
      range: {
        min: [0],
        max: [10000],
      },
      format: moneyFormat,
      connect: true,
    });

    // Event click handle to expand size
    const noUiHandles = slider.querySelectorAll(".noUi-handle");
    noUiHandles.forEach(function (handle) {
      handle.addEventListener("click", function () {
        this.style.width = "50px";
      });
    });

    slider.noUiSlider.on("update", function (values, handle) {
      const value1 = slider.parentElement.querySelector("#slider-range-value1");
      const value2 = slider.parentElement.querySelector("#slider-range-value2");
      const minInput = slider.parentElement.querySelector("[name='min-value']");
      const maxInput = slider.parentElement.querySelector("[name='max-value']");
      if (value1) value1.textContent = values[0];
      if (value2) value2.textContent = values[1];
      if (minInput) minInput.value = moneyFormat.from(values[0]);
      if (maxInput) maxInput.value = moneyFormat.from(values[1]);
    });
  });
});
// ============ Active Accordion =================
document.addEventListener("DOMContentLoaded", () => {
  function initAccordion(itemSelector) {
    const items = document.querySelectorAll(itemSelector);

    items.forEach((item) => {
      const collapse = item.querySelector(".collapse");
      if (!collapse) return;

      if (collapse.classList.contains("show")) {
        item.classList.add("active");
      }

      // Mở
      collapse.addEventListener("show.bs.collapse", () => {
        // Đóng các item khác
        items.forEach((other) => {
          if (other !== item) {
            const otherCollapse = other.querySelector(".collapse");
            const instance = bootstrap.Collapse.getInstance(otherCollapse);

            if (instance) {
              instance.hide();
            }
            other.classList.remove("active");
          }
        });

        item.classList.add("active");
      });

      // Đóng
      collapse.addEventListener("hide.bs.collapse", () => {
        item.classList.remove("active");
      });
    });
  }

  // INIT FAQ
  initAccordion(".faq-item");

  // INIT TOUR PLAN
  initAccordion(".property-schedule .tour-plan-item");
});

// ============Fill=========================

document.addEventListener("DOMContentLoaded", function () {
  const peopleWidget = document.querySelector(".widget-people-tour");
  // ===========People count=====================
  if (peopleWidget) {
    const current = peopleWidget.querySelector(".current");
    const guestItems = peopleWidget.querySelectorAll(".guest-item");

    if (guestItems.length > 0) {
      // Counter Logic
      guestItems.forEach((item) => {
        const minus = item.querySelector(".minus");
        const plus = item.querySelector(".plus");
        const input = item.querySelector("input");

        minus?.addEventListener("click", (e) => {
          e.preventDefault();
          e.stopPropagation();
          let value = parseInt(input.value) || 0;
          if (value > 0) {
            input.value = value - 1;
            updateCurrent();
          }
        });

        plus?.addEventListener("click", (e) => {
          e.preventDefault();
          e.stopPropagation();
          let value = parseInt(input.value) || 0;
          input.value = value + 1;
          updateCurrent();
        });

        input?.addEventListener("change", () => {
          if (input.value < 0) input.value = 0;
          updateCurrent();
        });
      });

      function updateCurrent() {
        const adults =
          parseInt(guestItems[0]?.querySelector("input").value) || 0;
        const children =
          parseInt(guestItems[1]?.querySelector("input").value) || 0;

        let parts = [];
        if (adults > 0) parts.push(`${adults} Adult${adults > 1 ? "s" : ""}`);
        if (children > 0)
          parts.push(`${children} Child${children > 1 ? "ren" : ""}`);

        let text = parts.length > 0 ? parts.join(" - ") : "Select guests";

        if (current) {
          current.textContent = text;
        }
      }

      // Khởi tạo giá trị ban đầu
      updateCurrent();
    }
  }
});
// ============Pick Star + Post Form========
document.addEventListener("DOMContentLoaded", () => {
  // ===== HANDLE STAR RATING =====
  document.querySelectorAll(".list-star").forEach((list) => {
    const stars = list.querySelectorAll(".icon-star");
    const input = list.parentElement.querySelector('input[type="hidden"]');

    stars.forEach((star) => {
      const value = star.dataset.value;

      // Hover effect
      star.addEventListener("mouseenter", () => {
        stars.forEach((s) => {
          s.classList.toggle("active", s.dataset.value <= value);
        });
      });

      // Remove hover
      list.addEventListener("mouseleave", () => {
        stars.forEach((s) => {
          s.classList.remove("active");
          s.classList.toggle("selected", s.dataset.value <= input.value);
        });
      });

      // Click select
      star.addEventListener("click", () => {
        input.value = value;

        stars.forEach((s) => {
          s.classList.toggle("selected", s.dataset.value <= value);
        });
      });
    });
  });

  // ===== HANDLE FORM SUBMIT =====
  const form = document.getElementById("commentForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(form);

    // Check rating
    const ratings = [
      "rating_location",
      "rating_rooms",
      "rating_amenities",
      "rating_price",
      "rating_services",
      "rating_food",
    ];

    for (let rate of ratings) {
      if (data.get(rate) === "0") {
        alert("Please rate all categories");
        return;
      }
    }

    // Reset form
    form.reset();
    document
      .querySelectorAll(".icon-star")
      .forEach((star) => star.classList.remove("active", "selected"));
  });
});
// ============Percent Review===============
const reviewData = [
  {
    location: 5,
    rooms: 4,
    amenities: 5,
    price: 4,
    services: 5,
    food: 4,
  },
  {
    location: 4,
    rooms: 4,
    amenities: 4,
    price: 3,
    services: 4,
    food: 3,
  },
  {
    location: 5,
    rooms: 5,
    amenities: 5,
    price: 4,
    services: 5,
    food: 5,
  },
];
document.addEventListener("DOMContentLoaded", () => {
  const wrap = document.querySelector(".wg-review-summary");
  if (!wrap) return;

  const maxScore = Number(wrap.dataset.max || 5);
  const count = reviewData.length;

  // Tính Trung Bình
  const fields = Object.keys(reviewData[0]);

  const avgByField = {};
  fields.forEach((field) => {
    const total = reviewData.reduce((sum, r) => sum + r[field], 0);
    avgByField[field] = total / count;
  });

  const totalAvg =
    Object.values(avgByField).reduce((s, v) => s + v, 0) / fields.length;

  // Tính trung bình và Fix làm tròn sô
  wrap.querySelector(".score-value").textContent = totalAvg.toFixed(1);

  wrap.querySelector(".rating-count").textContent = count;

  renderStars(
    wrap.querySelector(".rating-summary .list-star"),
    Math.floor(totalAvg),
    maxScore
  );

  // Trung bình từng hạn mục
  document.querySelectorAll(".box-breakdown-item").forEach((item) => {
    const label = item.querySelector("label").textContent.toLowerCase();

    const key = mapLabelToKey(label);
    if (!key || !avgByField[key]) return;

    const rate = avgByField[key];

    item.querySelector(".total-rate").textContent = rate.toFixed(1);

    renderStars(item.querySelector(".list-star"), Math.floor(rate), maxScore);

    item.querySelector(".progress-bar").style.width =
      (rate / maxScore) * 100 + "%";
  });
});

// Render star
function renderStars(ul, active, max) {
  ul.innerHTML = "";
  for (let i = 1; i <= max; i++) {
    const li = document.createElement("li");
    li.className = i <= active ? "icon icon-star" : "icon icon-star ic-empty";
    ul.appendChild(li);
  }
}

function mapLabelToKey(label) {
  const map = {
    location: "location",
    rooms: "rooms",
    amenities: "amenities",
    price: "price",
    services: "services",
    food: "food",
  };
  return map[label] || null;
}

// ========Calendar==========
document.addEventListener("DOMContentLoaded", function () {
  let currentDate = new Date();
  let activeDate = null;

  const calendarData = {
    "2025-12-03": { price: 80 },
    "2025-12-04": { price: 99 },
    "2025-12-07": { price: 69 },
    "2025-12-10": { price: 80 },
    "2025-12-12": { price: 99 },
  };

  function getDayData(dateStr) {
    return calendarData[dateStr] || null;
  }

  function formatDate(year, month, day) {
    const m = String(month + 1).padStart(2, "0");
    const d = String(day).padStart(2, "0");
    return `${year}-${m}-${d}`;
  }

  const today = new Date();
  const todayStr = formatDate(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  function renderCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();

    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    document.getElementById("monthYear").textContent = `${
      monthNames[month]
    } ${year.toString().slice(-2)}`;

    const daysGrid = document.getElementById("daysGrid");
    daysGrid.innerHTML = "";

    // Previous month days
    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
      const day = daysInPrevMonth - i;
      const date = new Date(year, month - 1, day);
      const dateStr = formatDate(
        date.getFullYear(),
        date.getMonth(),
        date.getDate()
      );
      const dayCell = document.createElement("div");
      dayCell.className = "day-cell empty disabled";
      dayCell.innerHTML = `
        <div class="day-number">${day}</div>
        <div class="day-name">${dayNames[date.getDay()]}</div>
      `;
      daysGrid.appendChild(dayCell);
    }

    // Current month days
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const dateStr = formatDate(year, month, day);
      const dayData = getDayData(dateStr);

      const dayCell = document.createElement("div");
      dayCell.className = "day-cell";

      // Highlight today
      if (dateStr === todayStr) dayCell.classList.add("today");
      // Highlight active
      if (activeDate === dateStr) dayCell.classList.add("active");

      if (dayData) {
        dayCell.innerHTML = `
          <div class="day-number">${day}</div>
          <div class="day-price">$${dayData.price.toFixed(2)}</div>
        `;
      } else {
        dayCell.innerHTML = `
          <div class="day-number">${day}</div>
          <div class="day-name">${dayNames[date.getDay()]}</div>
        `;
      }

      dayCell.onclick = () => {
        document
          .querySelectorAll(".day-cell.active")
          .forEach((c) => c.classList.remove("active"));
        document
          .querySelectorAll(".day-cell.today")
          .forEach((c) => c.classList.remove("today"));
        activeDate = dateStr;
        dayCell.classList.add("active");
      };

      daysGrid.appendChild(dayCell);
    }

    // Next month days
    const totalCells = firstDayOfMonth + daysInMonth;
    const remainingCells = (7 - (totalCells % 7)) % 7;
    for (let i = 1; i <= remainingCells; i++) {
      const date = new Date(year, month + 1, i);
      const dayCell = document.createElement("div");
      dayCell.className = "day-cell empty disabled";
      dayCell.innerHTML = `
        <div class="day-number">${i}</div>
        <div class="day-name">${dayNames[date.getDay()]}</div>
      `;
      daysGrid.appendChild(dayCell);
    }
  }

  window.prevMonth = function () {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
  };
  window.nextMonth = function () {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
  };

  renderCalendar();
});

// =============== BOOKING FORM CALCULATOR ===============
document.addEventListener("DOMContentLoaded", function () {
  const bookingForm = document.querySelector(".tf-form-book.booking-form form");

  if (!bookingForm) return;

  // Giá cơ bản
  const PRICES = {
    adult: 100,
    children: 50,
    servicePerBooking: 20,
    servicePerPerson: 20,
  };

  // Lấy các elements
  const adultInput = bookingForm.querySelector(
    '.guest-item:nth-child(1) input[type="number"]'
  );
  const childrenInput = bookingForm.querySelector(
    '.guest-item:nth-child(2) input[type="number"]'
  );
  const serviceBookingCheckbox = bookingForm.querySelector("#add_sv_booking");
  const servicePersonCheckbox = bookingForm.querySelector("#add_sv_person");
  const totalValueElement = bookingForm.querySelector(".tf-total-value");
  const totalHiddenInput = bookingForm.querySelector(
    'input[name="total_amount"]'
  );

  // Hiển thị giá trong subtitle
  const valueAdultSpan = bookingForm.querySelector(".value-adult");
  const valueChildrenSpan = bookingForm.querySelector(".value-chidlder");

  // Cập nhật giá hiển thị
  if (valueAdultSpan) valueAdultSpan.textContent = `$${PRICES.adult}`;
  if (valueChildrenSpan) valueChildrenSpan.textContent = `$${PRICES.children}`;

  // Hàm tính tổng
  function calculateTotal() {
    const adultCount = parseInt(adultInput?.value) || 0;
    const childrenCount = parseInt(childrenInput?.value) || 0;
    const totalPeople = adultCount + childrenCount;

    let total = 0;

    // Tính tiền người lớn và trẻ em
    total += adultCount * PRICES.adult;
    total += childrenCount * PRICES.children;

    // Thêm dịch vụ per booking
    if (serviceBookingCheckbox?.checked) {
      total += PRICES.servicePerBooking;
    }

    // Thêm dịch vụ per person
    if (servicePersonCheckbox?.checked) {
      total += totalPeople * PRICES.servicePerPerson;
    }

    return total;
  }

  // Hàm cập nhật hiển thị tổng tiền
  function updateTotal() {
    const total = calculateTotal();

    if (totalValueElement) {
      totalValueElement.textContent = `$${total.toFixed(2)}`;
    }

    if (totalHiddenInput) {
      totalHiddenInput.value = total.toFixed(2);
    }
  }

  // Gắn sự kiện
  adultInput?.addEventListener("change", updateTotal);
  childrenInput?.addEventListener("change", updateTotal);
  serviceBookingCheckbox?.addEventListener("change", updateTotal);
  servicePersonCheckbox?.addEventListener("change", updateTotal);

  // Lắng nghe sự kiện click từ nút +/- (đã có trong code cũ)
  const guestItems = bookingForm.querySelectorAll(".guest-item");
  guestItems.forEach((item) => {
    const minus = item.querySelector(".minus");
    const plus = item.querySelector(".plus");

    minus?.addEventListener("click", () => {
      setTimeout(updateTotal, 10);
    });

    plus?.addEventListener("click", () => {
      setTimeout(updateTotal, 10);
    });
  });

  // Xử lý submit form
  bookingForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Validate form
    const tourDate = bookingForm.querySelector(
      'input[name="tour_date"]'
    )?.value;
    const tourTime = bookingForm.querySelector(
      'input[name="tour_time"]'
    )?.value;
    const adultCount = parseInt(adultInput?.value) || 0;
    const childrenCount = parseInt(childrenInput?.value) || 0;

    // Kiểm tra các trường bắt buộc
    if (!tourDate) {
      alert("Vui lòng chọn ngày!");
      return;
    }

    if (!tourTime) {
      alert("Vui lòng chọn giờ!");
      return;
    }

    if (adultCount === 0 && childrenCount === 0) {
      alert("Vui lòng chọn ít nhất 1 người!");
      return;
    }

    // Tạo object dữ liệu booking
    const bookingData = {
      tour_date: tourDate,
      tour_time: tourTime,
      adult_count: adultCount,
      children_count: childrenCount,
      adult_price: PRICES.adult,
      children_price: PRICES.children,
      service_per_booking: serviceBookingCheckbox?.checked || false,
      service_per_person: servicePersonCheckbox?.checked || false,
      service_booking_price: PRICES.servicePerBooking,
      service_person_price: PRICES.servicePerPerson,
      total_amount: calculateTotal().toFixed(2),
      timestamp: new Date().toISOString(),
    };

    // Lưu vào sessionStorage để sử dụng ở trang payment
    sessionStorage.setItem("bookingData", JSON.stringify(bookingData));

    // Log để kiểm tra (có thể bỏ sau khi test xong)
    console.log("Booking Data:", bookingData);

    // Submit form
    this.submit();
  });

  // Khởi tạo tổng tiền ban đầu
  updateTotal();
});
