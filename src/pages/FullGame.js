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

            } catch (e) {
                console.error(e);
            }

        }

        fetchGameDataById();

    },[])



    useEffect(()=> {

        async function fetchUploaderRating(gameData) {
            const token = localStorage.getItem('token');
            try {
                const average = await axios.get(`http://localhost:8080/sellerratings/getaverage/${gameData.uploader_id}`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    },
                    cancelToken: source.token,
                });

                toggleUserAverage(average.data);
                console.log(average.data);


            } catch (e) {
                console.error(e);
            }
        }
        fetchUploaderRating(gameData);
    },[gameData])




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
                <h2>{userAverage}</h2>
                <button className="votebutton" >stem op deze gebruiker</button>
            </div>
        </div> }
        </>
    );
}

export default FullGame;