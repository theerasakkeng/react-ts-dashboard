import { useState, useEffect, useCallback, FC } from "react";
import "./GoogleMap.css";

const GoogleMap: FC = () => {
  const [mount, setMount] = useState<any>(undefined);
  const initMap = useCallback(() => {
    const mapRender = new google.maps.Map(
      document.getElementById("map") as HTMLElement,
      {
        zoom: 4,
        center: { lat: -25.344, lng: 131.031 },
      }
    );
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
export default GoogleMap;
