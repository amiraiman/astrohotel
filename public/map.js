// coorinates
const coords = [38.898, -77.045];

// Create map centered to location
const map = L.map("map").setView(coords, 16);
L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      "pk.eyJ1IjoiYS1haW1hbiIsImEiOiJja3p4azVlZmkwMmI3Mm9wN3I1bjR2YmZlIn0.B2gO9JUHsznfa3jKgz7USQ",
  },
).addTo(map);

// Add marker to coords
const mapPointer = L.marker(coords).addTo(map);

// Add popup on marker
mapPointer.bindPopup("We are here!").openPopup();
