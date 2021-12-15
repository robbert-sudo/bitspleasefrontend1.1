import React, {useEffect, useState} from "react";
import axios from "axios";

function Games() {
    const [gameData, setGameData] = useState({});

    useEffect(() => {

        async function fetchGameData() {

            try {
                const result = await axios.get(`http://localhost:8080/games`);
                setGameData(result)
                console.log(gameData);
            } catch (e) {
                console.error(e);
            }
        }

    },[])



    return (
        <>

        </>
    );
}

export default Games;