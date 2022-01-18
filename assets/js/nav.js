const $navList = document.querySelector('.nav-list');

const $navBtn = document.querySelector('.nav-btn');
const burger = "/images/icon-hamburger.svg";
const closeNav = "/images/icon-close.svg";

const $logo = document.querySelector('.logo');
const logoN = "/images/logo-bookmark.svg";
const logoA = "/images/logo-bookmark-a.svg";

$navBtn.addEventListener('click', () => {
  $navBtn.classList.contains('open') ? (
    $navList.classList.remove('nav-list--active'),
    $navBtn.classList.remove('open'),
    $navBtn.children[0].src = burger,
    $logo.children[0].src = logoN
    ) : (
      $navList.classList.add('nav-list--active'),
      $navBtn.classList.add('open'),
      $navBtn.children[0].src = closeNav,
      $logo.children[0].src = logoA
    )
})