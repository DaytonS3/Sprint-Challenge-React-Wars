import React from 'react';
import Characters from './Characters';



function List(props) {
    return(
        <div>
           {props.characters.map(character => (
               <Characters 
                    name = {character.name}
               />
           ))}
            
        </div>
        
    )
    
}


export default List;