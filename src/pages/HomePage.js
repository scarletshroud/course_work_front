import React, {useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom'
import Badge from 'react-bootstrap/Badge'
import '../css/HomePage.css'

export default function HomePage() {
  let [profileInfo, setProfileInfo] = useState();
  let [tricks, setTricks] = useState();

  let navigate = useNavigate();

  useEffect(() => {
    const authenticated = localStorage.getItem('authenticated');
    if (authenticated === 'false') {
        navigate('/login');
    }    
    let isComponentMounted = true;
    const fetchData = async () => {
      const response = await fetch(`http://localhost:8080/api/user/${localStorage.getItem('userId')}`);
      const data = await response.json();
      if (isComponentMounted) {
        setProfileInfo(data);
        setTricks(profileInfo.learnedTricks.map((trick) =>
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
        ));
      }
    };
    fetchData();
    return () => {
      isComponentMounted = false;
    }
  }, []);

  return (
    profileInfo ?
      <div>
        <div id="profile-info">
          <div className="photo-container">
            <img className="photo" src={profileInfo.photoUrl}/>
          </div>
          <div className="user-info-container">
            <div className="username">{profileInfo.username}</div>
            <div className="status">{profileInfo.status}</div>
            <div className="sport">{profileInfo.sport}</div>
            <p>Home spot: {profileInfo.homeSpotName}</p>
          </div>
        </div>
        <span>Learned Tricks: </span> {tricks}
      </div>
    :
    <div>Loading..</div>
  );
}