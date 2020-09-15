// var input = "Alabama"  //need to change if more than one state

// d3.json(`/demographics/${input}`).then(function(data) {
//   var xValues = data[0].State 
//   var yValues = data[0].Deaths_Per_1000_2010
// //   var yValues1 = data[0].Deaths_2015 
// //   var yValues2 = data[0].births_2010 
// //   var yValues2 = data[0].births_2010 
// });

//==========================================


var acaData = "../../Data/acadata.json"

d3.json(acaData).then(function (data) {
  console.log(data)
  var newacaData = Object.entries(data);
  console.log(newacaData)


  var filteredData = newacaData.filter(dataUnit => dataUnit[0] == "State")[0];
  console.log(filteredData)

  var xValues = filteredData["State"];
  console.log(xValues);

  var yValues = filteredData["Death_Per_1000_2010"];
  console.log(yValues);


});




// function builddata(sample) {

// var acaData = "../../Data/acadata.json"

// d3.json(acaData).then(function (data) {
  
//   Object.keys(data).forEach(key => console.log(key));
//   // console.log(data);

//   // var filteredData = acaData.filter(dataUnit => acaDataUnit.State == State)[0];
//   //   console.log(filteredData);

//   // //     Clear existing metadata
//   // d3.select("#sample-metadata").html("");

//   // // Add a line for each metadata pair
//   // Object.entries(filteredData).forEach(([key, value]) => {
//   //   d3.select("#sample-metadata")
//   //     //append a paragraph tag
//   //     .append("p").text(`${key}: ${value}`);

//     // });
//   })
// }


// //=============convert to array===========
// //   var xValues = Object.entries(data.State).map(
// //     test => test[1]
// //   );
  
// //   var yValues = Object.entries(data.Death_Per_1000_2010).map(
// //     test => test[1]
// //   );

// // var yValues2 = Object.entries(data.Death_Per_1000_2015).map(
// //     test => test[1]
// //   );

// //================================================================================
// //Grab values from the data json object to build plots
// function buildPlots(sample) {
//     var acaData = "../../Data/acadata.json"
//     d3.json(url).then(function (data) {
  
//       //save arrays
//       var setPlots = data[0];
//       console.log(setPlots)
//       var filteredsetPlots = setPlots.filter(plotUnit => plotUnit.State == State)[0];
//       console.log(filteredsetPlots)
  
//       var state = filteredsetPlots.State;
//       var sample_values = filteredsetPlots.Death_Per_1000_2010;
//     //   var otu_labels = filteredsetPlots.otu_labels;
   
//       //slice for top ten of each
//       var state_10 = state.slice(0, 10);
//       var sample_values_10 = sample_values.slice(0, 10);
//     //   var otu_labels_10 = otu_labels.slice(0, 10);

//   var trace1 = {
//     x: state,
//     y: sample_values_10,
//     textposition: 'auto',
//     type: "bar"
//     //   orientation: "h"
//   };

// //   var trace2 = {
// //     x: xValues,
// //     y: yValues2,
// //     textposition: 'auto',
// //     type: "bar"
// //     // orientation: "h"
// //   };

//   var data = [trace1, trace2];

//   var layout = {
//     title: "Deaths_Per_1000 - 2010 vs 2015",
//     // yaxis: [25, 2500],
//     width: 1000,
//     height: 1000
//   };

//   Plotly.newPlot("bar", data, layout);


// })
// }



