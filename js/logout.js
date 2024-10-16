const confirm = document.getElementById("confirm");
const goBack = document.getElementById("goBack");

confirm.addEventListener("click", function (e) {
  e.preventDefault();
  localStorage.clear();
  window.location = "index.html";
});
goBack.addEventListener("click", function (e) {
  e.preventDefault();
  history.go(-1);
});
