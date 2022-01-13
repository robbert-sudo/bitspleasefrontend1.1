import React from "react";

function FullGame({game}) {

    const encodedBase64 = `${game.image}`;


    return (
        <div className="fullgame"
        >
            <h1>Id: {game.id}</h1>
            <h1>Name: {game.name}</h1>
            <h1>System: {game.system}</h1>
            <h1>Developer: {game.developer}</h1>
            <h1>Uploader id: {game.uploader_id}</h1>
            <img src={game.image} />
            <img src={encodedBase64}/>
        </div>
    );
}

export default FullGame;