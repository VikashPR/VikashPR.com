const menuIcon = document.querySelector('#burger');
const navBar = document.querySelector('#menu');


menuIcon.addEventListener('click',()=>{
    navBar.classList.toggle("menu-active")
})
