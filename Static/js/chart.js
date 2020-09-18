function buildBar(sample) {
  var acaData = "http://localhost:5000/api/acadataCharts"

  d3.json(acaData).then(function (data) {
    stateData = {}
    for (const [key, value] of Object.entries(data)) {
      if (value[sample]) {
        stateData[key] = value[sample]
      }
    }
    //Bar Chart - Uninsured rate
    var trace = {
      x: ["Year 2010", "Year 2015"],
      y: [stateData.Uninsured_Rate_2010, stateData.Uninsured_Rate_2015],
      type: "bar",
      textposition: 'auto',
      width: [0.3, 0.3],
      marker: {
        color: ['rgb(142,124,195)', 'rgb(26, 118, 255)'],
        opacity: 0.6,
        line: {
          color: 'rgb(8,48,107)',
          width: 2
        }
      }
    };

    var data = [trace];

    var layout = {
      title: "<b>Uninsured Rate (%): 2010 vs 2015</b>",
      yaxis: {
        zeroline: true,
        gridwidth: 2,
        title: "Uninsured Rate %",
        titlefont: {
          size: 16,
          color: 'rgb(107, 107, 107)'
          }
      },
      bargap: 2,
      font: {
        family: "Releway, sans-serif"
      },
      width: 1000,
      height: 400
    };

    Plotly.newPlot("bar", data, layout);

  });
}

function buildBar1(sample) {

  var acaData = "http://localhost:5000/api/acadataCharts"

  d3.json(acaData).then(function (data) {
    stateData = {}
    for (const [key, value] of Object.entries(data)) {
      if (value[sample]) {
        stateData[key] = value[sample]
      }
    }
    // console.log(stateData)

    var trace = {
      x: ["Year 2010", "Year 2015"],
      y: [stateData.Deaths_2010, stateData.Deaths_2015],
      type: "bar",
      textposition: 'auto',
      width: [0.3, 0.3],
      marker: {
        color: ['rgb(49,130,189)', 'rgb(204,204,204)'],
        opacity: 0.6,
        line: {
          color: 'rgb(8,48,107)',
          width: 2
        }
      }
    };

    var data = [trace];

    var layout = {
      title: "<b>Deaths: 2010 vs 2015</b>",
      yaxis: {
        zeroline: true,
        gridwidth: 2,
        title: "Deaths",
        titlefront: {
          size: 16,
          color: 'rgba(245,246,249,1)'
        }
      },
      bargap: 2,
      font: {
        family: "Releway, sans-serif"
      },
      width: 1000,
      height: 400
    };

    Plotly.newPlot("bar1", data, layout);

  });
}

//function to initiate plots
function init() {
  var acaData = "http://localhost:5000/api/acadataCharts"

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
