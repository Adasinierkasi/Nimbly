
const openNav = document.querySelector('.nav-open-btn');
const closeNav = document.querySelector('.nav-close-btn');
const navbarBlock = document.querySelector('.navbar-mobile-block');
const navbarCloseIcon = document.querySelector('.navbar-mobile-block i');

openNav.addEventListener('click', () => {
  navbarBlock.classList.add('nv-active');
  navbarCloseIcon.classList.add('nvi-active');
})

closeNav.addEventListener('click', () => {
  navbarBlock.classList.remove('nv-active');
  navbarCloseIcon.classList.remove('nvi-active');
})