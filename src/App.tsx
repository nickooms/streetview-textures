import { useMemo } from 'react';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';
// import { useMemo } from "react";

function App() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAXskg1eQXzc0RM5FplzOY9-bDQN0Dd-7Q' /* process.env.REACT_APP_GOOGLE_API_KEY */,
  });
  const center = useMemo(() => ({ lat: 51.306623965868972, lng: 4.4057949201202788 }), []);

  return (
    <div className="App">
      {!isLoaded ? <h1>Loading...</h1> : <GoogleMap mapContainerClassName="map-container" center={center} zoom={10} />}
    </div>
  );

  /* const [map, setMap] = useState(null);
  const [panorama, setPanorama] = useState(null);
  const mapRef = useRef(null);
  const panoramaRef = useRef(null);
  const markt = useMemo(() => ({ lat: 51.306623965868972, lng: 4.4057949201202788 }), []);

  useEffect(() => {
    if (mapRef.current) {
      setMap(
        new google.maps.Map(mapRef.current, {
          center: markt,
          zoom: 19,
        })
      );
    }
  }, [mapRef, markt]);

  useEffect(() => {
    if (panoramaRef.current) {
      setPanorama(
        new google.maps.StreetViewPanorama(panoramaRef.current, {
          position: markt,
          pov: {
            heading: 34,
            pitch: 10,
          },
        })
      );
    }
  }, [panoramaRef, markt]);

  useEffect(() => {
    if (map && panorama) {
      map.setStreetView(panorama);
    }
  }, [map, panorama]);

  return (
    <>
      <div id="map" ref={mapRef}></div>
      <div id="pano" ref={panoramaRef}></div>
    </>
  ); */
}

export default App;
