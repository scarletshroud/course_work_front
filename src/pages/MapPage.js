import React from 'react';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';

export default function MapPage() {
  const position = [51.505, -0.09]

  return (
    <div style={{height: '500px', width: '500px'}}>
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
      </MapContainer>
    </div>
  );
}