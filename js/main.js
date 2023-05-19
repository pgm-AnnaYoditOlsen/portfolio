const header = document.querySelector(".header");

const toggleClass = "sticky";
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > 0) {
    header.classList.add(toggleClass);
  } else {
    header.classList.remove(toggleClass);
  }
});