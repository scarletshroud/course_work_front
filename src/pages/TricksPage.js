import React, {useState, useEffect} from "react";
import VideoPlayer from "react-video-js-player"

const trickss = [
    {
        "id": 1,
        "name": "Barspin",
        "description": "Making a spin by a steering wheel",
        "howTo": "Put your hands on steering wheel like this...",
        "complexity": "Medium Level",
        "peopleStudied": 1,
        "videoId": 2
    },
    {
        "id": 2,
        "name": "Barspin",
        "description": "Making a spin by a steering wheel",
        "howTo": "Put your hands on steering wheel like this...",
        "complexity": "Medium Level",
        "peopleStudied": 1,
        "videoId": 2
    },
    {
        "id": 3,
        "name": "Barspin",
        "description": "Making a spin by a steering wheel",
        "howTo": "Put your hands on steering wheel like this...",
        "complexity": "Medium Level",
        "peopleStudied": 1,
        "videoId": 2
    },
    {
        "id": 4,
        "name": "Barspin",
        "description": "Making a spin by a steering wheel",
        "howTo": "Put your hands on steering wheel like this...",
        "complexity": "Medium Level",
        "peopleStudied": 1,
        "videoId": 2
    },
    {
        "id": 5,
        "name": "Barspin",
        "description": "Making a spin by a steering wheel",
        "howTo": "Put your hands on steering wheel like this...",
        "complexity": "Medium Level",
        "peopleStudied": 1,
        "videoId": 2
    },
    {
        "id": 6,
        "name": "Barspin",
        "description": "Making a spin by a steering wheel",
        "howTo": "Put your hands on steering wheel like this...",
        "complexity": "Medium Level",
        "peopleStudied": 1,
        "videoId": 2
    }
];

export default function TricksPage() {

    let [tricks, setTricks] = useState("");
    let [content, setContent] = useState("");

    useEffect(() => {
        let isComponentMounted = true;
        const fetchData = async () => {
            const response = await fetch(`http://localhost:8080/api/tricks/${localStorage.getItem('userSportId')}`);
            const data = await response.json();
            if (isComponentMounted) {
                setTricks(data);
                console.log(data);
                setContent(tricks.map((trick) =>
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