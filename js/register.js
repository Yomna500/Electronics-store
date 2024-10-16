const email = document.getElementById("email");
const password = document.getElementById("password");
const button = document.getElementById("button");
const user = document.getElementById("user");
const emailError = document.getElementById("emailError");
const passError = document.getElementById("passError");
const userError = document.getElementById("userError");

button.addEventListener("click", function (e) {
  e.preventDefault();
  if (email.value == "") {
    emailError.innerHTML = `Please Enter your E-mail`;
  } else if (password.value == "") {
    passError.innerHTML = `Please Enter your password`;
  } else if (user.value == "") {
    passError.innerHTML = `Please Enter your username`;
  } else {
    localStorage.setItem("email", email.value);
    localStorage.setItem("user", user.value);
    localStorage.setItem("password", password.value);

    setTimeout(() => {
      window.location = "login.html";
    }, 5);
  }
});
