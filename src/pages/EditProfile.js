import React, {useContext} from "react";
import axios from "axios";
import {AuthContext} from "../context/AuthContext";


function EditProfile() {
    const {user, logout} = useContext(AuthContext);


    async function handleDisable() {
        const source = axios.CancelToken.source();
        const token = localStorage.getItem('token');
        logout();

        try {
            await axios.patch(`http://localhost:8080/user/${user.user_id}`, {enabled: false}, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                cancelToken: source.token,
            });

        } catch (e) {
            console.error(e);
        }
    }



    return (
        <>
            <h1>Weet u zeker dat u uw account wil verwijderen?</h1>
            <form
                onSubmit={handleDisable}
            >
                <input
                    type="checkbox"
                    required={true}
                /> ja, ik weet het zeker!
                <button type="submit">verwijder mijn account aub.</button>
            </form>
        </>
    );
}

export default EditProfile;