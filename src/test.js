export const initialize = () => {
  const markt = { lat: 51.306623965868972, lng: 4.4057949201202788 };
  // const fenway = { lat: 42.345573, lng: -71.098326 };
  const map = new google.maps.Map(document.getElementById('map'), {
    center: markt,
    zoom: 14,
  });
  const panorama = new google.maps.StreetViewPanorama(document.getElementById('pano'), {
    position: markt,
    pov: {
      heading: 34,
      pitch: 10,
    },
  });

  map.setStreetView(panorama);
};

window.initialize = initialize;
