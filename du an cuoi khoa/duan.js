// variable
const login = document.querySelector('#login')
const sign = document.querySelector('#sign')
const name_user = document.getElementById('name-user')
const search = document.querySelector('#search')
const log = document.querySelector('#log_out')
const feature = document.querySelector('#feature')


// backend

document.getElementById('search-chck').addEventListener("click",function(){
    if (checkuser){
        window.location.href = 'search.html'
    } else{
        alert('you dont have account')
        window.location.href = 'dangnhap.html'
    }
})


login.addEventListener("click", function(){
    window.location.href = 'dangky.html'
})
sign.addEventListener("click", function(){
    window.location.href = 'dangnhap.html'
})


login.addEventListener("click",function(){
    document.querySelector("#task-log").style.display="none"
    // document.querySelector("#profile").style.display="block"
})

log.addEventListener("click", function(){
    alert('account has removed')
    localStorage.removeItem("user")
    document.querySelector("#music-list-id").style.display = "none"
    window.location.reload()
})


const checkuser = localStorage.getItem('user');
const dataUser = JSON.parse(checkuser)
name_user.innerHTML = dataUser.email

if (checkuser) {
    login.style.display = "none"
    sign.style.display = "none"
    document.querySelector("#profile").style.display = "block"
    document.querySelector("#music-list-id").style.display = "block"
    feature.style.display="none"
}else{
    document.querySelector("#music-list-id").style.display = "none"
    feature.style.display="block"
}

