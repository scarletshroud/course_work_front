import {useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom'
import '../css/ProgressPage.css'
import '../css/button.css'

export default function ProgressPage() {
  let [progress, setProgress] = useState();
  let [content, setContent] = useState();
  let [isComponentMounted, setComponentMounted] = useState(true);

  let navigate = useNavigate();

  function updateUserTrickStatus(event, trickId, trickStatus) {
    event.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({token: localStorage.getItem('userToken'), trickId: trickId, trickStatus: trickStatus})
    }

    fetch("http://localhost:8080/api/progress/update", requestOptions);

    const requestOptions2 = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({token: localStorage.getItem('userToken')})
      }
  
    fetch("http://localhost:8080/api/progress", requestOptions2)
    .then(response => response.json())
    .then((data) => setProgress(data));
  }

  useEffect(() => {
    const authenticated = localStorage.getItem('authenticated');
    if (authenticated === 'false') {
        navigate('/login');
    }    

    setComponentMounted(true);
    const fetchData = async () => { 
      const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({token: localStorage.getItem('userToken')})
        }
    
      const response = await fetch("http://localhost:8080/api/progress", requestOptions);
      const data = await response.json();
      console.log(data);
      if (isComponentMounted) {
        setProgress(data);
        setContent(data.map((trick) =>
        <div key={trick.id}> 
            {trick.progress === 'Learned' ? (
                  <div>
                    {trick.name}
                    <button className="button" onClick={(e) => updateUserTrickStatus(e, trick.id, 'default')}>Remove</button> 
                  </div>
              ) : (
                  <div>
                    {trick.name}
                    <button className="button" onClick={(e) => updateUserTrickStatus(e, trick.id, 'learned')}>Learned</button>
                    <button className="button" onClick={(e) => updateUserTrickStatus(e, trick.id, 'default')}>Remove</button>
                  </div>
              ) 
            } 
        </div>
        ));
      }
    }

    fetchData();
    return () => {
      setComponentMounted(false);
    }

  }, []);


  return (
    progress ?
        <div>
          <div className="column-header"><h2>Learned</h2></div>
          <div className="column-header"><h2>In Progress</h2></div>
            {content}
        </div>
     : 
        <div>Loading...</div>
  );
}