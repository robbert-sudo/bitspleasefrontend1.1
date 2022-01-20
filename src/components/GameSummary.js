import React, {useState} from "react";
import './GameSummary.css'
import {useHistory} from "react-router-dom";
import FullGame from "./FullGame";
import CheckOut from "../pages/CheckOut";


function GameSummary({game}) {

    const history = useHistory();
    const [gameId, toggleGameId] = useState(game.id);
    const [fullGame, toggleFullGame] = useState(false);

    function fanOut() {
        toggleFullGame(true);
        console.log(gameId);
        console.log(game.id);
        toggleGameId(game.id);
        console.log(gameId);
        console.log(fullGame);
    }

    function fanIn() {
        toggleFullGame(false);
    }



    function goToBuy() {
        history.push("/checkout");
    }

    return (
        <>
            {!fullGame ?

                    <div className="gamelist"
                         onClick={fanOut}
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
                :
                <>
                <div
                    onClick={fanIn}
                >
                    <FullGame game={game}/>
                </div>
                    <button
                        className="buybutton"
                        type="button"
                        onClick={goToBuy}
                    >
                        Nu kopen
                    </button>
                   {/*<div className="buybutton"*/}
                   {/*        onClick={buyGame(game)}*/}
                   {/*>*/}
                   {/*    Nu kopen*/}
                   {/*</div>*/}
                </>
            }
        </>
    );
}

export default GameSummary;