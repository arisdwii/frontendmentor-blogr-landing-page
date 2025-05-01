const btnHamburger = document.querySelector(".header-hamburger");
const headerNavigation = document.querySelector(".header-navigation");
const navOverlay = document.querySelector(".nav-overlay");
const navGroups = document.querySelectorAll(".nav-group");
const navTitles = document.querySelectorAll(".nav-title");

const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;

window.addEventListener("scroll", () => {
  document
    .querySelector("header")
    .classList.toggle("scroll", window.scrollY > 10);
});

function navMobile(element) {
  element.addEventListener("click", () => {
    const expanded = btnHamburger.getAttribute("aria-expanded") === "true";
    btnHamburger.setAttribute("aria-expanded", !expanded);
    btnHamburger.classList.toggle("open");
    headerNavigation.classList.toggle("active");
    document.body.classList.toggle("over-hide");
  });
}

navMobile(btnHamburger);
navMobile(navOverlay);

if (isTouchDevice) {
  navTitles.forEach((navTitle) => {
    navTitle.addEventListener("click", () => {
      const navGroup = navTitle.closest(".nav-group");
      const isOpen = navGroup.classList.contains("open");

      navGroups.forEach((group) => group.classList.remove("open"));
      if (!isOpen) navGroup.classList.add("open");
    });
  });
} else {
  if (window.innerWidth > 768) {
    document.body.classList.add("hover-enabled");
  }

  navGroups.forEach((group) => {
    group.addEventListener("mouseenter", () => {
      group.classList.add("open");
    });

    group.addEventListener("mouseleave", () => {
      group.classList.remove("open");
    });
  });
}
