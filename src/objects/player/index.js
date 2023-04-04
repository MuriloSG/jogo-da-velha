import React from "react";
import './style.css';
import x from '../../assets/X.png';
import o from '../../assets/o.png';
const Player = (props) => {
    const players = [];
    players ['x'] = x;
    players ['o'] = o;

    return(
            <button className="player"><img src = {players[props.player]}/></button>
        )
};
export default Player;