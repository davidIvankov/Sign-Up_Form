let password = document.getElementById("password");
let confirm_password = document.getElementById("confirm_password");
let message = document.getElementById("error_message");

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