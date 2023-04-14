import { useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";

import "./map.styles.css";

const loader = new Loader({
  apiKey: "AIzaSyC1IDQEYeOa4EvEj3SM82TOBCsHumXgIP0",
  version: "weekly",
});

const MyMap = () => {
  useEffect(() => {
    loader.load().then(() => {
      const pokeToTheMoon = { lat: 33.8261, lng: -117.8378 };
      const { Map } = google.maps;
      const map = new Map(document.getElementById("map") as HTMLElement, {
        zoom: 14,
        center: pokeToTheMoon,
      });
      const marker = new google.maps.Marker({
        position: pokeToTheMoon,
        map: map,
      });
    });
  }, []);
  return (
    <div className="map-container container-fluid">
      <div id="map"></div>
    </div>
  );
};

export default MyMap;
