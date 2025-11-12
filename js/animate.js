document.addEventListener("DOMContentLoaded", function () {
  const preload = document.querySelector(".preload");
  preload.style.transition = "opacity 1s ease";
  preload.style.opacity = "0";
  setTimeout(() => preload.remove(), 1200);
});
