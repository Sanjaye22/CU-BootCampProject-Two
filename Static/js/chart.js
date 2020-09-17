function buildBar (sample) {
  var acaData = "../../Data/acadata.json"

  d3.json(acaData).then(function (data) {
      stateData = {}
      for (const [key, value] of Object.entries(data)) {
          if (value[sample]){
          stateData[key] = value[sample]
          }
      }
     //Bar Chart
      var trace = {
        x: ["Year 2010", "Year 2015"],
        y: [stateData.Uninsured_Rate_2010, stateData.Uninsured_Rate_2015],
        type: "bar",
        textposition: 'auto',
        width: [0.3, 0.3],
        marker: {
          color: 'rgb(158,202,225)',
          opacity: 0.6,
          line: {
            color: 'rgb(8,48,107)',
            width: 1.5
          }
        }
      };
      
      var data = [trace];
      
      var layout = {
        title: "Uninsured Rate (%): 2010 vs 2015",
        yaxis: {type:"log"},
        font: {
          family: "Releway, sans-serif"
        }
      };
      
      Plotly.newPlot("bar", data, layout);

  });
}
  
function buildBar1(sample) {

  var acaData = "../../Data/acadata.json"

  d3.json(acaData).then(function (data) {
      stateData = {}
      for (const [key, value] of Object.entries(data)) {
          if (value[sample]){
          stateData[key] = value[sample]
          }
      }
      console.log(stateData)
      
      var trace = {
        x: ["Year 2010", "Year 2015"],
        y: [stateData.Deaths_2010, stateData.Deaths_2015],
        type: "bar"
      };
      
      var data = [trace];
      
      var layout = {
        title: "Deaths: 2010 vs 2015",
        yaxis: {type:"log"}
      };
      
      Plotly.newPlot("bar1", data, layout);

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

  buildBar(0);
  buildBar1(0);

}

function optionChanged(newSample) {
  //     // Fetch new data each time a new sample is selected
  buildBar(newSample);
  buildBar1(newSample);
}

// //   // Initialize the dashboard
init();


 
  







