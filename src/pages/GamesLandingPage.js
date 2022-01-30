import React from "react";
import {useHistory} from "react-router-dom";
import './GamesLandingPage.css';

function GamesLandingPage() {

    const history = useHistory()


    return (
        <>
            <button
                type="button"
                onClick={() => history.push("/games")}
            >
                bekijk alle games
            </button>
            <button className="uploadbutton"
                    type="button"
                    onClick={() => history.push("/uploadgame")}
            >
                Game uploaden
            </button>


            <div>
                <button className="searchbutton"
                        type="button"
                        onClick={()=> history.push("/gamesbyname")}>
                    zoek game op naam
                </button>


            </div>
        </>
    );
}

export default GamesLandingPage;