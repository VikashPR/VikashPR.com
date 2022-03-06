AOS.init();
// // Google maps
// function initMap() {
//   const map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 7,
//     center: { lat: 11.47006207135922, lng: 78.35548061779133 },
//     mapId:  "8f70b5d2bcbdcb70",
//     disableDefaultUI: true,
//     zoomControl: false,
//     mapTypeControl: false,
//     scaleControl: false,
//     streetViewControl: false,
//     rotateControl: false,
//     fullscreenControl: false
//   });
//   const image = 'https://raw.githubusercontent.com/vikash2806/vikash2806_Portfolio/bf3f90d26eb1beb6041bd51e2a18e8bb369a377e/docs/assets/image/map-marker.svg';
//   const beachMarker = new google.maps.Marker({
//     position: { lat: 11.47006207135922, lng: 78.35548061779133 },
//     map,
//     icon: image,
//   });
// }

// redirect timer in Thanks page
// var counterElt = document.getElementById('counter');

// function decreaseCounter() {
//   var counter = Number(counterElt.textContent);
//   if (counter > 1) {
//     counterElt.textContent = counter - 1;
//   } else {
//     clearInterval(intervalId);
//     var titre = document.getElementById('redirect');
//     titre.click();
//   }
// }
// var intervalId = setInterval(decreaseCounter, 1000);

// Submit Button audio effect
let audioSuccess = document.querySelector('#audioSuccess');
let audioError = document.querySelector('#audioError');
let form = document.querySelector('#form');
let name = document.querySelector('#name');
let email = document.querySelector('#email');
let message = document.querySelector('#message');
let submitBtn = document.querySelector('#submit-btn');
const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
submitBtn.addEventListener('click', function () {
  let nameValue = name.value;
  let emailValue = email.value;
  let messageValue = message.value;
  if (nameValue == '' || emailValue == '' || messageValue == '') {
    audioError.play();
  } else if (!emailValue.match(mailFormat)) {
    audioError.play();
  }
});

form.addEventListener('submit', function () {
  audioSuccess.play();
});

// Certificate preview
const openModalButton1 = document.querySelector('[data-modal-target1]');
const openModalButton2 = document.querySelector('[data-modal-target2]');
const openModalButton3 = document.querySelector('[data-modal-target3]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openModalButton1.addEventListener('click', () => {
  const modal1 = document.querySelector('#modal1');
  openModal(modal1);
});
openModalButton2.addEventListener('click', () => {
  const modal2 = document.querySelector('#modal2');
  openModal(modal2);
});
openModalButton3.addEventListener('click', () => {
  const modal3 = document.querySelector('#modal3');
  openModal(modal3);
});

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active');
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}

// // Loading messages.
// function write(obj, sentence, i, cb) {
//   if (i != sentence.length) {
//     setTimeout(function () {
//       i++;
//       obj.innerHTML =
//         sentence.substr(0, i + 1) + ' <em aria-hidden="true"></em>';
//       write(obj, sentence, i, cb);
//     }, 50);
//   } else {
//     cb();
//   }
// }

// function erase(obj, cb, i) {
//   var sentence = obj.innerText;
//   if (sentence.length != 0) {
//     setTimeout(function () {
//       sentence = sentence.substr(0, sentence.length - 1);
//       obj.innerText = sentence;
//       erase(obj, cb);
//     }, 18 / (i * (i / 10000000)));
//   } else {
//     obj.innerText = ' ';
//     cb();
//   }
// }

// var typeline = document.querySelector('#typeline');

// function writeErase(obj, sentence, time, cb) {
//   write(obj, sentence, 0, function () {
//     setTimeout(function () {
//       erase(obj, cb);
//     }, time);
//   });
// }

// var sentences = [
//   'Loading loader...',
//   'Building a wall...',
//   'Downloading Downloader...',
//   'Debugging Debugger...',
//   'Updating Updater...',
//   'Installing Installer...',
//   'Proving P=NP...',
//   'Dividing by zero...',
//   'Cleaning up...',
//   'You seem like a nice person...',
//   "You're a nice person...",
//   "Let's hope it's worth the wait",
//   'If I’m not back in five minutes, just wait longer.',
// ];
// var counter = 0;

// function loop() {
//   var sentence = sentences[counter % sentences.length];
//   writeErase(typeline, sentence, 1500, loop);
//   counter++;
// }

// loop();

// // Pre loading code

// document.onreadystatechange = function () {
//   if (document.readyState !== 'complete') {
//     document.querySelector('body').style.visibility = 'hidden';
//     document.querySelector('.loading-wrapper').style.visibility = 'visible';
//   } else {
//     document.querySelector('.loading-wrapper').style.display = 'none';
//     document.querySelector('body').style.visibility = 'visible';
//   }
// };
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

// Scroll to top
var scrollToTopBtn = document.querySelector(".scrollToTopBtn");
var rootElement = document.documentElement;
var scrollDown = document.querySelector(".scroll-down-button");
function handleScroll() {
  // Do something on scroll
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  if (rootElement.scrollTop / scrollTotal > 0.95) {
    // Show button
    scrollToTopBtn.classList.add("showBtn");
    // Hiding Scroll Down
    scrollDown.classList.add("hide-scroll-down");
  } else {
    // Hide button
    scrollToTopBtn.classList.remove("showBtn");
    scrollDown.classList.remove("hide-scroll-down");

  }
}

function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);
document.addEventListener("scroll", handleScroll);