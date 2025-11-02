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
