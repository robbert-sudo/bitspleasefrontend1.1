import React, {useEffect, useState} from "react";
import './FullGame.css';
import axios from "axios";

function FullGame({game}) {
    const source = axios.CancelToken.source();

    console.log({game});


    return (
        <div className="fullgame"
        >
            <div className="im">
                {game.image && <img className="fullgamepic" src={game.image} alt="gamepicture"/>}
            </div>
            <div className="gameinfo">
                <h1>{game.name}</h1>
                <h5>Id: {game.id}</h5>
                <h5>System: {game.system}</h5>
                <h5>Developer: {game.developer}</h5>
            </div>
            <div className="sellerinfo">
                <h5>Uploader: {game.uploader_name}</h5>
                <h1>&euro; {game.price}</h1>
                <h6>gemiddelde rating van deze gebruiker</h6>
                <button className="votebutton" >stem op deze gebruiker</button>
            </div>
        </div>
    );
}

export default FullGame;