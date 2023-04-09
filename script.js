const password = document.getElementById("password"),
 confirm_password = document.getElementById("confirm_password"),
 message = document.getElementById("error_message"),
 error_fname = document.getElementById("error_fname"),
 error_lname = document.getElementById("error_lname"),
 regName = /[^\d#$%&'()*+,-./:;˛<=>˙´¨¸˝?@[\]^_`{|}~]+/,
 toggleFormButton = document.getElementById('open_form'),
form = document.getElementById('form'),
container = document.getElementById('container'),
header = document.getElementById('head'),
carot = document.getElementById('carot'),
logo = document.getElementById('logo'),
 fname = document.getElementById("first_name"),
 lname = document.getElementById("last_name"),
 tel = document.getElementById("phone_number"),
 email = document.getElementById("email");


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

function validateFirstName(){
  if(!regName.test(fname.value) || !fname.value.trim()){
    error_fname.innerText = "*Invalid First Name";
    fname.classList.add("error");
    fname.setCustomValidity('Invalid Input')
  } else {
    fname.classList.remove("error");
    error_fname.innerText = "";
    fname.setCustomValidity('')
  }
}

 function validateLastName(){
  if(!regName.test(lname.value) || !lname.value.trim()){
    console.log(realLastName)
    error_lname.innerText = "*Invalid Last Name";
    lname.classList.add("error");
    lname.setCustomValidity('Invalid Input')
  } else {
    error_lname.innerText = "";
    lname.classList.remove("error");
    lname.setCustomValidity('');
  }

}


function isSuccess(){
  if (fname.checkValidity() &&
    lname.checkValidity() &&
    email.checkValidity() &&
    tel.checkValidity() &&
    confirm_password.checkValidity() &&
    password.checkValidity()
    ){
        alert(`You have registered successfully!\nfirst name: ${fname.value}\nlast name: ${lname.value}\nphone: ${tel.value}\ne-mail: ${email.value}`);

  }
  
  return true;
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

fname.onchange = validateFirstName;
lname.onchange = validateLastName;

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