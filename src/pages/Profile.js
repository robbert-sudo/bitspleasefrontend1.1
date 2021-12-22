import React, {useContext, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";
import axios from "axios";
import jwt_decode from "jwt-decode";

function Profile() {
    const [profileData, setProfileData] = useState({});
    const { user } = useContext(AuthContext);

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
                setProfileData(result.data);
            } catch (e) {
                console.error(e);
            }
        }

        fetchProfileData();

        return function cleanup() {
            source.cancel();
        }
    },[])



    return (
        <>
            <h1>Profielpagina</h1>
            <section>
                <h2>Gegevens</h2>
                <p><strong>Gebruikersnaam:</strong> {user.username}</p>
                <p><strong>Is user enabled:</strong> {user.enabled}</p>
                <p><strong>Authorities: </strong> {profileData.authorities}</p>
            </section>

            <p>Terug naar de <Link to="/">Homepagina</Link></p>
        </>
    );
}

export default Profile;