import React, {useState} from "react";
import '../css/HomePage.css'

const profile = {
  "id": 1,
  "username": "Klip666",
  "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Skateboarder_in_the_air.jpg/800px-Skateboarder_in_the_air.jpg",
  "homeSpot": "Richnoy",
  "status": "Hype All Day",
  "sport": "Skateboarding",
};

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
        <p>Learned tricks:</p>
      </div>
    </div>
  );
}