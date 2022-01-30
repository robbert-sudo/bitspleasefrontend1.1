import React from "react";
import './GameSummary.css'
import {useHistory} from "react-router-dom";

// import CheckOut from "../pages/CheckOut";


function GameSummary({game}, key) {

    const history = useHistory();

    function goToFullGame() {
        history.push(`/fullgamepage/${game.id}`);
    }


    return (
        <>

            <div className="gamelist"
                 onClick={goToFullGame}
                 key={key}
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


        </>
    );
}

export default GameSummary;