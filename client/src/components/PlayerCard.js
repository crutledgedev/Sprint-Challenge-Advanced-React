import React from 'react';


const PlayerCard = (props) => {
    return(
        <div>
            <h4>{props.player.name}</h4>
            <p>{props.player.country}</p>
        </div>
    ) 
}

export default PlayerCard;