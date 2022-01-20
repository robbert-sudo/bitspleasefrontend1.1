import React, {useEffect, useState} from "react";
import axios from "axios";
import GameSummary from "../components/GameSummary";
import {useHistory} from "react-router-dom";
import "./Games.css";
import FullGame from "../components/FullGame";

function Games() {
    const history = useHistory();

    const [gamesData, setGamesData] = useState([]);
    const source = axios.CancelToken.source();


    useEffect(() => {

        // const source = axios.CancelToken.source();

        async function fetchGamesData() {
            const token = localStorage.getItem('token');
            try {
                const result = await axios.get(`http://localhost:8080/games`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    },
                    cancelToken: source.token,
                });

                console.log(result.data.length);
                console.log(result.data[0]);
                setGamesData(result.data);
                // console.log(gameData);

            } catch (e) {
                console.error(e);
            }
        }

        fetchGamesData();
    }, [])


    function searchGame() {
        return null;
    }

    const mapGameData = gamesData && gamesData.map((game) =>
        <GameSummary game={game}/>)

    return (
        <>
            {/*<div className="bars">*/}
            {/*    <input className="searchbar"*/}
            {/*           type="text"*/}
            {/*           onChange={(e) => toggleSearchName(e.target.value)}*/}
            {/*    />*/}
            {/*    <button className="searchbutton"*/}
            {/*            type="button"*/}
            {/*            onClick={searchGame}>*/}
            {/*        nu zoeken*/}
            {/*    </button>*/}

            {/*    <button className="uploadbutton"*/}
            {/*            type="button"*/}
            {/*            onClick={() => history.push("/uploadgame")}*/}
            {/*    >*/}
            {/*        Game uploaden*/}
            {/*    </button>*/}
            {/*</div>*/}
            {mapGameData}
        </>
    );
}

export default Games;