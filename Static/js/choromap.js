var map = L.map('map').setView([37.8, -96], 4);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
	maxZoom: 18,
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
		'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
		'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	id: 'mapbox/light-v9',
	tileSize: 512,
	zoomOffset: -1
}).addTo(map);

// Perform an API call to the Citi Bike Station Information endpoint
d3.json("../Data/acadata2.json").then(function(acadata) {
	// console.log(acadata);
  // When the first API call is complete, perform another call to the Citi Bike Station Status endpoint
  d3.json("../Data/states.json").then(function(statesloc) {
    // Loop through the stations (they're the same size and have partially matching data)
    for (var i = 0; i < acadata.length; i++) {
		var combine_data = Object.assign({}, acadata[i], statesloc[i]);
		console.log(combine_data);
		// Create a new marker with the appropriate icon and coordinates
		var newMarker = L.marker([combine_data.Latitude, combine_data.Longitude]).addTo(map);

		// Bind a popup to the marker that will  display on click. This will be rendered as HTML
		newMarker.bindPopup(combine_data.State);
    }
  });
});

// // control that shows state info on hover
var info = L.control();

info.onAdd = function (map) {
	this._div = L.DomUtil.create('div', 'info');
	this.update();
	return this._div;
};

info.update = function (props) {
	this._div.innerHTML = '<h4>US Population Density</h4>' +  (props ?
		'<b>' + props.name + '</b><br />' + props.density + ' people / mi<sup>2</sup>'
		: 'Hover over a state');
};

info.addTo(map);


// // get color depending on population density value
function getColor(d) {
	return d > 1000 ? '#800026' :
			d > 500  ? '#BD0026' :
			d > 200  ? '#E31A1C' :
			d > 100  ? '#FC4E2A' :
			d > 50   ? '#FD8D3C' :
			d > 20   ? '#FEB24C' :
			d > 10   ? '#FED976' :
						'#FFEDA0';
}

function style(feature) {
	return {
		weight: 2,
		opacity: 1,
		color: 'white',
		dashArray: '3',
		fillOpacity: 0.7,
		fillColor: getColor(feature.properties.density)
	};
}

function highlightFeature(e) {
	var layer = e.target;

	layer.setStyle({
		weight: 5,
		color: '#666',
		dashArray: '',
		fillOpacity: 0.7
	});

	if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
		layer.bringToFront();
	}

	info.update(layer.feature.properties);
}

var geojson;

function resetHighlight(e) {
	geojson.resetStyle(e.target);
	info.update();
}

function zoomToFeature(e) {
	map.fitBounds(e.target.getBounds());
}

function onEachFeature(feature, layer) {
	layer.on({
		mouseover: highlightFeature,
		mouseout: resetHighlight,
		click: zoomToFeature
	});
}

geojson = L.geoJson(statesData, {
	onEachFeature: onEachFeature
}).addTo(map);
