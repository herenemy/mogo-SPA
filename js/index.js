'use strict';

// Elements
const nav = document.querySelector('.nav'),
  navLinks = document.querySelectorAll('.nav__link'),
  header = document.querySelector('.header'),
  allSections = document.querySelectorAll('.section'),
  intro = document.querySelector('.intro'),
  burgerMenu = document.querySelector('.header__burger-btn'),
  accordionHeader = document.querySelectorAll('.accordion__header'),
  accordionContent = document.querySelectorAll('.accordion__content'),
  accordionItems = document.querySelectorAll('.accordion__item'),
  logo = document.querySelector('.header__logo');

// Smooth scroll from nav to sections
nav.addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const target = e.target;
    const href = target.getAttribute('href');
    document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
  }
});

// Appearance section
const appearanceSection = function (entries, observer) {
  const entry = entries[0];
  if (entry.isIntersecting) {
    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
  }
};
const sectionObserver = new IntersectionObserver(appearanceSection, {
  root: null,
  threshold: 0.2,
});
allSections.forEach(section => {
  section.classList.add('section--hidden');
  sectionObserver.observe(section);
});

// Open burger menu
burgerMenu.addEventListener('click', function () {
  if (!header.classList.contains('open')) {
    header.classList.add('open');
  } else {
    header.classList.remove('open');
  }
});

// Sticky nav
const mediaQueryCondition = window.matchMedia('(max-width: 990px)');
const stickyNav = function (entries) {
  const entry = entries[0];
  if (!mediaQueryCondition.matches) {
    if (!entry.isIntersecting) {
      header.style.position = 'fixed';
      header.style.backgroundColor = '#ff8282';
    } else {
      header.style.position = 'absolute';
      header.style.backgroundColor = 'transparent';
    }
  } else {
    header.style.position = 'fixed';
    header.style.backgroundColor = '#ff8282';
  }
};
const introObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
});
introObserver.observe(intro);

// JQuery
// accordion collapse
$('[data-collapse]').on('click', function (e) {
  e.preventDefault();
  var $this = $(this),
    blockId = $this.data('collapse');
  $(blockId).slideToggle();
});

// slider
$('[data-slider]').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
});
