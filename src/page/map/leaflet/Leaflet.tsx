import { useState, useEffect, useCallback, FC } from "react";
import "./Leaflet.css"

import L from "leaflet";
import "leaflet/dist/leaflet.css";

const Leaflet: FC = () => {
  const [mount, setMount] = useState<any>(undefined);
  const initMap = useCallback(() => {
    const mapRender = L.map("map").setView([51.505, -0.09], 13);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(mapRender);
    setMount(mapRender);
  }, [mount]);
  useEffect(() => {
    if (!mount) {
      initMap();
    }
  }, [mount, initMap]);
  return (
    <div className="map-container">
      <div id="map"></div>
    </div>
  );
};
export default Leaflet;
