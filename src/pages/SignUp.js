import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
    return (
        <>
            <h1>Registreren</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
                maiores nobis officia pariatur porro, possimus praesentium
                ratione velit. Consequatur cupiditate doloremque mollitia? Ducimus
                earum eius harum magni minima nostrum, quisquam?</p>
            <form>
                <p>Invoervelden</p>
            </form>
            <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
        </>
    );
}

export default SignUp;