var input = "Alabama"  //need to change if more than one state

d3.json(`/demographics/${input}`).then(function(data) {
  var xValues = data[0].State 
  var yValues = data[0]["Deaths (2010)"] 
});


// var acaData = "../../Data/acadata.json"

// d3.json(acaData).then(function (data) {
//   // console.log(data);

//   var xValues = Object.entries(data["State"]).map(
//     test => test[1]
//   );

//   var yValues = Object.entries(data["Deaths (2010)"]).map(
//     test => test[1]
//   );


  //
    // var setPlots = data["Births (2010)"];
    // console.log(setPlots);

  //Create Chart
  // var xValues = data["State"];
  // console.log(xValues);

  // var yValues = data["Deaths (2010)"];
  // // var yValues2 = data["Deaths (2015)"];
  console.log(yValues);
  // console.log(yValues2);

  var trace1 = {
    x: xValues,
    y: yValues,
    textposition: 'auto',
    type: "bar"
    //   orientation: "h"
  };

  // var trace2 = {
  //   x: xValues,
  //   y: yValues2,
  //   textposition: 'auto',
  //   type: "bar"
  //   // orientation: "h"
  // };

  var data = [trace1];

  var layout = {
    title: "Deaths 2010 vs 2015",
    // yaxis: [25, 2500],
    width: 500,
    height: 400
  };

  Plotly.newPlot("plot", data, layout);

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

// //Grab values from the data json object to build plots
// function buildPlots(sample) {

//   // var url = "../../Data/acadata.json";

//   d3.json("../../Data/acadata.json").then(function (sampleData) {

//     console.log(sampleData);

//     // //save arrays
//     // var setPlots = sampleData.acadata;
//     // var filteredsetPlots = setPlots.filter(plotUnit => plotUnit.State == sample)[0];
//     // console.log(filteredsetPlots)

// //2010
//     var birth_values = filteredsetPlots["Births (2010)"];
//     var state = filteredsetPlots["State"];
 
//     //slice for top ten of each
//     var birth_values_10 = birth_values.slice(0, 10);
//     var state_10 = state.slice(0, 10);

// //     //Create the Bar Plot 
//     var trace = {
//       type: "bar",
//       x: birth_values_10.reverse(),
//       y: state_10,
// //       text: otu_labels_10.reverse(),
//       marker: {
//         color: "rgb(42, 7, 143)",
//       },
//       orientation: "h"
//     };

    // var data = [trace];

    // var layout = {
    //   title: "Bar Chart: Top 10 OTU_Samples",
    //   // titlefont: {
    //   //   size: 18
    //   //   // color: 'rgb(230, 59, 21)'
    //   // }
    //   showlegend: false,
    //   xaxis: { trickangle: -45 }
    //   yaxis: {
    //     zeroline: false,
    //     gridwidth: 2
    //   },
    //   bargap: 2,
    //   width: 500,
    //   height: 400
    // }

    // Plotly.newPlot("plot", data, layout);

// })};




