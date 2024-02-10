import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import customMarkerIcon from '../images/marker.png'; // Assuming you have a custom marker icon image

const MapComponent = () => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const [currentLocation, setCurrentLocation] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    mapRef.current = L.map(mapContainerRef.current).setView([0, 0], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: false, // Disable default attribution control
    }).addTo(mapRef.current);

    mapRef.current.on('locationfound', onLocationFound);
    mapRef.current.on('locationerror', onLocationError);

    mapRef.current.locate({ setView: true, maxZoom: 16 });

    return () => {
      mapRef.current.off('locationfound', onLocationFound);
      mapRef.current.off('locationerror', onLocationError);
      mapRef.current.remove();
    };
  }, []);

  const onLocationFound = (e) => {
    const { lat, lng } = e.latlng;
    setCurrentLocation({ lat, lng });

    const radius = (e.accuracy / 2).toFixed(2);

    setTimeout(() => {
      // Add the main marker with the custom icon
      const mainMarkerIcon = L.icon({
        iconUrl: customMarkerIcon,
        iconSize: [25, 41], // Fixed icon size for the main marker
        iconAnchor: [12, 41], // Adjust anchor point if necessary
      });

      L.marker(e.latlng, { icon: mainMarkerIcon }).addTo(mapRef.current)
        .bindPopup();

      const nearbyPoints = [
        { lat: lat + 0.011, lng: lng + 0.011 },
        { lat: lat - 0.008, lng: lng + 0.002 },
        { lat: lat + 0.004, lng: lng - 0.003 }
      ];

      nearbyPoints.forEach(point => {
        L.marker(point, {
          icon: L.divIcon({
            className: 'custom-div-icon',
            html: '<div style="background-color: blue; border-radius: 50%; width: 10px; height: 10px;"></div>',
            iconSize: [10, 10]
          })
        }).addTo(mapRef.current);
      });
    });
  };

  const onLocationError = (e) => {
    alert(e.message);
  };

  return (
    <div>
      <div ref={mapContainerRef} style={{ height: '100vh', width: '100vw'}}></div>
      {/* <div>
        Latitude: {currentLocation.lat}, Longitude: {currentLocation.lng}
      </div> */}
    </div>
  );
};

export default MapComponent;
