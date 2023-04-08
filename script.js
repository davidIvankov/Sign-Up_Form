let password = document.getElementById("password");
let confirm_password = document.getElementById("confirm_password");
let message = document.getElementById("error_message");
const toggleFormButton = document.getElementById('open_form'),
form = document.getElementById('form'),
container = document.getElementById('container'),
header = document.getElementById('head');

let fname = document.getElementById("first_name");
let lname = document.getElementById("last_name");
let tel = document.getElementById("phone_number");
let email = document.getElementById("email");

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


function isSuccess() {
  if (password.value.length > 0 
    && fname.value.length > 0 
    && lname.value.length > 0 
    && tel.value.length > 0 
    && email.value.length > 0
    && password.value == confirm_password.value
    && email.value.includes('@')){
        alert('You have registered successfully!');

  }
  
  return true;
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

toggleFormButton.addEventListener('click',() => {
  container.classList.add('shrink_container')
header.classList.add('hide')
  form.classList.add('active_form');

})