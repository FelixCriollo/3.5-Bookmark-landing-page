const formValid = (e) => {
  const $form = document.querySelector('form');
  const $input = $form.email;
  const $error = $form.children[0].children[1];
  const $errorSymbol = $form.children[0].children[2];

  let regex = new RegExp('[a-z0-9]+@[a-z]+.+\.[a-z]{2,3}');
  
  if (!regex.test($input.value)) {
    e.preventDefault();
    $error.classList.add("join__error--show")
    $input.classList.add("join__email--error")
    $errorSymbol.style.visibility = "visible";
  } else {
    e.preventDefault();
    $error.classList.remove("join__error--show")
    $input.classList.remove("join__email--error")
    $errorSymbol.style.visibility = "hidden";
  }
  
  $input.addEventListener('click', () => {
    $error.classList.remove("join__error--show")
    $input.classList.remove("join__email--error")
    $errorSymbol.style.visibility = "hidden";
  })
}

export default formValid;