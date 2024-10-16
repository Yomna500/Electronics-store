const login = document.getElementById("login");
const logout = document.getElementById("logout");
const getemail = localStorage.getItem("email");

if (getemail) {
  logout.style.display = "block";
  login.style.display = "none";
} else {
  login.style.display = "block";
  logout.style.display = "none";
}
function goToCart() {
  if (getemail) window.location.href = "cart.html";
  else window.location.href = "login.html";
}
function goToLogin() {
  window.location.href = "login.html";
}
function goToLogout() {
  window.location.href = "logout.html";
}
function goToHomePage() {
  window.location.href = "index.html";
}
function goToFav() {
  if (getemail) window.location.href = "favorite.html";
  else window.location.href = "login.html";
}
