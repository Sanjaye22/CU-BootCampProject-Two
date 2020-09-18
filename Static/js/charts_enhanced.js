function buildBar (sample) {
    var acaData = "../../Data/acadata.json"

    d3.json(acaData).then(function (data) {
        stateData = {}
        for (const [key, value] of Object.entries(data)) {
            if (value[sample]){
            stateData[key] = value[sample]
            }
        }

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
    buildBar(0);

}

function optionChanged(newSample) {
    //     // Fetch new data each time a new sample is selected
    buildPlots(newSample);
    buildBar(newSample);
}

// //   // Initialize the dashboard
init();


   
    