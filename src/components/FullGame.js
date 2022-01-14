import React from "react";

function FullGame({game}) {

    // const encodedBase64 = `${game.image}`;


    return (
        <div className="fullgame"
        >
            <h5>Id: {game.id}</h5>
            <h5>System: {game.system}</h5>
            <h5>Developer: {game.developer}</h5>
            <h5>Uploader id: {game.uploader_id}</h5>
            {game.image && <img src={game.image} />}
            {/*<img src={encodedBase64}/>*/}
        </div>
    );
}

export default FullGame;