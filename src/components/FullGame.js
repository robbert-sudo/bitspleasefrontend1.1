import React from "react";

function FullGame({game}) {

    return (
        <div className="fullgame"
        >
            <h1>{game.id}</h1>
            <h1>{game.name}</h1>
            <h1>{game.system}</h1>
            <h1>{game.uploader_id}</h1>
            <h1>{game.image}</h1>

        </div>
    );
}

export default FullGame;