"use strict";

function header() {
  // Фиксированная шапка
  const $headerContent = document.querySelector(".header__content"),
    $navbar = document.querySelector('.navbar'),
    $wrapper = document.querySelector('.wrapper')

  if ($headerContent) {
    window.onscroll = function showHeader() {
      if (window.pageYOffset > 200) {
        $headerContent.classList.add("_fixed")
        $navbar.classList.add("_fixedNav")
      } else {
        $headerContent.classList.remove("_fixed")
        $navbar.classList.remove("_fixedNav")
      }
    }
  }

  // Плавная прокрутка
  const menuLinks = document.querySelectorAll(".nav-link[data-goto]");

  if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
      menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
      const menuLink = e.target;

      if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
        const gotoBlock = document.querySelector(menuLink.dataset.goto);
        const gotoBlockValue =
          gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('#header').offsetHeight - 13;

        window.scrollTo({
          top: gotoBlockValue,
          behavior: "smooth",
        });

        e.preventDefault();
      }
    }
  }
}

export { header };
