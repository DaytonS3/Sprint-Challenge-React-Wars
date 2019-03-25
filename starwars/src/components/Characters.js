import React from 'react';
import '../components/StarWars.css';

function Characters(props) {
    
    return(
        <div className="CharsContainer">
            <div className="CInfo">
            <p className="name">{props.name}</p>
            <p><strong>DOB:</strong> {props.DOB}</p>
            <p><strong>Height:</strong> {props.height}</p> 
            <p><strong>Eye Color:</strong> {props.eye_color}</p>
            <p><strong>Skin Color:</strong> {props.skinColor}</p>
            <p><strong>Hair Color:</strong> {props.hairColor}</p>
            <p><strong>Mass:</strong>{props.mass}</p>
            </div>
        </div>
    )
    
}

export default Characters;
