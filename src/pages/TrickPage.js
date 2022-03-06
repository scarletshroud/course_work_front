import React, {useState, useEffect} from "react";
import VideoPlayer from "react-video-js-player"
import { useNavigate, useParams } from 'react-router-dom'
import Comments from "../components/Comments";
import '../css/OneTrickPage.css'
import VideosFrame from '../components/VideosFrame.js';

export default function TrickPage() {
    const params = useParams();
    const id = params.id;
    let [trick, setTrick] = useState();
    let navigate = useNavigate();

    useEffect(() => {
        const authenticated = localStorage.getItem('authenticated');
        if (authenticated === 'false') {
            navigate('/login');
        }    

        let isComponentMounted = true;
        const fetchData = async () => {
            const response = await fetch(`http://localhost:8080/api/trick/${id}`);
            const data = await response.json();
            if (isComponentMounted) {
                setTrick(data);
                console.log(data);
            }
        };

        fetchData();
        return () => {
            isComponentMounted = false;
        }
    }, []);

    return trick ? (
        <div>
            <div className="trick-container">
                <h3>{trick.name}</h3>
                <VideosFrame video={trick.videos}/>
                <h5>Description:</h5> 
                {trick.description}
                <h5>How To:</h5> 
                {trick.howTo}
                <h5>Complexity:</h5> 
                {trick.complexity}
                <h5>People learned:</h5> 
                {trick.peopleStudied}
            </div>
            <Comments comments={trick.comments}/>
        </div>
    ) : (
        <div>Loading...</div>
    )
}