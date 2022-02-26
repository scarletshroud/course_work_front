import React, {useState} from 'react';
import {MapContainer, TileLayer, Marker, Popup, useMapEvents} from 'react-leaflet';

export default function MapPage() {
  const initPos = [51.505, -0.09];
  let [spots, setSpots] = useState();

  async function updateMarkerList(latitude, longitude) {
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({latitude: latitude, longitude: longitude})
    }
    await fetch("http://localhost:8080/api/spots", requestOptions)
      .then(response => response.json())
      .then(result => setSpots(result));
  }

  function LocationMarker() {
    let position = null;
    const map = useMapEvents({
      async moveend() {
        position = map.getCenter();
        await updateMarkerList(position.latitude, position.longitude);
      }
    })

    return position === null ? null : (
      <MarkerList spots={spots}/>
    )
  }

  function MarkerList(props) {
    const spots = props.spots;
    const spotsList = spots.map((marker) =>
      <Marker key={marker.id} position={[marker.latitude, marker.longitude]}>
        <Popup>
          <a href={`http://localhost:8080/api/spot/${marker.id}`}>{marker.name}</a> <br/>
          {marker.description}
        </Popup>
      </Marker>
    );

    return (
      <ul>{spotsList}</ul>
    );
  }

  return (
    <div>
      <MapContainer center={initPos} zoom={13} scrollWheelZoom={true} style={{width: '100%', height: '900px'}}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker />
      </MapContainer>
    </div>
  )
}