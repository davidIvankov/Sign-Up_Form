let password = document.getElementById("password");
let confirm_password = document.getElementById("confirm_password");
let message = document.getElementById("error_message");
const toggleFormButton = document.getElementById('open_form'),
form = document.getElementById('form'),
container = document.getElementById('container'),
header = document.getElementById('head'),
carot = document.getElementById('carot'),
logo = document.getElementById('logo');



function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords do not match");
    message.innerText = "*Passwords do not match";
    password.classList.add("error");
    confirm_password.classList.add("error");
  } else {
    password.classList.remove("error");
    confirm_password.classList.remove("error");
    confirm_password.setCustomValidity("");
    message.innerText = "";
  }
}



password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

toggleFormButton.addEventListener('click',() => {

  carot.classList.add('carot_active')
  container.classList.add('shrink_container')
header.classList.add('hide')
logo.classList.add('animate')
logo.classList.remove('initial_animation')
  form.classList.add('active_form');

})

carot.addEventListener('click',() => {
  logo.classList.remove('animate')
  header.classList.remove('hide')
  form.classList.remove('active_form');
  container.classList.remove('shrink_container')
  

})