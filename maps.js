document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("map")) {
      initMap();
    }
  });
  
  function initMap() {
    const location = [37.325835, -122.396516];
    const map = L.map("map").setView(location, 13);
  
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map);
  
    L.marker(location).addTo(map);
  }
  