const email = document.getElementById("email");
const password = document.getElementById("password");
const button = document.getElementById("button");
const emailError = document.getElementById("emailError");
const passError = document.getElementById("passError");

const getEmail = localStorage.getItem("email");
const getPassword = localStorage.getItem("password");

button.addEventListener("click", function (e) {
  e.preventDefault();
  if (email.value == "") {
    emailError.innerHTML = `Please Enter your E-mail`;
  } else if (password.value == "") {
    passError.innerHTML = `Please Enter your password`;
  } else {
    if (
      getEmail &&
      getEmail.trim() == email.value.trim() &&
      getPassword &&
      getPassword.trim() == password.value
    ) {
      setTimeout(() => {
        window.location = "index.html";
      }, 5);
    } else {
      passError.innerHTML = `Wrong E-mail or password`;
    }
  }
});
