import {useParams, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {Marker, Popup} from "react-leaflet";
import SpotComments from "../components/SpotComments";
import VideosFrame from "../components/VideoFrame";
import PhotosFrame from "../components/PhotoFrame";

export default function SpotsPage() {
  const {id} = useParams();
  let [spot1, setSpot] = useState();

  let navigate = useNavigate();

  let spot = {
    "id": 1,
    "name": "Moskovskaya",
    "description": "A legendary street spot..",
    "updateDate": "2021-10-08T21:00:00.000+00:00",
    "peopleVisited": 7391,
    "activity": "High Activity",
    "latitude": 59.93863,
    "longitude": 30.31413,
    "objects": [
      {
        "id": 3,
        "name": "5 stairs gap"
      },
      {
        "id": 5,
        "name": "6 stairs gap"
      }
    ],
    "comments": [
      {
        "id": 1,
        "text": "cool!",
        "authorId": 1,
        "creation_date": "2021-06-20T21:00:00.000+00:00"
      }
    ],
    "photo": [],
    "video": [
      {
        "id": 1,
        "path": "/photo/1",
        "tag": "spot",
        "authorId": 1,
        "creation_date": "2021-11-11T21:00:00.000+00:00"
      },
      {
        "id": 2,
        "path": "/photo/2",
        "tag": "spot",
        "authorId": 2,
        "creation_date": "2021-09-02T21:00:00.000+00:00"
      }
    ]
  };

  useEffect(() => {
    const authenticated = localStorage.getItem('authenticated');
    if (authenticated === 'false') {
        navigate('/login');
    }    
}, []);

  async function getSpotInformation(latitude, longitude) {
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({latitude: latitude, longitude: longitude})
    }
    await fetch("http://localhost:8080/api/spots", requestOptions)
      .then(response => response.json())
      .then(result => setSpot(result));
  }

  function objectToList(objects) {
    const objectsList = objects.map((object) =>
      <li key={object.id}>
        {object.name}
      </li>
    );

    return (
      <ul>{objectsList}</ul>
    );
  }
  return (
    <div>
      Название: {spot.name} <br/>
      Описание: {spot.description} <br/>
      Фото: <PhotosFrame photo={spot.photo}/> <br/>
      Видео: <VideosFrame video={spot.video}/> <br/>
      Количество посещений: {spot.peopleVisited} <br/>
      Активность: {spot.activity} <br/>
      Объекты: {objectToList(spot.objects)} <br/>
      Комментарии: <SpotComments comments={spot.comments}/>
    </div>
  );
}