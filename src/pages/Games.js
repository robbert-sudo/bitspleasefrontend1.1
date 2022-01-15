import React, {useEffect, useState} from "react";
import axios from "axios";
import GameSummary from "../components/GameSummary";

function Games() {
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


    return (
        <>
            {
                gamesData && gamesData.map((game) =>
                    <GameSummary game={game}/>)
            }
        </>
    );
}

export default Games;