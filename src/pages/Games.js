import React, {useEffect, useState} from "react";
import axios from "axios";

function Games() {
    const [gameData, setGameData] = useState([]);


    useEffect(() => {

        const source = axios.CancelToken.source();

        async function fetchGameData() {
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
                setGameData(result.data);
                console.log(gameData);

            } catch (e) {
                console.error(e);
            }
        }

        fetchGameData();
    }, [])


    return (
        <>
            {
            gameData.map(x => <li> {x.name} {x.system} </li> )
            }
        </>
    );
}

export default Games;