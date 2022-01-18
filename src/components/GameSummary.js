import React, {useState} from "react";
import './GameSummary.css'
import {Link, useHistory} from "react-router-dom";
import FullGame from "./FullGame";


function GameSummary({game}) {

    const history = useHistory();
    const [gameId, toggleGameId] = useState(game.id);
    const [fullGame, toggleFullGame] = useState(false);

    function goToFullGame() {
        toggleFullGame(true);
        console.log(gameId);
        console.log(game.id);
        toggleGameId(game.id);
        console.log(gameId);
        console.log(fullGame);

    }


    return (
        <>
            {!fullGame ? <>
                    <button
                        onClick={goToFullGame}>
                        <div className="gamelist"
                        >
                            <div className="empty"></div>
                            <div className="imagecontainer">
                                {game.image && <img className="gamepic" src={game.image} alt="gamepicture"/>}
                            </div>
                            {/*<FullGame game={game}/>*/}
                            {/*<h2>{game.name} </h2>*/}
                            <div className="gamestats">
                                <h2>{game.name}</h2>
                                <h3>{game.system}</h3>
                            </div>
                            <div className="price">
                                <h1>&euro;{game.price}</h1>
                            </div>
                        </div>
                    </button>
                </>
                : <FullGame game={game}/>

            }
        </>
    )
        ;
}

export default GameSummary;