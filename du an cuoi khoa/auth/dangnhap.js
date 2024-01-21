const buttonlogin = document.querySelector("#login");

buttonlogin.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.querySelector("#email");
  const pw = document.querySelector("#password");

  const getdata = localStorage.getItem("user");
  const convertData = JSON.parse(getdata);
  if (email.value == convertData.email) {
    if (pw.value == convertData.pw) {
      window.location.href = "../duan.html";
    } else {
      alert("wrong");
    }
  }
});
