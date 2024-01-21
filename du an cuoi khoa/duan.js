// variable
const login = document.querySelector("#login");
const sign = document.querySelector("#sign");
const name_user = document.getElementById("name-user");
const search = document.querySelector("#search");
const log = document.querySelector("#log_out");
const feature = document.querySelector("#feature");

// backend

document.getElementById("search-chck").addEventListener("click", function () {
  if (checkuser) {
    window.location.href = "search.html";
  } else {
    alert("you dont have account");
    window.location.href =
      "file:///C:/Users/ADMIN/OneDrive/Tài%20liệu/Vidu/html/du%20an%20cuoi%20khoa/auth/dangnhap.html";
  }
});

login.addEventListener("click", function () {
  window.location.href =
    "file:///C:/Users/ADMIN/OneDrive/Tài%20liệu/Vidu/html/du%20an%20cuoi%20khoa/auth/dangky.html";
});
sign.addEventListener("click", function () {
  window.location.href =
    "file:///C:/Users/ADMIN/OneDrive/Tài%20liệu/Vidu/html/du%20an%20cuoi%20khoa/auth/dangnhap.html";
});

login.addEventListener("click", function () {
  document.querySelector("#task-log").style.display = "none";
  // document.querySelector("#profile").style.display="block"
});

log.addEventListener("click", function () {
  alert("account has removed");
  localStorage.removeItem("user");
  document.querySelector("#music-list-id").style.display = "none";
  window.location.reload();
});

const checkuser = localStorage.getItem("user");
const dataUser = JSON.parse(checkuser);
name_user.innerHTML = dataUser.email;

if (checkuser) {
  login.style.display = "none";
  sign.style.display = "none";
  document.querySelector("#profile").style.display = "block";
  document.querySelector("#music-list-id").style.display = "block";
  document.querySelector("#music-li").style.display = "block";

  feature.style.display = "none";
} else {
  document.querySelector("#music-list-id").style.display = "none";
  document.querySelector("#music-li").style.display = "none";
  feature.style.display = "block";
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}