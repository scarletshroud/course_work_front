import React, {useState} from "react";
import Badge from 'react-bootstrap/Badge'
import '../css/HomePage.css'

const profile = {
  "id": 1,
  "username": "Klip666",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Skateboarder_in_the_air.jpg/800px-Skateboarder_in_the_air.jpg",
  "homeSpot": "Richnoy",
  "status": "Hype All Day",
  "sport": "Skateboarding",
};

const learnedTricks = [
  {
      "id": 1,
      "name": "Barspin",
      "description": "Making a spin by a steering wheel",
      "howTo": "Put your hands on steering wheel like this...",
      "complexity": "Beginner Level",
      "peopleStudied": 1,
      "videoId": 2
  },
  {
      "id": 2,
      "name": "Barspin",
      "description": "Making a spin by a steering wheel",
      "howTo": "Put your hands on steering wheel like this...",
      "complexity": "Medium Level",
      "peopleStudied": 1,
      "videoId": 2
  },
  {
      "id": 3,
      "name": "Barspin",
      "description": "Making a spin by a steering wheel",
      "howTo": "Put your hands on steering wheel like this...",
      "complexity": "Medium Level",
      "peopleStudied": 1,
      "videoId": 2
  },
  {
      "id": 4,
      "name": "Barspin",
      "description": "Making a spin by a steering wheel",
      "howTo": "Put your hands on steering wheel like this...",
      "complexity": "Medium Level",
      "peopleStudied": 1,
      "videoId": 2
  },
  {
      "id": 5,
      "name": "Barspin",
      "description": "Making a spin by a steering wheel",
      "howTo": "Put your hands on steering wheel like this...",
      "complexity": "Medium Level",
      "peopleStudied": 1,
      "videoId": 2
  },
  {
      "id": 6,
      "name": "Barspin",
      "description": "Making a spin by a steering wheel",
      "howTo": "Put your hands on steering wheel like this...",
      "complexity": "Experienced Level",
      "peopleStudied": 1,
      "videoId": 2
  }
];

export default function HomePage() {
  let [profileInfo, setProfileInfo] = useState();
  let [homeSpot, setHomeSpot] = useState();

 function getProfileInfo() {
   /* const requestOptions = {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email: email, password: password})
    }

    fetch("http://localhost:8080/api/me", requestOptions)
      .then(response => response.json())
      .then(loginState => setLoginState(loginState)); */
  }

  const tricks = learnedTricks.map((trick) =>
  <div className="" key={trick.id}>
    {trick.complexity === 'Beginner Level' ? (
                    <div className="tag-container">
                    <Badge  pill bg="primary">
                      {trick.name}
                    </Badge>  
                    </div>
                    ) : (
                        trick.complexity === 'Medium Level' ? (
                          <div className="tag-container">
                          <Badge className="tag-container" pill bg="warning">
                            {trick.name}
                          </Badge> 
                          </div>
                        ) : (
                          <Badge pill bg="danger">
                            {trick.name}
                          </Badge> 
                        )
                    ) 
    } 

  </div>
);

  return (
    <div>
      <div id="profile-info">
        <div className="photo-container">
          <img className="photo" src={profile.photo}/>
        </div>
        <div className="user-info-container">
          <div className="username">{profile.username}</div>
          <div className="status">{profile.status}</div>
          <div className="sport">{profile.sport}</div>
          <p>Home spot: {profile.homeSpot}</p>
        </div>
      </div>
      <span>Learned Tricks: </span> {tricks}
    </div>
  );
}