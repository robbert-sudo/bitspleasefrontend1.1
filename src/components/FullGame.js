import React, {useEffect, useState} from "react";
import './FullGame.css';
import axios from "axios";

function FullGame({game}) {
    const source = axios.CancelToken.source();

    return (
        <div className="fullgame"
        >

            <h5>Id: {game.id}</h5>
            <h5>System: {game.system}</h5>
            <h5>Developer: {game.developer}</h5>
            <h5>Uploader id: {game.uploader_id}</h5>
            <h5>prijs: {game.price}</h5>

        </div>
    );
}

export default FullGame;