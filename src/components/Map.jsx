import { useRef, useEffect, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import "./map.css";

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng] = useState(139.753);
  const [lat] = useState(35.6844);
  const [zoom] = useState(1);
  const [API_KEY] = useState("4697dLrGj0eeXceTVCMb");

  useEffect(() => {
    if (map.current) return; // stops map from intializing more than once

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
      center: [lng, lat],
      zoom: zoom,
    });

    map.current.addControl(new maplibregl.NavigationControl(), "top-right");

    new maplibregl.Marker({ color: "#FF0000" })
      .setLngLat([139.7525, 35.6846])
      .setPopup(new maplibregl.Popup().setHTML("Here is Japan!"))
      .addTo(map.current);

    new maplibregl.Marker({ color: "#FF0000" })
      .setLngLat([-122.4194, 37.7749])
      .setPopup(new maplibregl.Popup().setHTML("Here is San Francisco!"))
      .addTo(map.current);

    new maplibregl.Marker({ color: "#FF0000" })
      .setLngLat([-118.2437, 34.0522])
      .setPopup(new maplibregl.Popup().setHTML("Here is Los Angeles!"))
      .addTo(map.current);

    new maplibregl.Marker({ color: "#FF0000" })
      .setLngLat([30.8025, 26.8206])
      .setPopup(new maplibregl.Popup().setHTML("Here is Egypt!"))
      .addTo(map.current);

    new maplibregl.Marker({ color: "#FF0000" })
      .setLngLat([39.7823, 15.1794])
      .setPopup(new maplibregl.Popup().setHTML("Here is Asmara!"))
      .addTo(map.current);

    new maplibregl.Marker({ color: "#FF0000" })
      .setLngLat([-1.1743, 52.3555])
      .setPopup(new maplibregl.Popup().setHTML("Here is England!"))
      .addTo(map.current);

    new maplibregl.Marker({ color: "#FF6666", draggable: true })
      .setLngLat([30.5, 50.5])
      .setPopup(new maplibregl.Popup().setHTML("I like to travel around!"))
      .addTo(map.current);
  }, [API_KEY, lng, lat, zoom]);

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
}

//materialUI
