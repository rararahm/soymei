function initMap() {
  const address = { lat: 14.6563, lng: 121.0690 }; // Caloocan City approximate location
  const map = new google.maps.Map(document.getElementById("map"), {
    center: address,
    zoom: 15,
    styles: [
      {
        featureType: "all",
        elementType: "geometry",
        stylers: [{ color: "#e8ecef" }]
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{ color: "#4b5c6b" }]
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#ffffff" }]
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#c9e3f0" }]
      },
      {
        elementType: "labels.text.fill",
        stylers: [{ color: "#476b82" }]
      },
      {
        elementType: "labels.text.stroke",
        stylers: [{ color: "#f8f9fa" }]
      }
    ],
    disableDefaultUI: true,
    zoomControl: true,
  });

  const marker = new google.maps.Marker({
    position: address,
    map,
    title: "Soy Mei Advantage Multi Sales, Inc.",
    animation: google.maps.Animation.DROP,
  });

  const infoWindow = new google.maps.InfoWindow({
    content: `<div style="font-family: Inter, sans-serif; line-height: 1.5; max-width:260px;">
      <strong>Soy Mei Advantage Multi Sales, Inc.</strong><br>
      366 2nd St. Bet. 9th & 10th Ave.<br>
      Caloocan City
    </div>`,
  });

  marker.addListener("click", () => {
    infoWindow.open({ map, anchor: marker });
  });
}

