// =============Back To Top=================
document.addEventListener("DOMContentLoaded", () => {
  const gotop = document.getElementById("backtotop");
  const border = document.querySelector(".border-progress");

  window.addEventListener("scroll", () => {
    // Đã cuộn
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    //Tổng số px có thể cuộn
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    //% trang đã cuộn
    const scrollPercent = (scrollTop / docHeight) * 100;
    // Đổi % sang độ
    const borderAngle = (scrollPercent / 100) * 360;

    // Góc quay border
    border.style.setProperty("--progress-angle", `${borderAngle}deg`);

    // Hiển thị ẩn bật nút
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

  // Lay dia chi path ,chia chuoi va loc cac phan tu rong
  const path = window.location.pathname;
  const parts = path.split("/").filter(Boolean);

  // Hàm viết hoa chữ cái đầu tiên
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

// Khi click vào nút mở menu
toggleBtn.addEventListener("click", () => {
  menu.classList.add("active");
  overlay.classList.add("active");
  closeBtn.classList.add("active");
});

// Khi click overlay hoặc nút đóng thì đóng menu
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
    e.preventDefault();
    list.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");
  }

  list.forEach((item) => item.addEventListener("click", activeLink));
});
