import React, {useState, useEffect} from "react";
import VideoPlayer from "react-video-js-player"
import { useNavigate, Link } from 'react-router-dom'
import '../css/TricksPage.css'
import '../css/button.css'

export default function TricksPage() {
    let [tricks, setTricks] = useState("");
    let [content, setContent] = useState("");

    let navigate = useNavigate();

    function updateUserTrickStatus(event, trickId, trickStatus) {
        console.log("wow");
        event.preventDefault();
        const requestOptions = {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({token: localStorage.getItem('userToken'), trickId: trickId, trickStatus: trickStatus})
        }
    
        fetch("http://localhost:8080/api/progress/update", requestOptions);
      }

    useEffect(() => {
        const authenticated = localStorage.getItem('authenticated');
        if (authenticated === 'false') {
            navigate('/login');
        }
        
        let isComponentMounted = true;
        const fetchData = async () => {
            const response = await fetch(`http://localhost:8080/api/tricks/${localStorage.getItem('userSportId')}`);
            const data = await response.json();
            if (isComponentMounted) {
                setTricks(data);
                setContent(data.map((trick) =>
                    <div className="trick-container" key={trick.id}>
                        <h3>{trick.name}</h3>
                        <VideoPlayer
                            src={"https://media.w3.org/2010/05/sintel/trailer_hd.mp4"}
                            width="360"
                            height="240"
                        />
                        <h5>Description:</h5> 
                        {trick.description}
                        <h5>How To:</h5> 
                        {trick.howTo}
                        <h5>Complexity:</h5> 
                        {trick.complexity}
                        <h5>People learned:</h5> 
                        {trick.peopleStudied}
                        <p/>
                        <button className="button" onClick={(e) => updateUserTrickStatus(e, trick.id, 'learned')}>Learned</button>
                        <p/>
                        <button className="button" onClick={(e) => updateUserTrickStatus(e, trick.id, 'in progress')}>In Progress</button>
                        <p/>
                        <Link to="/trick">More About This Trick</Link>
                    </div>
                ));
            }
        };

        fetchData();
        return () => {
            isComponentMounted = false;
        }
    }, []);

    return tricks ?
        <div>
            {content}
        </div>
        :
        <div>Loading...</div>
}