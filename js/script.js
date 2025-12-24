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
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".toggle-mobile");
  const menu = document.querySelector(".mobile-menu");
  const overlay = document.querySelector(".overlay");
  const closeBtn = document.querySelector(".close-btn");

  if (!toggleBtn || !menu || !overlay || !closeBtn) return;

  // Open menu
  toggleBtn.addEventListener("click", () => {
    menu.classList.add("active");
    overlay.classList.add("active");
    closeBtn.classList.add("active");
  });

  // Close menu
  [overlay, closeBtn].forEach((el) => {
    el.addEventListener("click", () => {
      menu.classList.remove("active");
      overlay.classList.remove("active");
      closeBtn.classList.remove("active");
    });
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

      // Filter wishlist
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
// =============Data============
const tour_data_detail = {
  title:
    "Discovering Da Bia, the hamlet that captured an ASEAN Community Tourism Award",
  place: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
  calendarData: {
    "2025-12-03": {
      price: 80,
      times: ["7:00"],
    },
    "2025-12-04": {
      price: 99,
      times: ["10:00", "15:00", "8:00"],
    },
    "2025-12-07": {
      price: 69,
      times: ["15:00"],
    },
    "2025-12-10": {
      price: 80,
      times: ["13:00"],
    },
    "2025-12-12": {
      price: 99,
      times: ["7:00"],
    },
    "2025-12-20": {
      price: 120,
      times: ["10:00"],
    },
    "2025-12-25": {
      price: 150,
      times: ["15:00", "7:00"],
    },
    "2026-01-02": {
      price: 90,
      times: ["13:00", "15:00"],
    },
    "2026-01-05": {
      price: 95,
      times: ["11:00", "14:00"],
    },
    "2026-01-10": {
      price: 110,
      times: ["9:00"],
    },
    "2026-01-15": {
      price: 130,
      times: ["11:00", "12:00", "13:00", "8:00"],
    },
    "2026-02-01": {
      price: 85,
      times: ["10:00", "15:00", "8:00"],
    },
    "2026-02-14": {
      price: 160,
      times: ["12:00"],
    },
    "2026-02-20": {
      price: 100,
      times: ["11:00", "12:00", "7:00"],
    },
    "2026-03-05": {
      price: 105,
      times: ["10:00", "15:00", "7:00", "8:00"],
    },
    "2026-03-10": {
      price: 115,
      times: ["10:00", "12:00", "15:00"],
    },
    "2026-03-25": {
      price: 140,
      times: ["7:00"],
    },
    "2026-04-01": {
      price: 120,
      times: ["11:00", "8:00"],
    },
    "2026-04-30": {
      price: 180,
      times: ["13:00", "8:00"],
    },
    "2026-05-03": {
      price: 55,
      times: ["12:00", "14:00", "8:00"],
    },
    "2026-05-07": {
      price: 197,
      times: ["10:00", "12:00", "15:00"],
    },
    "2026-05-08": {
      price: 81,
      times: ["11:00", "8:00", "9:00"],
    },
    "2026-05-15": {
      price: 65,
      times: ["14:00", "9:00"],
    },
    "2026-05-21": {
      price: 110,
      times: ["10:00", "11:00", "12:00", "9:00"],
    },
    "2026-05-26": {
      price: 78,
      times: ["10:00"],
    },
    "2026-05-27": {
      price: 131,
      times: ["12:00"],
    },
    "2026-06-08": {
      price: 81,
      times: ["11:00", "14:00", "15:00", "8:00"],
    },
    "2026-06-19": {
      price: 200,
      times: ["10:00", "14:00", "15:00"],
    },
    "2026-06-24": {
      price: 200,
      times: ["11:00", "13:00", "8:00", "9:00"],
    },
    "2026-06-25": {
      price: 131,
      times: ["13:00", "15:00", "9:00"],
    },
    "2026-06-27": {
      price: 77,
      times: ["14:00", "9:00"],
    },
    "2026-06-28": {
      price: 160,
      times: ["7:00"],
    },
    "2026-07-09": {
      price: 146,
      times: ["9:00"],
    },
    "2026-07-11": {
      price: 183,
      times: ["13:00", "8:00"],
    },
    "2026-07-14": {
      price: 89,
      times: ["11:00", "13:00", "14:00", "9:00"],
    },
    "2026-08-05": {
      price: 142,
      times: ["8:00"],
    },
    "2026-08-10": {
      price: 150,
      times: ["12:00", "8:00", "9:00"],
    },
    "2026-08-24": {
      price: 108,
      times: ["12:00", "14:00", "7:00", "9:00"],
    },
    "2026-08-26": {
      price: 194,
      times: ["11:00", "15:00", "9:00"],
    },
    "2026-09-09": {
      price: 65,
      times: ["11:00"],
    },
    "2026-09-17": {
      price: 144,
      times: ["12:00", "9:00"],
    },
    "2026-10-01": {
      price: 190,
      times: ["15:00", "7:00"],
    },
    "2026-10-09": {
      price: 200,
      times: ["14:00", "15:00", "7:00"],
    },
    "2026-10-15": {
      price: 129,
      times: ["10:00", "11:00", "7:00"],
    },
    "2026-10-28": {
      price: 147,
      times: ["15:00", "8:00"],
    },
    "2026-11-10": {
      price: 170,
      times: ["12:00", "15:00", "8:00", "9:00"],
    },
    "2026-11-13": {
      price: 79,
      times: ["11:00", "14:00", "15:00", "9:00"],
    },
    "2026-11-14": {
      price: 99,
      times: ["10:00", "12:00", "15:00", "9:00"],
    },
    "2026-12-01": {
      price: 154,
      times: ["10:00", "11:00", "12:00", "14:00"],
    },
    "2026-12-09": {
      price: 156,
      times: ["10:00"],
    },
    "2026-12-13": {
      price: 186,
      times: ["12:00", "8:00"],
    },
    "2026-12-14": {
      price: 199,
      times: ["15:00"],
    },
    "2026-12-16": {
      price: 100,
      times: ["10:00", "7:00"],
    },
    "2026-12-22": {
      price: 124,
      times: ["7:00"],
    },
    "2027-01-24": {
      price: 179,
      times: ["7:00", "8:00"],
    },
    "2027-02-07": {
      price: 103,
      times: ["10:00", "8:00", "9:00"],
    },
    "2027-02-09": {
      price: 180,
      times: ["10:00", "11:00", "12:00", "9:00"],
    },
    "2027-02-14": {
      price: 170,
      times: ["10:00", "13:00", "14:00", "15:00"],
    },
    "2027-02-17": {
      price: 163,
      times: ["15:00", "8:00"],
    },
    "2027-02-25": {
      price: 67,
      times: ["10:00", "12:00", "13:00", "14:00"],
    },
    "2027-03-14": {
      price: 130,
      times: ["8:00"],
    },
    "2027-03-19": {
      price: 170,
      times: ["13:00"],
    },
    "2027-03-23": {
      price: 74,
      times: ["10:00", "15:00", "8:00"],
    },
    "2027-03-28": {
      price: 119,
      times: ["14:00", "15:00"],
    },
    "2027-03-30": {
      price: 52,
      times: ["13:00", "9:00"],
    },
    "2027-04-03": {
      price: 82,
      times: ["10:00", "13:00", "14:00"],
    },
    "2027-04-07": {
      price: 139,
      times: ["14:00"],
    },
    "2027-04-10": {
      price: 91,
      times: ["7:00"],
    },
    "2027-04-14": {
      price: 53,
      times: ["8:00"],
    },
    "2027-04-15": {
      price: 191,
      times: ["13:00", "9:00"],
    },
    "2027-04-16": {
      price: 59,
      times: ["10:00", "13:00", "14:00", "15:00"],
    },
    "2027-04-17": {
      price: 199,
      times: ["9:00"],
    },
    "2027-04-21": {
      price: 158,
      times: ["10:00", "13:00", "7:00", "9:00"],
    },
    "2027-04-27": {
      price: 199,
      times: ["13:00", "14:00", "8:00"],
    },
    "2027-05-01": {
      price: 72,
      times: ["10:00", "11:00"],
    },
    "2027-05-13": {
      price: 118,
      times: ["15:00"],
    },
    "2027-05-17": {
      price: 162,
      times: ["12:00"],
    },
    "2027-05-22": {
      price: 117,
      times: ["7:00"],
    },
    "2027-05-26": {
      price: 147,
      times: ["11:00", "15:00", "7:00", "9:00"],
    },
    "2027-06-03": {
      price: 164,
      times: ["9:00"],
    },
    "2027-06-07": {
      price: 70,
      times: ["8:00"],
    },
    "2027-06-14": {
      price: 193,
      times: ["13:00", "8:00"],
    },
    "2027-06-19": {
      price: 137,
      times: ["7:00", "8:00"],
    },
    "2027-06-23": {
      price: 179,
      times: ["12:00", "15:00", "8:00", "9:00"],
    },
    "2027-06-27": {
      price: 172,
      times: ["10:00", "11:00", "15:00"],
    },
    "2027-07-04": {
      price: 81,
      times: ["11:00", "14:00"],
    },
    "2027-07-09": {
      price: 165,
      times: ["10:00", "7:00", "8:00"],
    },
    "2027-07-18": {
      price: 170,
      times: ["8:00"],
    },
    "2027-07-19": {
      price: 85,
      times: ["11:00", "15:00"],
    },
    "2027-07-25": {
      price: 189,
      times: ["12:00", "8:00"],
    },
    "2027-07-27": {
      price: 128,
      times: ["11:00", "12:00"],
    },
    "2027-08-03": {
      price: 105,
      times: ["11:00", "14:00"],
    },
    "2027-08-04": {
      price: 161,
      times: ["15:00"],
    },
    "2027-08-05": {
      price: 190,
      times: ["14:00", "8:00", "9:00"],
    },
    "2027-08-06": {
      price: 196,
      times: ["8:00"],
    },
    "2027-08-10": {
      price: 136,
      times: ["11:00", "15:00"],
    },
    "2027-08-14": {
      price: 166,
      times: ["10:00", "12:00"],
    },
    "2027-08-21": {
      price: 190,
      times: ["14:00", "15:00", "9:00"],
    },
    "2027-08-22": {
      price: 182,
      times: ["8:00"],
    },
    "2027-08-27": {
      price: 136,
      times: ["11:00", "14:00", "7:00", "9:00"],
    },
    "2027-08-30": {
      price: 123,
      times: ["11:00", "9:00"],
    },
    "2027-09-07": {
      price: 156,
      times: ["11:00", "13:00", "15:00", "7:00"],
    },
    "2027-09-24": {
      price: 73,
      times: ["8:00"],
    },
    "2027-09-27": {
      price: 93,
      times: ["15:00", "7:00"],
    },
    "2027-09-29": {
      price: 66,
      times: ["10:00", "15:00", "9:00"],
    },
    "2027-10-01": {
      price: 162,
      times: ["11:00", "7:00"],
    },
    "2027-10-08": {
      price: 87,
      times: ["12:00", "7:00", "8:00"],
    },
    "2027-10-15": {
      price: 98,
      times: ["12:00", "8:00"],
    },
    "2027-10-16": {
      price: 69,
      times: ["10:00", "13:00", "8:00", "9:00"],
    },
    "2027-10-17": {
      price: 52,
      times: ["13:00", "7:00"],
    },
    "2027-11-18": {
      price: 71,
      times: ["12:00", "13:00"],
    },
    "2027-11-21": {
      price: 170,
      times: ["11:00", "9:00"],
    },
    "2027-12-01": {
      price: 184,
      times: ["13:00"],
    },
    "2027-12-16": {
      price: 190,
      times: ["14:00"],
    },
    "2027-12-18": {
      price: 144,
      times: ["10:00", "14:00"],
    },
    "2027-12-19": {
      price: 58,
      times: ["10:00", "11:00", "8:00"],
    },
    "2027-12-26": {
      price: 50,
      times: ["10:00"],
    },
    "2027-12-27": {
      price: 143,
      times: ["11:00", "12:00", "13:00", "7:00"],
    },
    "2027-12-28": {
      price: 132,
      times: ["12:00", "13:00", "15:00"],
    },
  },
  reviewData: [
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
  ],
};
// ********************Action Form**************************
// ========Calendar==========
document.addEventListener("DOMContentLoaded", function () {
  let currentDate = new Date();
  let activeDate = null;

  function getDayData(dateStr) {
    return tour_data_detail.calendarData[dateStr] || null;
  }

  function formatDate(year, month, day) {
    const m = String(month + 1).padStart(2, "0");
    const d = String(day).padStart(2, "0");
    return `${year}-${m}-${d}`;
  }

  const today = new Date(); // Set today to December 23, 2025
  today.setHours(0, 0, 0, 0);
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

    // Previous month
    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
      const day = daysInPrevMonth - i;
      const date = new Date(year, month - 1, day);
      const dayCell = document.createElement("div");
      dayCell.className = "day-cell empty disabled";
      dayCell.innerHTML = `
        <div class="day-number">${day}</div>
        <div class="day-name">${dayNames[date.getDay()]}</div>
      `;
      daysGrid.appendChild(dayCell);
    }

    // Current month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      date.setHours(0, 0, 0, 0);

      const dateStr = formatDate(year, month, day);
      const dayData = getDayData(dateStr);
      const isPast = date < today;

      const dayCell = document.createElement("div");
      dayCell.className = "day-cell";

      if (isPast) dayCell.classList.add("disabled");
      if (!isPast && dateStr === todayStr) dayCell.classList.add("today");
      if (!isPast && activeDate === dateStr) dayCell.classList.add("active");

      if (!isPast && dayData) {
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

      if (!isPast && dayData) {
        dayCell.onclick = () => {
          document
            .querySelectorAll(".day-cell.active")
            .forEach((c) => c.classList.remove("active"));
          document
            .querySelectorAll(".day-cell.today")
            .forEach((c) => c.classList.remove("today"));

          activeDate = dateStr;
          dayCell.classList.add("active");

          if (dayData?.price) {
            window.updatePriceFromCalendar(dateStr, dayData.price);
          }
        };
      }

      daysGrid.appendChild(dayCell);
    }

    // Next month
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
// ===================Active Sub Menu=========================
document.addEventListener("DOMContentLoaded", function () {
  function hasTourOnDate(year, month, day) {
    const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(
      day
    ).padStart(2, "0")}`;
    return tour_data_detail.calendarData[dateStr] !== undefined;
  }

  // Lấy giá tour
  function getTourPrice(year, month, day) {
    const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(
      day
    ).padStart(2, "0")}`;
    return tour_data_detail.calendarData[dateStr]?.price || null;
  }

  const dropdowns = document.querySelectorAll(".group-select .select-items");

  //============== Hàm Up  TIME PICKER=====================
  function updateTimePicker(dropdown) {
    const selectDate = dropdown.querySelector(".select-date");
    const list = dropdown.querySelector(".list");
    const current = dropdown.querySelector(".current");

    if (!selectDate || !list) return;

    // Chose date
    const dateValue = document.querySelector('input[name="tour_date"]')?.value;

    // Xóa nội dung cũ
    list.innerHTML = "";

    if (!dateValue) {
      const li = document.createElement("li");
      li.textContent = "Please choose date first";
      li.className = "disabled";
      list.appendChild(li);
    } else {
      // Get time to calendarData
      const times = tour_data_detail.calendarData?.[dateValue]?.times || [];

      if (!times.length) {
        const li = document.createElement("li");
        li.textContent = "No time available";
        li.className = "disabled";
        list.appendChild(li);
      } else {
        times.forEach((time) => {
          const li = document.createElement("li");
          li.className = "time-option";
          li.textContent = time;
          li.setAttribute("data-time", time);
          list.appendChild(li);
        });
      }
    }

    // Event click
    const timeOptions = list.querySelectorAll("li");
    timeOptions.forEach((option) => {
      option.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (option.classList.contains("disabled")) return;

        const timeValue =
          option.getAttribute("data-time") || option.textContent.trim();

        // Up value
        selectDate.value = timeValue;
        timeOptions.forEach((opt) => opt.classList.remove("selected"));
        option.classList.add("selected");
        list?.classList.remove("active");
        current?.classList.remove("active");
      });
    });
  }

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

      // UP TIME PICKER
      const selectDate = dropdown.querySelector(".select-date");
      if (
        selectDate &&
        list &&
        !dropdown.querySelector(".guest-item") &&
        !dropdown.querySelector(".datepicker-days")
      ) {
        updateTimePicker(dropdown);
      }
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

    // ==================Counter Logic========================
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

        const icon = current.querySelector("i");
        const img = current.querySelector("img");

        current.innerHTML = "";

        if (img) {
          current.appendChild(img.cloneNode(true));
        }
        current.appendChild(document.createTextNode(" " + text + " "));
        if (icon) {
          current.appendChild(icon.cloneNode(true));
        }
      }

      updateCurrent();
    }

    // ============ DATEPICKER LOGIC  ============
    const dateInput = dropdown.querySelector(".date-input");
    const datepickerDays = dropdown.querySelector(".datepicker-days");
    const datepickerTitle = dropdown.querySelector(".datepicker-title");
    const prevBtn = dropdown.querySelector(".prev-month");
    const nextBtn = dropdown.querySelector(".next-month");

    const isDatepickerForTour = dropdown.classList.contains("datepicker");

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

        datepickerDays.innerHTML = "";

        // Previous month days
        for (let i = firstDayIndex; i > 0; i--) {
          const day = document.createElement("button");
          day.type = "button";
          const dayNum = prevLastDate - i + 1;

          day.className = "datepicker-day other-month";
          day.textContent = dayNum;

          if (isDatepickerForTour) {
            const hasTour = hasTourOnDate(year, month - 1, dayNum);

            if (!hasTour) {
              day.classList.add("disabled");
              day.style.cursor = "not-allowed";
              day.style.opacity = "0.4";
            } else {
              day.addEventListener("click", (e) => {
                e.stopPropagation();
                selectDate(new Date(year, month - 1, dayNum));
              });
            }
          } else {
            day.addEventListener("click", (e) => {
              e.stopPropagation();
              selectDate(new Date(year, month - 1, dayNum));
            });
          }

          datepickerDays.appendChild(day);
        }

        // Current month days
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        for (let i = 1; i <= lastDate; i++) {
          const day = document.createElement("button");
          day.type = "button";
          day.className = "datepicker-day";

          const dayDate = new Date(year, month, i);
          dayDate.setHours(0, 0, 0, 0);
          const isPast = dayDate < today;
          const isToday = dayDate.getTime() === today.getTime();

          day.textContent = i;

          if (isDatepickerForTour) {
            const hasTour = hasTourOnDate(year, month, i);

            if ((!hasTour && !isToday) || (isPast && !isToday)) {
              day.classList.add("disabled");
              day.disabled = true;
              day.style.cursor = "not-allowed";
              day.style.opacity = "0.4";
            } else {
              day.addEventListener("click", (e) => {
                e.stopPropagation();
                selectDate(new Date(year, month, i));
              });
            }
          } else {
            if (isPast) {
              day.classList.add("disabled");
              day.disabled = true;
              day.style.cursor = "not-allowed";
              day.style.opacity = "0.4";
            } else {
              day.addEventListener("click", (e) => {
                e.stopPropagation();
                selectDate(new Date(year, month, i));
              });
            }
          }

          if (
            i === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear()
          ) {
            day.classList.add("today");
          }

          if (
            selectedDate &&
            i === selectedDate.getDate() &&
            month === selectedDate.getMonth() &&
            year === selectedDate.getFullYear()
          ) {
            day.classList.add("selected");
          }

          const dayOfWeek = new Date(year, month, i).getDay();
          if (dayOfWeek === 0 || dayOfWeek === 6) {
            day.classList.add("weekend");
          }

          datepickerDays.appendChild(day);
        }

        // Next month days
        const remainingDays = 42 - datepickerDays.children.length;
        for (let i = 1; i <= remainingDays; i++) {
          const day = document.createElement("button");
          day.type = "button";

          day.className = "datepicker-day other-month";
          day.textContent = i;

          if (isDatepickerForTour) {
            const hasTour = hasTourOnDate(year, month + 1, i);

            if (!hasTour) {
              day.classList.add("disabled");
              day.style.cursor = "not-allowed";
              day.style.opacity = "0.4";
            } else {
              day.addEventListener("click", (e) => {
                e.stopPropagation();
                selectDate(new Date(year, month + 1, i));
              });
            }
          } else {
            day.addEventListener("click", (e) => {
              e.stopPropagation();
              selectDate(new Date(year, month + 1, i));
            });
          }

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

        if (isDatepickerForTour) {
          const dateStr = `${year}-${month}-${day}`;
          const price = getTourPrice(year, date.getMonth(), date.getDate());

          if (price && window.updatePriceFromCalendar) {
            window.updatePriceFromCalendar(dateStr, price);
          }

          // Up TIME PICKER SAU KHI CHỌN NGÀY
          const timePickerDropdown = document.querySelector(
            '.select-items:has(.select-date[name="tour_time"])'
          );
          if (timePickerDropdown) {
            updateTimePicker(timePickerDropdown);
          }
        }

        renderCalendar(date.getFullYear(), date.getMonth());

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
// =============== BOOKING FORM CALCULATOR ===============
document.addEventListener("DOMContentLoaded", function () {
  const bookingForm = document.querySelector(".tf-form-book.booking-form form");
  if (!bookingForm) return;

  window.PRICES = {
    adult: 0,
    children: 0,
    servicePerBooking: 20,
    servicePerPerson: 20,
  };

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

  const valueAdultSpan = bookingForm.querySelector(".value-adult");
  const valueChildrenSpan = bookingForm.querySelector(".value-child");

  function calculateTotal() {
    const adultCount = parseInt(adultInput?.value) || 0;
    const childrenCount = parseInt(childrenInput?.value) || 0;
    const totalPeople = adultCount + childrenCount;

    let total = 0;
    total += adultCount * PRICES.adult;
    total += childrenCount * PRICES.children;

    if (serviceBookingCheckbox?.checked) {
      total += PRICES.servicePerBooking;
    }
    if (servicePersonCheckbox?.checked) {
      total += totalPeople * PRICES.servicePerPerson;
    }
    return total;
  }

  function updateTotal() {
    const total = calculateTotal();
    totalValueElement.textContent = `$${total.toFixed(2)}`;
    totalHiddenInput.value = total.toFixed(2);
  }

  // Change Input
  adultInput?.addEventListener("input", updateTotal);
  childrenInput?.addEventListener("input", updateTotal);

  // Change Input +/-
  adultInput?.addEventListener("change", updateTotal);
  childrenInput?.addEventListener("change", updateTotal);

  const adultPlusBtn = bookingForm.querySelector(
    ".guest-item:nth-child(1) .plus"
  );
  const adultMinusBtn = bookingForm.querySelector(
    ".guest-item:nth-child(1) .minus"
  );
  const childPlusBtn = bookingForm.querySelector(
    ".guest-item:nth-child(2) .plus"
  );
  const childMinusBtn = bookingForm.querySelector(
    ".guest-item:nth-child(2) .minus"
  );

  adultPlusBtn?.addEventListener("click", updateTotal);
  adultMinusBtn?.addEventListener("click", updateTotal);
  childPlusBtn?.addEventListener("click", updateTotal);
  childMinusBtn?.addEventListener("click", updateTotal);

  // Checkbox services
  serviceBookingCheckbox?.addEventListener("change", updateTotal);
  servicePersonCheckbox?.addEventListener("change", updateTotal);

  // Khởi tạo total ban đầu
  updateTotal();

  // UPDATE TOTAL FROM CALENDAR
  window.updatePriceFromCalendar = function (dateStr, price) {
    const dateInput = bookingForm.querySelector('input[name="tour_date"]');
    if (dateInput) dateInput.value = dateStr;

    PRICES.adult = price;
    PRICES.children = price / 2;

    valueAdultSpan.textContent = `$${PRICES.adult.toFixed(2)}`;
    valueChildrenSpan.textContent = `$${PRICES.children.toFixed(2)}`;

    updateTotal();
  };
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

// ********************End Action Form**************************
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
document.addEventListener("DOMContentLoaded", () => {
  const wrap = document.querySelector(".wg-review-summary");
  if (!wrap) return;

  const maxScore = Number(wrap.dataset.max || 5);
  const count = tour_data_detail.reviewData.length;

  // RANGE
  const fields = Object.keys(tour_data_detail.reviewData[0]);

  const avgByField = {};
  fields.forEach((field) => {
    const total = tour_data_detail.reviewData.reduce(
      (sum, r) => sum + r[field],
      0
    );
    avgByField[field] = total / count;
  });

  const totalAvg =
    Object.values(avgByField).reduce((s, v) => s + v, 0) / fields.length;

  // FIX
  wrap.querySelector(".score-value").textContent = totalAvg.toFixed(1);

  wrap.querySelector(".rating-count").textContent = count;

  renderStars(
    wrap.querySelector(".rating-summary .list-star"),
    Math.floor(totalAvg),
    maxScore
  );

  // Avg Categories
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

  // === RENDER RATE ===
  const rateWrap = document.querySelector(".rate");
  if (rateWrap) {
    const ratingText = rateWrap.querySelector(".rating-text");
    const ratingCount = rateWrap.querySelector(".rating-count");
    const listStar = rateWrap.querySelector(".list-star");

    if (ratingText) ratingText.textContent = totalAvg.toFixed(1);
    if (ratingCount) ratingCount.textContent = count;
    if (listStar) renderStars(listStar, Math.floor(totalAvg), maxScore);
  }
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
