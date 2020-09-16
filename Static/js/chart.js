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
      var trace1 = {
        x: [stateData.ABB],
        y: [stateData.Births_2010, stateData.Births_2015],
        type: "bar"
      };
      
      var data = [trace1];
      
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


 
  







