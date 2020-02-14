import React from 'react';


const PlayerCard = (props) => {
    return(
        <div className="player">
            <p>Player:</p>
            <h4> {props.player.name}</h4>
            <p>Representing:</p>
            <h4>{props.player.country}</h4>
    <p>Search Popularity: {props.player.searches}</p>
        </div>
    ) 
}

export default PlayerCard;