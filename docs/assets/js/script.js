// Submit Button audio effect
let audio = document.querySelector('#audio');

function playSuccess(){
    audio.play();
}

// Google maps 
// This example adds a marker to indicate the position of Bondi Beach in Sydney,
// Australia.
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: { lat: 11.47006207135922, lng: 78.35548061779133 },
    mapId:  "8f70b5d2bcbdcb70"
  });
  const image =
   'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
  const beachMarker = new google.maps.Marker({
    position: { lat: 11.47006207135922, lng: 78.35548061779133 },
    map,
    icon: image,
  });
}
// // redirect timer in Thanks page
// var counterElt = document.getElementById("counter");
// function decreaseCounter() {
//   var counter = Number(counterElt.textContent);
//   if (counter > 1) {
//     counterElt.textContent = counter - 1;
//   } else {
//     clearInterval(intervalId);
//     var titre = document.getElementById("redirect");
//     titre.click();
//   }
// }
// var intervalId = setInterval(decreaseCounter, 1000);

