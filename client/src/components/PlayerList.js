import React, { Component } from 'react';
import PlayerCard from './PlayerCard';
import axios from 'axios';



class PlayerList extends Component {
    constructor(){
        super();
        this.state = {
        players: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/players')
        .then(response => {
            this.setState({
                players: response.data
            })
        })
        .catch(err => console.log(err));
    }

    render(){
        return <div>{this.state.players.map(player => <PlayerCard player={player} key={player.id}/>)}</div>
    }
}

export default PlayerList; 