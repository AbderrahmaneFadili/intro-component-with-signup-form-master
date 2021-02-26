const form = document.querySelector("form");

//fields
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

//Errors messages
const firstNameError = document.querySelector("#first-name ~ .error-message");
const lastNameError = document.querySelector("#last-name ~  .error-message");
const emailError = document.querySelector("#email ~ .error-message");
const passwordError = document.querySelector("#password ~ .error-message");

const emailExpression = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (firstName.value === "") {
    firstNameError.innerHTML = "First Name cannot be empty";
    firstName.classList.add("error");
  } else {
    firstNameError.innerHTML = "";
    firstName.classList.remove("error");
  }

  if (lastName.value === "") {
    lastNameError.innerHTML = "Last Name cannot be empty";
    lastName.classList.add("error");
  } else {
    lastNameError.innerHTML = "";
    lastName.classList.remove("error");
  }

  if (email.value === "") {
    emailError.innerHTML = "Email cannot be empty";
    email.classList.add("error");
  } else {
    emailError.innerHTML = "";
    email.classList.remove("error");
  }

  if (!emailExpression.test(email.value)) {
    emailError.innerHTML = "Looks like this is not an email";
    email.classList.add("error");
  } else {
    emailError.innerHTML = "";
    email.classList.remove("error");
  }

  if (password.value === "") {
    passwordError.innerHTML = "Password cannot be empty";
    password.classList.add("error");
  } else {
    passwordError.innerHTML = "";
    password.classList.remove("error");
  }
});
