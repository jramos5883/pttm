import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Loader } from "@googlemaps/js-api-loader";

const loader = new Loader({
  apiKey: "AIzaSyC1IDQEYeOa4EvEj3SM82TOBCsHumXgIP0",
  version: "weekly",
});

loader.load().then(async () => {
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

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
