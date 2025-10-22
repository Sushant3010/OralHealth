AOS.init({
  duration: 1000,
  once: true,
});

const links = document.querySelectorAll(".nav-links a");
links.forEach((link) => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});

window.addEventListener("scroll", () => {
  const body = document.body;
  if (window.scrollY > 50) body.classList.add("scrolled");
  else body.classList.remove("scrolled");
});
