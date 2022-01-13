import React from "react";
import {Link} from "react-router-dom";
import './GamesList.css'

function GamesList({game}) {

    return (
        <div className="gamelist"
        >
        <Link to="/games">{game.id} {game.name} {game.system}</Link>
        </div>
    );

}

export default GamesList;