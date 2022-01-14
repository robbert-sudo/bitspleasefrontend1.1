import React, {useState} from "react";
import {Link} from "react-router-dom";
import './GamesList.css'
import FullGame from "./FullGame";



function GameSummary({game}) {
    const [gameData, setGameData ] = useState([]);
    // setGameData(game);


    return (
        <div className="gamelist"
        >
        <h1>{game.name} </h1>

            <FullGame game={game} />
        </div>
    );

}

export default GameSummary;