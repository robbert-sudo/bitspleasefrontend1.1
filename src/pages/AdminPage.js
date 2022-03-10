import React from "react";
import {useHistory} from "react-router-dom";


// elke role kan naar deze url (adminpage)

function AdminPage() {
    const history = useHistory();



    return (
        <>
            <button
                onClick={()=> history.push("/adminpage/users")}

            >
                Bekijk alle gebruikers
            </button>
            <button
                onClick={()=> history.push("/adminpage/deletedusers")}
            >
                Verwijder gebruiker
            </button>
        </>
    );
}

export default AdminPage;