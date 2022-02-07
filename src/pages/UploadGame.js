import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";
import "./UploadGame.css";

function UploadGame() {
    //state voor het formulier
    const [gameName, setGameName] = useState(null);
    const [system, toggleSystem] = useState("");
    const [developer, setDeveloper] = useState("");
    const [price, setPrice] = useState(null);
    const [postImage, setPostImage] = useState({
       image: "",
    });

    //state voor functionaliteit
    const history = useHistory()
    const {user} = useContext(AuthContext);
    const source = axios.CancelToken.source();

    useEffect(() => {
        const source = axios.CancelToken.source();
        return function cleanup() {
            source.cancel();
        }
    }, [])

    async function handleGameUpload(e) {
        e.preventDefault();

        console.log(gameName);
        console.log(system);
        console.log(developer);
        console.log(postImage);
        console.log(postImage.image);

        if (gameName !== null) {
            if (price !== null) {
                console.log(user.user_id);
                try {
                    await axios.post('http://localhost:8080/games', {
                        "name": gameName,
                        "system": system,
                        "developer": developer,
                        "uploader_id": user.user_id,
                        "uploader_name": user.username,
                        "price": price,
                        "image": postImage.image,
                    }, {
                        cancelToken: source.token,
                    });
                    history.push("games");
                } catch (e) {
                    console.error(e);
                }
            } else {
                console.log("naam is een verplicht veld!");
            }
        } else {
            console.log("prijs is een verplicht veld.");
        }
    }


    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                resolve(fileReader.result);
            };
            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };


    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        console.log(file);
        const base64 = await convertToBase64(file);
        console.log(base64);
        setPostImage({...postImage, "image": base64});
        console.log(postImage);
    };



    return (
        <>
            <h1>Upload game: </h1>
            <form className="gameuploaden"
                  onSubmit={handleGameUpload}>
                <p>Invoervelden</p>

                <div className="namefield">
                <label htmlFor="gamename">Game name</label>
                <input
                    id="gamename"
                    type="text"
                    name="gamename"
                    onChange={(e) => setGameName(e.target.value)}
                    placeholder="(verplicht)"
                />
                </div>

                <div className="systemfield">
                    <label htmlFor="systemname">systeem</label>
                    <select name="system"
                           onChange={(e)=> toggleSystem(e.target.value)}
                            >
                        <option value="gameboy">gameboy</option>
                        <option value="gameboy color">gameboy color</option>
                        <option value="gameboy advance">gameboy advance</option>
                        <option value="nes">nes</option>
                        <option value="snes">snes</option>
                        <option value="nintendo 64">nintendo 64</option>
                        <option value="gamecube">gamecube</option>
                        <option value="game gear">game gear</option>
                        <option value="master system">master system</option>
                        <option value="megadrive">megadrive</option>
                        <option value="dreamcast">dreamcast</option>
                        <option value="psx">psx</option>
                    </select>
                </div>

                <div className="developerfield">
                    <label htmlFor="developername">developer</label>
                <input
                    id="developername"
                    type="text"
                    name="developer"
                    onChange={(e) => setDeveloper(e.target.value)}
                    placeholder="developer"
                />
                </div>

                <div className="pricefield">
                    <label htmlFor="price">prijs</label>
                <input
                    id="price"
                    type="number"
                    name="price"
                    step="0.01"
                    min="0"
                    onChange={(e)=> setPrice(e.target.value)}
                    placeholder="(verplicht)"
                />
                </div>



                <label htmlFor="Image">foto upload</label>
                <input
                    id="Image"
                    type="file"
                    name="myImage"
                    accept=".jpeg, .png, .jpg"
                    onChange={(e) => handleFileUpload(e)}
                />


                <button
                    type="submit"
                >
                    Submit
                </button>

            </form>
        </>


    );
}

export default UploadGame;