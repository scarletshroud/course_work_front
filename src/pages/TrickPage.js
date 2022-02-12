import React, {useState, useEffect} from "react";
import VideoPlayer from "react-video-js-player"
import '../css/TrickPage.css'

const trick = 
    {
        "id": 1,
        "name": "Barspin",
        "description": "Making a spin by a steering wheel",
        "howTo": "Put your hands on steering wheel like this...",
        "complexity": "Medium Level",
        "peopleStudied": 1,
        "videoId": 2
    };

export default function TrickPage() {
  
    return(
        <div>
            <h3>{trick.name}</h3>
            <VideoPlayer className="video"
                src={"https://media.w3.org/2010/05/sintel/trailer_hd.mp4"}
                width="480"
                height="360"
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
    );
}