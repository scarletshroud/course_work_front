import React, {useState} from "react";

export default function HomePage() {
  let [profileInfo, setProfileInfo] = useState();

 function getProfileInfo() {
    const requestOptions = {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email: email, password: password})
    }

    fetch("http://localhost:8080/api/me", requestOptions)
      .then(response => response.json())
      .then(loginState => setLoginState(loginState));
  }

  return (
    <div>
      <div id="profile-info">
        <img src={profileInfo} alt="Здесь должен быть аватар" height="512px" width="512px"/>
        <p>Username: {profileInfo}</p>
        <p>Home spot: {profileInfo}</p>
        <p>Learned tricks: TODO: что здесь должно быть?</p>
        <p>Recent videos: TODO: и что здесь должно быть?</p>
      </div>
    </div>
  );
}