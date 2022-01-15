import React from "react";
import './GamesList.css'
import FullGame from "./FullGame";



function GameSummary({game}) {

    return (
        <div className="gamelist"
        >
        <h1>{game.name} </h1>

            <FullGame game={game} />
        </div>
    );

}

export default GameSummary;