import React, {useEffect, useState} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";


function UploadGame() {
    //state voor het formulier
    const [gameName, setGameName] = useState("");
    const [system, toggleSystem] = useState("");
    const [developer, setDeveloper] = useState("");
    const [postImage, setPostImage] = useState({
       image: "",
    });

    //state voor functionaliteit
    const history = useHistory()
    const source = axios.CancelToken.source();

    useEffect(() => {
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

        try {
            await axios.post('http://localhost:8080/games', {
                "name": gameName,
                "system": system,
                "developer": developer,
                "uploader_id": 1,
                "image": postImage.image,
            },{
                cancelToken: source.token,
            });
            history.push("games");
        } catch (e) {
            console.error(e);
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
                <input
                    type="text"
                    name="gamename"
                    onChange={(e) => setGameName(e.target.value)}
                    placeholder="GameName"
                />
                <input
                    type="text"
                    name="system"
                    onChange={(e) => toggleSystem(e.target.value)}
                    placeholder="system"
                />
                <input
                    type="text"
                    name="developer"
                    onChange={(e) => setDeveloper(e.target.value)}
                    placeholder="developer"
                />


                {/*//uploader_id meegeven, geen keuze of optie hierin*/}



                <input
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