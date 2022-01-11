import React, {useEffect, useState} from "react";
import {Link, useHistory} from "react-router-dom";
import axios from "axios";

function SignUp() {
    //state voor het formulier
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, togglePassword] = useState("");

    //state voor functionaliteit
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const history = useHistory()
    const source = axios.CancelToken.source();

    useEffect(() => {
        return function cleanup() {
            source.cancel();
        }
    },[])

    async function handleRegister(e) {
        e.preventDefault();
        toggleError(false);
        toggleLoading(true);

        try {
            await axios.post('http://localhost:8080/user', {
                "username": username,
                "password": password,
                "email": email,
            }, {
                cancelToken: source.token,
            });
            history.push("signin");
        } catch (e) {
            console.error(e);
            toggleError(true);
        }
        toggleLoading(false);
    }


    return (
        <>
            <h1>Registreren</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
                maiores nobis officia pariatur porro, possimus praesentium
                ratione velit. Consequatur cupiditate doloremque mollitia? Ducimus
                earum eius harum magni minima nostrum, quisquam?</p>
            <form className="registreren"
                  onSubmit={handleRegister}>
                <p>Invoervelden</p>
                <input
                    type="text"
                    name="username"
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="username"
                />
                <input
                    type="text"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email"
                />
                <input
                    type="password"
                    name="password"
                    onChange={(e) => togglePassword(e.target.value)}
                    placeholder="password"
                />
                <button
                    type="submit"
                >
                    Registreer nu
                </button>
            </form>
            <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
        </>
    );
}

export default SignUp;