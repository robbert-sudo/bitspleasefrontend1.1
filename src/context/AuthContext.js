import React, {createContext, useState, useEffect } from "react";
import {useHistory} from "react-router-dom";
import jwt_decode from 'jwt-decode';
import axios from "axios";

export const AuthContext = createContext({});

function AuthContextProvider({children}) {
    const [isAuth, toggleIsAuth] = useState({
        isAuth: false,
        user: null,
        status: 'pending',
    });

    const history = useHistory();

    //mounting effect
    useEffect(() => {
        // haal jwt op uit de local storage
        const token = localStorage.getItem('token');

        //als er een token is, wordt gebruikers data opgehaald
        if (token) {
            const decoded = jwt_decode(token);
            fetchUserData(decoded.sub, token);
        } else {
            //als er geen token is doen we niks, en zetten nwe status op 'done'
            toggleIsAuth({
                isAuth: false,
                user: null,
                status: 'done',
            });
        }
    },[]);


    async function login(JWT) {
        //zet token in de local storage
        localStorage.setItem('token', JWT);
        // decode de token zodat we de id(username) van de gebruiker hebben en data kunnen ophalen voor de context
        const decoded = jwt_decode(JWT);
        console.log(decoded);

        //geef de ID, token en redirect-link mee aan de fetchData functie decoded.sub=username
        fetchUserData(decoded.sub, JWT, `/profile`); //decoded.payload.sub payload ertussenuit gehaald.
        // link de gebruiker door naar de profielpagina
        // history.push('/profile')
    }

    function logout() {
        localStorage.clear();
        toggleIsAuth({
            isAuth: false,
            user: null,
            status: 'done',
        });

        console.log("Gebruiker is uitgelogd.");
        history.push("/");
    }

    // omdat fetchUserData in login- en mounting effect wordt gebruikt, is hij hier gedeclareert
    async function fetchUserData(id, token, redirectUrl) {

        try {
            // haal gebruikersData op met de token en id(username) van de gebruiker
            const {result} = await axios.get(`http://localhost:8080/users/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(result)

                // zet de gegevens in de state
            toggleIsAuth({
                ...isAuth,
                isAuth: true,
                user: {
                    username: result.data.username,
                    enabled: result.data.enabled,
                    authorities: result.data.authorities,
                },
                status: 'done',
            });
            // als er een redirect URL is meegegeven (bij het mount-effect doen we dit niet) linken we daar naartoe
            // als we de history.push in de login-functie zouden zetten, linken we door voor de gebruiker is opgehaald!
           if (redirectUrl) {
               history.push(redirectUrl);
           }

        } catch (e) {
            console.error(e);
            // ging er iets mis? Dan plaatsen we geen data in de state
            toggleIsAuth({
                isAuth: false,
                user: null,
                status: 'done',
            });
        }
    }



    const contextData = {
        isAuth: isAuth.isAuth,
        user: isAuth.user,
        login: login,
        logout: logout,
    }

    return (
        <AuthContext.Provider value={contextData}>
            {isAuth.status === 'done' ? children : <p>Loading...</p>}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;