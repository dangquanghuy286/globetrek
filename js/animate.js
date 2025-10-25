// =============Preload================
window.addEventListener("load", function () {
  const preload = document.querySelector(".preload");

  setTimeout(() => {
    preload.style.transition = "opacity 1s ease";
    preload.style.opacity = "0";
    setTimeout(() => preload.remove(), 500);
  }, 1000);
});
