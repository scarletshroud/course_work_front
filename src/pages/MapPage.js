import React, {useState, useEffect} from 'react';
import {MapContainer, TileLayer, Marker, Popup, useMapEvents} from 'react-leaflet';
import { useNavigate, Link } from 'react-router-dom'

export default function MapPage() {
  const initPos = [51.505, -0.09];
  let [spots, setSpots] = useState();

  let navigate = useNavigate();

  useEffect(() => {
    const authenticated = localStorage.getItem('authenticated');
    if (authenticated === 'false') {
        navigate('/login');
    }
  }, []);

  async function updateMarkerList(latitude, longitude) {
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({latitude: latitude, longitude: longitude})
    }
    await fetch("http://localhost:8080/api/spots", requestOptions)
      .then(response => response.json())
      .then(response => {
        setSpots(response);
      });
  }

  function LocationMarker() {
    let [markerList, setMarkerList] = useState();
    let position = null;
    const map = useMapEvents({
      async moveend() {
        position = map.getCenter();
        await updateMarkerList(position.lat, position.lng);
        setMarkerList(<MarkerList spots={spots}/>)
      }
    })
    return <MarkerList spots={spots}/>;
  }

  function MarkerList(props) {
    const spots = props.spots;
    if (spots !== undefined) {
      const spotsList = spots.map((marker) =>
        <Marker key={marker.id} position={[marker.latitude, marker.longitude]}>
          <Popup>
            <Link to={`/spot/${marker.id}`}>{marker.name}</Link> <br/>
            {marker.description}
          </Popup>
        </Marker>
      );

      return (
        <ul>{spotsList}</ul>
      );
    }

    return null;
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