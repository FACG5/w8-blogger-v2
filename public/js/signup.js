const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const form = document.getElementsByTagName("form")[0];
const nameErr = document.getElementById("nameErr");
const emailErr = document.getElementById("emailErr");
const passwordErr = document.getElementById("passwordErr");
const confirmErr = document.getElementById("confirmErr");

const checkName = () => {
  if (name.value.trim().length == 0) {
    displayErr(nameErr, "Please Enter a Name ");
  } else {
    displayErr(nameErr, "");
    return true;
  }
};

const checkEmail = () => {
  if (email.validity.typeMismatch) {
    displayErr(emailErr, "Please enter a valid email address");
  } else if (email.validity.valueMissing) {
    displayErr(emailErr, "Please enter an email address");
  } else {
    displayErr(emailErr, "");
    return true;
  }
};

const checkPw = () => {
  if (password.validity.patternMismatch) {
    displayErr(
      passwordErr,
      "Password must contain at least eight characters, including one letter and one number"
    );
  } else if (password.validity.valueMissing) {
    displayErr(passwordErr, "Please enter a password");
  } else {
    displayErr(passwordErr, "");
    return true;
  }
};

const checkConfirmPw = () => {
  if (password.value != confirmPassword.value) {
    displayErr(confirmErr, "Passwords do not match");
  } else if (confirmPassword.validity.valueMissing) {
    displayErr(confirmErr, "Please confirm your password");
  } else {
    displayErr(confirmErr, "");
    return true;
  }
};

let displayErr = (errElem, errMsg) => {
  errElem.innerText = errMsg;
}

name.addEventListener("focusout", checkName);
email.addEventListener("focusout", checkEmail);
password.addEventListener("focusout", checkPw);
confirmPassword.addEventListener("focusout", checkConfirmPw);

form.addEventListener("submit", function(event) {
  if (!checkName()) {
    event.preventDefault();
  }
  if (!checkEmail()) {
    event.preventDefault();
  }
  if (!checkPw()) {
    event.preventDefault();
  }
  if (!checkConfirmPw()) {
    event.preventDefault();
  }


});
