import React, {useEffect, useState} from "react";
import './FullGame.css';
import {useParams} from "react-router-dom";
import axios from "axios";



function FullGame() {

    const { gameId } = useParams();
    const [gameData, setGameData] = useState();
    const [userAverage, toggleUserAverage] = useState();
    const source = axios.CancelToken.source();


    useEffect(()=> {


        async function fetchGameDataById() {
            const token = localStorage.getItem('token');
            try {
                const result = await axios.get(`http://localhost:8080/games/id/${gameId}`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    },
                    cancelToken: source.token,
                });

                setGameData(result.data);
                console.log(result.data);
                console.log(gameData);

            } catch (e) {
                console.error(e);
            }
        }

        fetchGameDataById();
    },[])





    //userrating


    return (

        <>
            {gameData &&
        <div className="fullgame"
        >
            <div className="im">
                {gameData.image && <img className="fullgamepic" src={gameData.image} alt="gamepicture"/>}
            </div>
            <div className="gameinfo">
                <h1>{gameData.name}</h1>
                <h5>Id: {gameData.id}</h5>
                <h5>System: {gameData.system}</h5>
                <h5>Developer: {gameData.developer}</h5>
            </div>
            <div className="sellerinfo">
                <h5>Uploader: {gameData.uploader_name}</h5>
                <h1>&euro; {gameData.price}</h1>
                <h6>gemiddelde rating van deze gebruiker</h6>
                <h2>{}</h2>
                <button className="votebutton" >stem op deze gebruiker</button>
            </div>
        </div> }
        </>
    );
}

export default FullGame;