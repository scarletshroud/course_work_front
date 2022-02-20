import React, {useState} from "react";
import {Form, Nav, Button} from "react-bootstrap";
import "../css/WelcomePage.css"

const sports = [
    {
        "id": 1,
        "name": "Skateboarding",
        "description": "Making a spin by a steering wheel",
        "amountOfRiders": 3,
        "photo": "https://i0.wp.com/youthcare.org/wp-content/uploads/2021/01/pexels-allan-mas-5370615-scaled.jpg?fit=1834%2C2560&ssl=1"
    },
    {
        "id": 2,
        "name": "BMX",
        "description": "Making a spin by a steering wheel",
        "amountOfRiders": 4,
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Dirt_jump_IMG_7609.jpg/300px-Dirt_jump_IMG_7609.jpg"
    },
    {
        "id": 3,
        "name": "Scooter",
        "description": "Making a spin by a steering wheel",
        "amountOfRiders": 333,
        "photo": "https://images.unsplash.com/photo-1559585198-8c2694b5d132?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2Nvb3RlciUyMHRyaWNrfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
    }
]

export default function WelcomePage() {

    let [sport, setSport] = useState("Skateboarding");
    let [username, setUsername] = useState("Username");

    function handleUsernameInput(event) {
        setUsername(event.target.value);
    }

    function handleSportClick(sport) {
        console.log("wow");
    }

    function onSubmit() {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({userToken: localStorage.getItem('userToken'), username: username, sport: sport})
          }
      
        fetch("http://localhost:8080/api/add-user-sport", requestOptions)
            .then(response => response.json())
            .then(data => setSport(data));        
    }
    
    const content = sports.map((sport) =>
        <div className="sport-container" key={sport.id}>
            <h3>{sport.name}</h3>
            <img className="photo" src={sport.photo}/>
            <h5>Description:</h5> 
            {sport.description}
            <h5>Amount of riders</h5> 
            {sport.amountOfRiders}
            <p></p>
            <Button className="submit-button" type="button" variant="primary" onClick={handleSportClick(sport.name)}>Select</Button>
        </div>
    );

    return (
        <div>        
            <Form className="welcome-form">
                <h3> Welcome! Only a few steps left! </h3>
                 
                <Form.Group className="mb-3"> 
                    <Form.Label className="label">Username: </Form.Label> 
                    <Form.Control type="email" placeholder="Enter username" onChange={handleUsernameInput}/> 
                </Form.Group> 

                {content}
                <p></p>
                <Button className="submit-button" type="submit" variant="primary" onClick={onSubmit()}>Continue</Button>
            </Form>
        </div>
    );
}