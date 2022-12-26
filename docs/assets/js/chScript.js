// Scroll Sticky nav
const body = document.body;
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= 0) {
    body.classList.remove('scroll-up');
    return;
  }

  if (currentScroll > lastScroll && !body.classList.contains('scroll-down')) {
    body.classList.remove('scroll-up');
    body.classList.add('scroll-down');
  } else if (
    currentScroll < lastScroll &&
    body.classList.contains('scroll-down')
  ) {
    body.classList.remove('scroll-down');
    body.classList.add('scroll-up');
  }
  lastScroll = currentScroll;
});

// Nav active
var header = document.querySelector('.nav-links');
var links = header.querySelectorAll('.nav-link');
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function () {
    var current = document.getElementsByClassName('active');
    current[0].className = current[0].className.replace(' active', '');
    this.className += ' active';
  });
}

// mobile nav bar
const nav = document.querySelector("#nav-links");
const menu =  document.querySelector(".menu");
const menuFont = document.querySelector("#menuFont");

menu.addEventListener('click', () => {
  const visibility = nav.getAttribute('data-visible');
  if(visibility === 'false'){
    nav.setAttribute('data-visible', 'true');
    nav.setAttribute('aria-expanded', 'true');
    menuFont.classList.add('icon-xmark');
  }
  else if(visibility === 'true'){
    nav.setAttribute('aria-expanded', 'false');
    nav.setAttribute('data-visible', 'false');
    menuFont.classList.remove('icon-xmark');
  }
})
