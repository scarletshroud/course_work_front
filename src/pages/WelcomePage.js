import React, {useState, useEffect} from "react";
import {Form, Nav, Button} from "react-bootstrap";
import { useNavigate } from 'react-router-dom'
import "../css/WelcomePage.css"

export default function WelcomePage() {

    let [sport, setSport] = useState("Skateboarding");
    let [username, setUsername] = useState("Username");
    let [sports, setSports] = useState();
    let [content, setContent] = useState();

    let navigate = useNavigate();

    function handleUsernameInput(event) {
        setUsername(event.target.value);
    }

    function handleSportClick(event) {
        event.preventDefault();
        setSport(event.target.getAttribute('data-key'));
    }

    function onSubmit(event) {
        event.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({userToken: localStorage.getItem('userToken'), username: username, sport: sport})
          }
      
        fetch('http://localhost:8080/api/complete', requestOptions)
            .then(response => response.json())
            .then(data => setSport(data));
    }

    useEffect(() => {  
        const authenticated = localStorage.getItem('authenticated');
        if (authenticated === 'false') {
            navigate('/login');
        }
        let isComponentMounted = true; 
        const fetchData = async () => {
            const response = await fetch(`http://localhost:8080/api/sports`);
            const data = await response.json();
            if (isComponentMounted) {
                setSports(data);
                setContent(data.map((sport) =>
                <div className="sport-container" key={sport.id}>
                    <h3>{sport.kind}</h3>
                    <h5>Description:</h5> 
                    {sport.description}
                    <h5>Amount of riders</h5> 
                    {sport.amount_of_riders}
                    <p></p>
                    <Button className="submit-button" type="button" variant="primary" data-key={sport.kind} onClick={(e) => handleSportClick(e)}>Select</Button>
                </div>
                ));
            }
        };

        fetchData();
        return () => {
            isComponentMounted = false;
        }
    }, []);

    return sport ?
        <div>        
            <Form className="welcome-form">
                <h3> Welcome! Only a few steps left! </h3>
                 
                <Form.Group className="mb-3"> 
                    <Form.Label className="label">Username: </Form.Label> 
                    <Form.Control type="text" placeholder="Enter username" onChange={(e) => handleUsernameInput(e)}/> 
                </Form.Group> 
                {content}
                <p></p>
                <Button className="submit-button" type="submit" variant="primary" onClick={(e) => onSubmit(e)}>Continue</Button>
            </Form>
        </div>
        :
        <div>Loading...</div>
}