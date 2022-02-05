import React, {useState} from "react";
import {MapContainer, TileLayer, Marker, Popup, useMapEvents} from 'react-leaflet';

export default function MapPage() {
  let [spots, setSpots] = useState("");
  const [position, setPosition] = useState(null);
  
  const initialPosition = [51.505, -0.09];
  setPosition(initialPosition);

  function getSpotsOnArea(latitude, longitude) {
    const requestOptions = {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({latitude: latitude, longitude: longitude})
    }

    fetch("http://localhost:8080/api/spots", requestOptions)
      .then(response => response.json())
      .then(
        (result) => setSpots(result),
        (error) => {});
  }

  function MapPositionListener() {
    const map = useMapEvents({
      click() {
        let currentPosition = map.getCenter()
        if (currentPosition !== position) {
          getSpotsOnArea(position.lat, position.lng)
        }
      }
    })
  }

  return (
    <div style={{height: '1000px', width: '1000px'}}>
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <MapPositionListener/>
      </MapContainer>
    </div>
  );
}