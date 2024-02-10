/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const [currentLocation, setCurrentLocation] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    mapRef.current = L.map(mapContainerRef.current).setView([0, 0], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(mapRef.current);

    mapRef.current.locate({ setView: true, maxZoom: 16 });

    const onLocationFound = (e) => {
      const { lat, lng } = e.latlng;
      setCurrentLocation({ lat, lng });

      const radius = e.accuracy / 2;

      L.marker(e.latlng).addTo(mapRef.current)
        .bindPopup(`You are within ${radius} meters from this point`).openPopup();

      L.circle(e.latlng, radius).addTo(mapRef.current);
    };

    const onLocationError = (e) => {
      alert(e.message);
    };

    mapRef.current.on('locationfound', onLocationFound);
    mapRef.current.on('locationerror', onLocationError);

    return () => {
      mapRef.current.off('locationfound', onLocationFound);
      mapRef.current.off('locationerror', onLocationError);
      mapRef.current.remove();
    };
  }, []);

  return (
    <div>
      <div ref={mapContainerRef} style={{ height: '400px' }}></div>
      <div>
        Latitude: {currentLocation.lat}, Longitude: {currentLocation.lng}
      </div>
    </div>
  );
};

export default MapComponent;
