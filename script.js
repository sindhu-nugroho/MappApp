// Initialize the map and set its view to a specific location and zoom level
var map = L.map('map').setView([51.505, -0.09], 13);

// Add a tile layer to the map (OpenStreetMap tiles)
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add a marker to the map at the specified coordinates
var marker = L.marker([51.5, -0.09]).addTo(map);

// Bind a popup to the marker with a custom message
marker.bindPopup("<b>Hello everyone!</b><br>I am here.").openPopup();
