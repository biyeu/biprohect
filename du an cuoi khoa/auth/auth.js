// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBq1JVa0KhHtk-PjnOmjMVV1ABqwEcBfYo",
  authDomain: "sanphamcuoikhoaweb.firebaseapp.com",
  projectId: "sanphamcuoikhoaweb",
  storageBucket: "sanphamcuoikhoaweb.appspot.com",
  messagingSenderId: "626614957269",
  appId: "1:626614957269:web:73714183185535c2c59e5c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
var database = firebase.database();

//Google singin provider
var ggProvider = new firebase.auth.GoogleAuthProvider();
//Facebook singin provider
var fbProvider = new firebase.auth.FacebookAuthProvider();
//Login in variables

const buttonlogin = document.querySelector("#login");
const auth = getAuth();

buttonlogin.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.querySelector("#email");
  const pw = document.querySelector("#password");

  createUserWithEmailAndPassword(auth, email, pw)
    .then((userCredential) => {
      console.log(11111111);
      // Signed up
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
});
