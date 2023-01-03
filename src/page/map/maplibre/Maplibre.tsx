import { useState, useEffect, useCallback, FC } from "react";
import "./Maplibre.css";

import { Map, NavigationControl } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

const Leaflet: FC = () => {
  const [mount, setMount] = useState<any>(undefined);
  const initMap = useCallback(() => {
    const mapRender = new Map({
      container: "map",
      style:
        "https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL",
      center: [100.523186, 13.736717],
      zoom: 10,
    });
    mapRender.addControl(new NavigationControl(), "top-left");
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
