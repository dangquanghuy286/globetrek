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
  const breadcrumbContainer = document.getElementById("breadcrumb");
  if (!breadcrumbContainer) return;

  // get path
  const path = window.location.pathname;
  const parts = path.split("/").filter(Boolean);

  // To capital
  const capitalizeWords = (str) => {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  // path home
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

  breadcrumbContainer.innerHTML = breadcrumbHTML;
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
    const icon = parent.querySelector(".mb-icon");

    if (subMenu) {
      document.querySelectorAll(".nav-item.active").forEach((otherItem) => {
        if (otherItem !== parent) {
          otherItem.classList.remove("active");

          const otherIcon = otherItem.querySelector(".mb-icon");
          if (otherIcon) {
            otherIcon.classList.remove("icon-CaretUp");
            otherIcon.classList.add("icon-CaretDown");
          }
        }
      });

      // Toggle
      const isActive = parent.classList.toggle("active");

      if (icon) {
        if (isActive) {
          icon.classList.remove("icon-CaretDown");
          icon.classList.add("icon-CaretUp");
        } else {
          icon.classList.remove("icon-CaretUp");
          icon.classList.add("icon-CaretDown");
        }
      }
    }
  });
});
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
        const infants =
          parseInt(guestItems[2]?.querySelector("input").value) || 0;

        let parts = [];
        if (adults > 0) parts.push(`${adults} Adult${adults > 1 ? "s" : ""}`);
        if (children > 0)
          parts.push(`${children} Child${children > 1 ? "ren" : ""}`);
        if (infants > 0)
          parts.push(`${infants} Infant${infants > 1 ? "s" : ""}`);

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
});

//==========Search=========================
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form-s1 form");

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
      infants: guestInputs[2]?.value || "0",
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
      infants: guests.infants,
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
      connect: true, // Đúng rồi, tạo thanh connect
    });

    // Di chuyển listener handles VÀO ĐÂY, sau khi tạo
    const noUiHandles = slider.querySelectorAll(".noUi-handle");
    noUiHandles.forEach(function (handle) {
      handle.addEventListener("click", function () {
        this.style.width = "50px"; // Lưu ý: Override CSS 18px của bạn; bỏ nếu không cần
      });
    });

    // Event update giữ nguyên
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
