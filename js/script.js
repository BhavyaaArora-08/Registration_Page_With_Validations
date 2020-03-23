var form = document.getElementById('form');
var uname = document.getElementById('uname');
var email = document.getElementById('email');
var pass1 = document.getElementById('pass1');
var pass2 = document.getElementById('pass2');
var boolem = false;
var bool = true;

//check if empty
function checkRequired(inputArr) {
  inputArr.forEach(function(input) {
    if (input.value.trim() == '')
      showError(input, input.name + " can't be empty");
    else if (input == pass1 || input == pass2) {
      checkValidP(input);
    } else
      showSuccess(input);
  });
}

function showError(userInputID, msg) {
  var form_control = userInputID.parentElement;
  form_control.className = 'form-control error';
  var small = form_control.querySelector('small');
  small.innerHTML = msg;
  if (userInputID == email)
    boolem = true;
};

function showSuccess(input) {
  var formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function checkValid(email) {
  if (!validateEmail(email.value)) {
    showError(email, "Invalid Email");
  } else
    showSuccess(email);
}

function checkValidP(pass) {
  if (pass.value.length >= 6 && pass.value.length <= 15)
    checkEqual(pass1, pass2);
  else {
    showError(pass, "Length of password should be bw 6 and 15");
  }
};

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function checkEqual(pass1, pass2) {
  if (pass1.value != pass2.value) {
    showError(pass1, "Password doesn't match");
    showError(pass2, "Password doesn't match");
  } else {
    showSuccess(pass1);
    showSuccess(pass2);
  }

}

form.addEventListener('submit', function(e) {
  e.preventDefault();
  checkRequired([uname, email, pass1, pass2]);
  if (!boolem)
    checkValid(email);
  boolem = false;
});
