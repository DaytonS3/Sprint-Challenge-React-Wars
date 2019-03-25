import React from 'react';
import Characters from './Characters';
import '../components/StarWars.css';


function List(props) {
    return(
        <div className="list">
           {props.characters.map(character => (
               <Characters key={Date.now()}
                    name = {character.name}
                    DOB = {character.birth_year}
                    height = {character.height}
                    eye_color = {character.eye_color}
                    skinColor = {character.skin_color}
                    hairColor = {character.hair_color}
                    mass ={character.mass}
               />
           ))}
            
        </div>
        
    )
    
}


export default List;