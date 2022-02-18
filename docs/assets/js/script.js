// Google maps 

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 7,
    center: { lat: 11.47006207135922, lng: 78.35548061779133 },
    mapId:  "8f70b5d2bcbdcb70",
    disableDefaultUI: true,
    zoomControl: false,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    fullscreenControl: false
  });
  const image = 'https://raw.githubusercontent.com/vikash2806/vikash2806_Portfolio/bf3f90d26eb1beb6041bd51e2a18e8bb369a377e/docs/assets/image/map-marker.svg';
  const beachMarker = new google.maps.Marker({
    position: { lat: 11.47006207135922, lng: 78.35548061779133 },
    map,
    icon: image,
  });
}




// redirect timer in Thanks page
var counterElt = document.getElementById("counter");
function decreaseCounter() {
  var counter = Number(counterElt.textContent);
  if (counter > 1) {
    counterElt.textContent = counter - 1;
  } else {
    clearInterval(intervalId);
    var titre = document.getElementById("redirect");
    titre.click();
  }
}
var intervalId = setInterval(decreaseCounter, 1000);

// Submit Button audio effect
let audio = document.querySelector('#audio');

function playSuccess(){
    audio.play();
}



