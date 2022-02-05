import React, {useState, useEffect} from "react";

export default function TricksPage() {

    let [tricks, setTricks] = useState("");

    function getSportTricks() {
        const requestOptions = {
          method: 'GET',
          headers: {'Content-Type': 'application/json'},
          body: 'BMX'
        }
    
        fetch("http://localhost:8080/api/tricks", requestOptions)
          .then(response => response.json())
          .then(
            (result) => setTricks(result),
            (error) => {});
    }

    useEffect(() => {
        getSportTricks();
      }, []);

    return(
        <div>
            <div>

            </div>
        </div>
    );
}