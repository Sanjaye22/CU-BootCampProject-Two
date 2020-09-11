
d3.csv("../../Data/FinalCleanedData.csv", function(ACAData) {  
    console.log(ACAData);
  // Once we get a response, send the data.features object to the createMap function
//   createMap(data.features);
});


// Create map
  var myMap = L.map("map").setView([37.09, -95.71], 5);
  
  // Adding a tile layer (the background map image) to our map
  // We use the addTo method to add objects to our map
  var light = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/light-v10,
    accessToken: API_KEY
  }).addTo(myMap);
  