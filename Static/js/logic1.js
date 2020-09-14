//Fetch the JSON data and console log it
function getacaData(id) {
    var aca = ("../../Data/acadata.json")
      console.log(aca)
  //Use d3 to select the panel with id for metadata
    d3.json(aca).then(function(data){
      var aca_array = data.aca
      console.log(aca_array);
      console.log(id);
  // Filter the metadata and build the demo panel using id
      var acaInfantdataFiltered = aca_array.filter(infantdata => infantdata.id.toString() === id)[0];
  //     Clear existing metadata
    d3.select("#aca-data").html("");
  // Append metadata 
        Object.entries(acaInfantdataFiltered).forEach(([key, value]) => {
          d3.select("#aca-data")
            .append("p").text(`${key}: ${value}`);
     });
});
 }
function createPlots(id) {
    var aca = ("../../Data/acadata.json")
        d3.json(aca).then(function(data) {
            var plotsacaData = data.acaData;
            console.log(plotsacaData)
            // Filter the data to make plots
            var plotsdataFiltered = plotsacaData.filter(chart => chart.id.toString( ) === id)[0]; 
              console.log(plotsdataFiltered)
  
            var births_2010 = plotsdataFiltered.births_2010;
            var deaths_2010 = plotsdataFiltered.deaths_2010;
            var states_names = plotsdataFiltered.states_names;
           
          //Get the top ten data for each category with slice() and reverse ids and 
          // sample_values and labels.  
          //Getting the top 10 
            var births_2010top = births_2010.slice(0, 10).reverse();
            var deaths_2010top = deaths_2010.slice(0, 10).reverse();
            var states_namestop = states_names.slice(0, 10).reverse();
             
            //Create a bar chart 
            var trace = {
                  type: "bar",
                  x: states_namestop,
                  y: births_2010top.map(states_names => `Births ${states_names}`),
                    marker: { 
                    color: "teal",
                  },
                  orientation: "h",
                }
              var data = [trace];
              var layout = { title: "Birth 2010",
                            yaxis:{
                          tickmode:"linear",
                    }
              };
                Plotly.newPlot("bar", data, layout);

               //Create a bar chart 
            var trace1 = {
                type: "bar",
                x: states_namestop,
                y: deaths_2010top.map(states_names => `Deaths ${states_names}`),
                   marker: { 
                  color: "blue",
                },
                orientation: "h",
              }
            var data1 = [trace1];
            var layout1 = { title: "Death 2010",
                          yaxis:{
                        tickmode:"linear",
                  }
            };
              Plotly.newPlot("bar", data1, layout1);
              // Create a pie chart
            var trace2 = {
                values: states_namestop,
                labels: states_names,
                hovertext:uninsured,
                type: "pie",
            };        
            var data2 = [trace2];
            var layout2 = { title: "Uninsured",
                 height: 800,
                 width: 500
                };
            Plotly.newPlot("pie", data2, layout2);
              });    
          };
             //function to initiate page
function init(){
    var aca = ("../../Data/acadata.json")
    d3.json(aca).then(function(data) {
       selOptions = d3.select("#selDataset");
        statesNames = data.states
     // console.log(statesNames)
           statesNames.forEach(statesNames=> {selOptions.append("option")
             .text(statesNames)
             .property("value", statesNames);
           })
     // Use the first sample from the list to build the initial plots on page
         const showPlots = statesNames[0];
         createPlots(showPlots); 
         getMetaData(showPlots)
    
       })   
 } 
 //Get the functions to display the data and the plots to the page
 function optionChanged(id) {
   createPlots(id);
   getMetaData(id);
  
 };
 
 init();
 