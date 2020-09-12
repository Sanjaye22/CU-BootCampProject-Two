d3.csv("../../Data/FinalCleanedData.csv", function(acaData) {  
  console.log(acaData);
});

// Create map
var myMap = L.map("map").setView([37.09, -95.71], 5);

// Adding a tile layer (the background map image) to our map
// We use the addTo method to add objects to our map
var light = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox/light-v10",
  // tileSize: 512,
  // zoomOffset: -1,
  accessToken: API_KEY
}).addTo(myMap);







