"use strict";

// Hamburger-Menu 
let menuBtn = document.querySelector('.toggle-menu')
let content =document.querySelector(".content");
let flag = 1 ;

if(menuBtn){
menuBtn.addEventListener("click" ,(e) => {
    e.preventDefault();

    if(flag === 1){
    if(content){
    content.style.display = "block"
    flag = 0;
     }
    }
    else{
    content.style.display = "none"
    flag = 1;
    }
})
}


if(document.title === "Contact"){
// importing maplocation
const API_TOKEN = config.Location_Key;

const [lat, lon] = [40.7128, -74.0060];

// Create map element
const mapSection = document.querySelector('.map');

// Create img 
const mapImage = document.createElement('img');

const mapUrl = `https://maps.locationiq.com/v3/staticmap?key=${API_TOKEN}&center=${lat},${lon}&zoom=12&size=800x400&format=png&maptype=streets&markers=icon:large-red-cutout|${lat},${lon}`;

mapImage.src = mapUrl;
mapImage.style.position ="relative";
mapImage.style.width = "100%"
mapImage.style.height = "100%"

mapImage.alt = "Map showing location";
mapSection.appendChild(mapImage);

mapImage.onerror = function() {
    alert("Something went wrong. Please try again later.");
    console.log("ERROR OCCURRED: Failed to load map image");
};
}



