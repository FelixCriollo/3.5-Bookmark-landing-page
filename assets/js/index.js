import featureHandle from "./features-handle.js";
import navBtnHandle from "./nav.js";
import formValid from "./form.js";

// variables
const $navBtn = document.querySelector('.nav-btn');
const $infoSelector = document.querySelectorAll(".feature-selector__item");
//form
const $btn = document.querySelector('.join__btn');

// Events Listeners
$navBtn.addEventListener('click', navBtnHandle);


$infoSelector.forEach(($select, pos) => {
  $select.addEventListener("click", (e) => {
    $infoSelector.forEach(($selector) =>
    $selector.classList.remove("feature-selector__item--active")
    );
    e.target.classList.add("feature-selector__item--active");
    
    featureHandle(pos);
  }); 
});

// form
$btn.addEventListener('click', formValid); 