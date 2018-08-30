const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementsByTagName("form")[0];
const emailErr = document.getElementById("emailErr");
const passwordErr = document.getElementById("passwordErr");

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
   if (password.validity.valueMissing) {
    displayErr(passwordErr, "Please enter a password");
  } else {
    displayErr(passwordErr, "");
    return true;
  }
};

let displayErr = (errElem, errMsg) => {
  errElem.innerText = errMsg;
}

email.addEventListener("focusout", checkEmail);
password.addEventListener("focusout", checkPw);

form.addEventListener("submit", function(event) {

  if (!checkEmail()) {
    event.preventDefault();
  }
  if (!checkPw()) {
    event.preventDefault();
  }

});
