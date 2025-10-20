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
