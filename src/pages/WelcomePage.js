import React, {useState, useEffect} from "react";
import {Form, Nav, Button} from "react-bootstrap";
import "../css/WelcomePage.css"

/*const sports = [
    {
        "id": 1,
        "name": "Skateboarding",
        "description": "Making a spin by a steering wheel",
        "amountOfRiders": 3,
    },
    {
        "id": 2,
        "name": "BMX",
        "description": "Making a spin by a steering wheel",
        "amountOfRiders": 4,
    },
    {
        "id": 3,
        "name": "Scooter",
        "description": "Making a spin by a steering wheel",
        "amountOfRiders": 333,
    }
] */

export default function WelcomePage() {

    let [sport, setSport] = useState("Skateboarding");
    let [username, setUsername] = useState("Username");
    let [sports, setSports] = useState();

    function handleUsernameInput(event) {
        setUsername(event.target.value);
    }

    function handleSportClick(sport) {
        console.log(sport.name);
    }

    function onSubmit() {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({userToken: localStorage.getItem('userToken'), username: username, sport: sport})
          }
      
        fetch('http://localhost:8080/api/complete', requestOptions)
            .then(response => response.json())
            .then(data => setSport(data));        
    }

    function getSports() {
        fetch('http://localhost:8080/api/sports')
            .then(response => response.json())
            .then(data => setSports(data));
    }

    useEffect(() => { 
        setTimeout(() => { getSports(); }, 2000)
    }, []);
    
    const content = sports.map((sport) =>
        <div className="sport-container" key={sport.id}>
            <h3>{sport.name}</h3>
            <h5>Description:</h5> 
            {sport.description}
            <h5>Amount of riders</h5> 
            {sport.amountOfRiders}
            <p></p>
            <Button className="submit-button" type="button" variant="primary">Select</Button>
        </div>
    );

    return (
        <div>        
            <Form className="welcome-form">
                <h3> Welcome! Only a few steps left! </h3>
                 
                <Form.Group className="mb-3"> 
                    <Form.Label className="label">Username: </Form.Label> 
                    <Form.Control type="text" placeholder="Enter username" onChange={handleUsernameInput}/> 
                </Form.Group> 
                {content}
                <p></p>
                <Button className="submit-button" type="submit" variant="primary" onClick={onSubmit()}>Continue</Button>
            </Form>
        </div>
    );
}