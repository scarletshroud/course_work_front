import {useState, useEffect} from "react";
import '../css/ProgressPage.css'
import '../css/button.css'

const progresss = [
  {
      "id": 1,
      "name": "Barspin",
      "description": "Making a spin by a steering wheel",
      "howTo": "Put your hands on steering wheel like this...",
      "complexity": "Medium Level",
      "peopleStudied": 1,
      "progress": 'Learned'
  },
  {
      "id": 2,
      "name": "Barspin",
      "description": "Making a spin by a steering wheel",
      "howTo": "Put your hands on steering wheel like this...",
      "complexity": "Medium Level",
      "peopleStudied": 1,
      "progress": 'In Progress'
  },
  {
      "id": 3,
      "name": "Barspin",
      "description": "Making a spin by a steering wheel",
      "howTo": "Put your hands on steering wheel like this...",
      "complexity": "Medium Level",
      "peopleStudied": 1,
      "progress": 'In Progress'
  },
  {
      "id": 4,
      "name": "Barspin",
      "description": "Making a spin by a steering wheel",
      "howTo": "Put your hands on steering wheel like this...",
      "complexity": "Medium Level",
      "peopleStudied": 1,
      "progress": 'In Progress'
  },
  {
      "id": 5,
      "name": "Barspin",
      "description": "Making a spin by a steering wheel",
      "howTo": "Put your hands on steering wheel like this...",
      "complexity": "Medium Level",
      "peopleStudied": 1,
      "progress": 'Learned'
  },
  {
      "id": 6,
      "name": "Barspin",
      "description": "Making a spin by a steering wheel",
      "howTo": "Put your hands on steering wheel like this...",
      "complexity": "Medium Level",
      "peopleStudied": 1,
      "progress": 'Learned'
  }
];

export default function ProgressPage() {
  let [progress, setProgress] = useState();

  function getUserProgress() {
    console.log("wow")
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({token: localStorage.getItem('userToken')})
    }

    console.log(localStorage.getItem('userToken'))
    
    fetch("http://localhost:8080/api/progress", requestOptions)
        .then(response => response.json())
        .then((data) => setProgress(data));
  }

  function updateUserTrickStatus(trickId, trickStatus) {
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({token: localStorage.getItem('userToken'), trickId: trickId, trickStatus: trickStatus})
    }

    fetch("http://localhost:8080/api/progress/update", requestOptions)
        .then(response => response.json())
        .then((result) => setProgress(result));
  }

  if (progress) {
    const content = progress.map((trick) =>
          <div key={trick.id}> 
              {trick.progress === 'Learned' ? (
                    <div>
                      {trick.name}
                      <button className="button" onClick={updateUserTrickStatus(trick.id, 'default')}>Remove</button> 
                    </div>
                ) : (
                    <div>
                      {trick.name}
                      <button className="button" onClick={updateUserTrickStatus(trick.id, 'learned')}>Learned</button>
                      <button className="button" onClick={updateUserTrickStatus(trick.id, 'default')}>Remove</button>
                    </div>
                ) 
              } 
          </div>
    );
  }
  useEffect(() => { setTimeout(() => { getUserProgress(); }, 2000)}, []);
  //useEffect(() => { getUserProgress(); }, []);

  return (<div></div>)

/*  return progress ?
      <div>
        <div className="column-header"><h2>Learned</h2></div>
        <div className="column-header"><h2>In Progress</h2></div>
          {content}
      </div>
      :
        <div>Loading...</div>; */
}