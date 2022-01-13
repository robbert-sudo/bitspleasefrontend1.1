import React, {useEffect, useState} from "react";
import axios from "axios";
import FullGame from "../components/FullGame";

function Game() {
    const [gameData, setGameData] = useState([])
    const source = axios.CancelToken.source();

    useEffect(() => {

        async function fetchGameData() {
            const token = localStorage.getItem('token');
            try {
                const result = await axios.get(`http://localhost:8080/games/id/10`,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`
                        },
                        cancelToken: source.token,
                    });

                console.log(result.data);
                setGameData(result.data);
            } catch (e) {
                console.error(e);
            }
        }

        fetchGameData();
    }, [])

    return (
        <>
            {
                gameData && <FullGame game={gameData}/>
            }
        </>

    );
}

export default Game;