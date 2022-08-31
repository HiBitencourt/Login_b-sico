var user = document.getElementById('user');
var password = document.getElementById('password');

user.addEventListener('focus',()=>{
    user.style.borderColor = '#4B0082';
})
user.addEventListener('blur',()=>{
    user.style.borderColor = '#4B0082';
})
password.addEventListener('focus',()=>{
    password.style.borderColor = '#4B0082';
})
password.addEventListener('blur',()=>{
    password.style.borderColor = '#4B0082';
})