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
        <div class="breadcrumb-item dot"><span> > </span></div>
        <a class="breadcrumb-item" href="${part}">${name}</a>
      `;
    } else {
      breadcrumbHTML += `
        <div class="breadcrumb-item dot"><span> > </span></div>
        <div class="breadcrumb-item current">${name}</div>
      `;
    }
  });

  breadcrumbContainer.innerHTML = breadcrumbHTML;
});
