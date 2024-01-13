const buttonlogin = document.querySelector("#register")
var user_name = document.getElementById('email')
buttonlogin.addEventListener("submit",function(e){
    e.preventDefault();
    
    const email = document.querySelector("#email")
    const pw = document.querySelector("#password")

    const data = {
        email: email.value,
        pw:pw.value
    }
    localStorage.setItem("user", JSON.stringify(data))
    localStorage.setItem("name",user_name)
    window.location.href = 'dangnhap.html'
})