const login = document.getElementById("login")
const signup = document.getElementById("signup")
const thankyou = document.getElementById("thankyou")

login.onclick =()=>{
    login.style.display='none';
    signup.style.display='none';
    thankyou.style.display='block';
}
signup.onclick =()=>{
    login.style.display='none';
    signup.style.display='none';
    thankyou.style.display='block'
}