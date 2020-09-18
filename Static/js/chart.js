function buildPie (sample) {
  var acaData = "../../Data/acadata.json"

  d3.json(acaData).then(function (data) {
      stateData = {}
      for (const [key, value] of Object.entries(data)) {
          if (value[sample]){
          stateData[key] = value[sample]
          }
      }
      //Pie Chart
      var data = [{
        values: [stateData.Death_Per_1000_2010, stateData.Death_Per_1000_2010, stateData.Deaths_2010],
         // labels: ['Residential', 'Non-Residential', 'Utility'],
        type: 'pie'
      }];
      
      var layout = {
        height: 400,
        width: 500
      };

      Plotly.newPlot('pie', data, layout);
  });
}
  
function buildPlots(sample) {

  var acaData = "../../Data/acadata.json"

  d3.json(acaData).then(function (data) {
      stateData = {}
      for (const [key, value] of Object.entries(data)) {
          if (value[sample]){
          stateData[key] = value[sample]
          }
      }
      console.log(stateData)
      
      //Bar Chart
        // var setPlots = stateData;
        // var filteredsetPlots = setPlots.filter(plotUnit => plotUnit.ABB == sample)[0];
        // console.log(filteredsetPlots)

      //   var ABB2 = stateData.ABB;
      //   var valBirth = stateData.Births_2010;
      //   console.log(valBirth);
     
      // //slice for top ten of each
      //   var ABB2_10 = ABB2.slice(0, 10);
      //   console.log(ABB2_10);
      //   var valBirth_10 = valBirth.slice(0, 10);
      //   console.log(valBirth_10);
      
      //  var trace = {
      //   type: "bar",
      //   y: valBirth_10.reverse(),
      //   x: ABB2_10.map(ABB2_10 => `OTU ${ABB2_10}`).reverse(),
      //   // text: otu_labels_10.reverse(),
      //   marker: {
      //     color: "rgb(42, 7, 143)",
      //   },
      //   orientation: "h"
      // };

      var trace = {
        x: [stateData.ABB],
        y: [stateData.Births_2010, stateData.Births_2015],
        type: "bar"
      };
      
      var data = [trace];
      
      var layout = {
        title: "'Bar' Chart"
      };
      
      Plotly.newPlot("bar", data, layout);

  });
}
  
  //function to initiate plots
function init() {
  var acaData = "../../Data/acadata.json"
  
  d3.json(acaData).then(function (data) {
  
    var usState = d3.select("#selDataset")
  
    var stateABB = data.ABB
    // console.log(stateABB);
  
    for (const [key, value] of Object.entries(stateABB)) {
      usState.append("option")
        .text(value)
        .property("value", key)
    }
  })

  buildPlots(0);
  buildPie(0);

}

function optionChanged(newSample) {
  //     // Fetch new data each time a new sample is selected
  buildPlots(newSample);
  buildPie(newSample);
}

// //   // Initialize the dashboard
init();


 
  







