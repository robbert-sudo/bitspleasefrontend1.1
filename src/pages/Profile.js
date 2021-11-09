import React from "react";
import {Link} from "react-router-dom";

function Profile() {
    return (
        <>
            <h1>Profielpagina</h1>

            <p>Terug naar de <Link to="/">Homepagina</Link></p>
        </>
    );
}

export default Profile;