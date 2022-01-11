import React, {useContext, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";
import axios from "axios";
import jwt_decode from "jwt-decode";

function Profile() {
    const [profileData, setProfileData] = useState({
        username: null,
        enabled: null,
        // authorities: null,
        user_id: null,
    });
    const {user} = useContext(AuthContext);

    useEffect(() => {
        const source = axios.CancelToken.source();

        //haal de pagina content op in de mounting-cycle
        async function fetchProfileData() {
            // haal de token uit de local storage om in het GET-request te bewijzen dat we geauthoriseert zijn
            const token = localStorage.getItem('token');


            try {
                const decoded = jwt_decode(token);
                const username = decoded.sub;
                console.log(username);
                const result = await axios.get(`http://localhost:8080/user/${username}`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    },
                    cancelToken: source.token,
                });
                console.log(result);
                setProfileData({
                    username: result.data.username,
                    enabled: result.data.enabled,
                    // authorities: result.data.authorities,
                    user_id: result.data.user_id,
                });


            } catch (e) {
                console.error(e);
            }

        }

        fetchProfileData();

        return function cleanup() {
            source.cancel();
        }
    }, [])

    if (profileData.username !== null) {
        console.log(profileData);
    }


    return (
        <>
            <h1>Profielpagina</h1>
            <section>
                <h2>Gegevens</h2>
                <p><strong>Gebruikersnaam:</strong> {profileData.username}</p>
                <p><strong>Is user enabled:</strong> {profileData.enabled}</p>
                <p><strong>User_id: </strong> {profileData.user_id}</p>
            </section>

            <p>Terug naar de <Link to="/">Homepagina</Link></p>
        </>
    );
}

export default Profile;