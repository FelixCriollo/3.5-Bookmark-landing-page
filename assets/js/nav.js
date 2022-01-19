const navBtnHandle = (e) => {
  const $navList = document.querySelector('.nav-list');
  
  const burger = "/images/icon-hamburger.svg";
  const closeNav = "/images/icon-close.svg";
  
  const $logo = document.querySelector('.logo');
  const logoN = "/images/logo-bookmark.svg";
  const logoA = "/images/logo-bookmark-a.svg";


  e.target.classList.contains('open') 
    ? (
      $navList.classList.remove('nav-list--active'),
      e.target.classList.remove('open'),
      e.target.src = burger,
      $logo.children[0].src = logoN
    ) : (
      $navList.classList.add('nav-list--active'),
      e.target.classList.add('open'),
      e.target.src = closeNav,
      $logo.children[0].src = logoA
    )
}

export default navBtnHandle;