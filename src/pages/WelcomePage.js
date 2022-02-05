import React, {useState} from "react";

export default function WelcomePage() {

    let [sport, setSport] = useState("Skateboarding");

    function handleSportSelectorInput(event) {
        setSport(event.target.value);
    }

    function onSubmit() {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({token: email, sport: sport})
          }
      
          fetch("http://localhost:8080/api/add-user-sport", requestOptions)
            .then(response => response.json())
            .then(loginState => setLoginState(loginState));            
    }

    return (
        <div>
            <div className="header">
                <text>
                    Добро Пожаловать! Осталось всего несколько шагов!
                </text>
            </div>
            <form onSubmit={onSubmit}>
                <p> 
                    <label>Extreme Sport:</label>
                    <select name="sport" className="sportSelector" onChange={handleSportSelectorInput}>
                        <option value="Skateboarding">Skateboarding</option>
                        <option value="Scooter">Scooter</option>
                        <option value="BMX">BMX</option>
                    </select>
                </p>
                <p><input type="submit" value="Continue!" /></p>
            </form>
        </div>
    );
}