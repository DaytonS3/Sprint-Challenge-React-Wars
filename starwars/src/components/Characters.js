import React from 'react';
import '../components/StarWars.css';

function Characters(props) {
    
    return(
        <div className="CharsContainer">
            <div className="CInfo">
            <p>{props.name}</p>
            </div>
        </div>
    )
    
}

export default Characters;
