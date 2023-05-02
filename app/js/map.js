function initMap() {
  
  const iconBase = location.host === "arstanbek353.github.io" ?
  "https://arstanbek353.github.io/icapia/dist/images/dist/" : 
  location.origin + '/images/dist/';
  // contact map

  const contactNode = document.getElementById("map-contact")
  const uluru = {lat: 40.676190, lng: -74.008581}
  if (contactNode) {
    const mapContact = new google.maps.Map(contactNode, {
      zoom: 10,
      center: uluru,
    });

    const infowindow = new google.maps.InfoWindow({
      content: '23133 Hawthorne Boulevard,ofc 204<br>  Torrance, CA 90505',
      ariaLabel: "Uluru",
    });

    const markerContact = new google.maps.Marker({
      position: uluru,
      map: mapContact,
      title: "ICAPIA",
      icon: iconBase + 'marker.svg'
    });

    markerContact.addListener("click", () => {
      infowindow.open({
        anchor: markerContact,
        mapContact,
      });
    });
  }

}

window.initMap = initMap;