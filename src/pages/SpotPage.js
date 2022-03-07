import {useParams, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {Marker, Popup} from "react-leaflet";
import Comments from "../components/Comments";
import VideosFrame from '../components/VideosFrame.js';
import PhotosFrame from "../components/PhotoFrame";
import Badge from 'react-bootstrap/Badge'
import '../css/Spot.css'

export default function SpotsPage() {
  const {id} = useParams();
  let [spot, setSpot] = useState();

  let navigate = useNavigate();

  let spot1 = {
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

    let isComponentMounted = true;
    const fetchData = async () => {
      const response = await fetch(`http://localhost:8080/api/spot/${id}`);
      const data = await response.json();
      if (isComponentMounted) {
        setSpot(data);
        console.log(data);
      }
    };

    fetchData();
    return () => {
      isComponentMounted = false;
    }

  }, []);

  function objectToList(objects) {
    const objectsList = objects.map((object) =>
      <div className="tag-container" key={object.id}>
        <Badge  pill bg="primary">
          {object.name}
        </Badge>
      </div>
    );

    return (
      <ul>{objectsList}</ul>
    );
  }
  return spot ? (
      <div>
        <h3>{spot.name}</h3> <br/>
        <h6>{spot.description}</h6> <br/>
        <PhotosFrame photo={spot.photo}/> <br/>
        <VideosFrame video={spot.video}/> <br/>
        People visited: {spot.peopleVisited} <br/>
        Activity: {spot.activity} <br/>
        {objectToList(spot.objects)} <br/>
        <Comments comments={spot.comments}/>
      </div>
    ) : ( 
      <div>Loading...</div>
    )
}