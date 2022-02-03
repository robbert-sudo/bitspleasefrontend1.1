import React from "react";
import {useHistory} from "react-router-dom";


function AdminPage() {
    const history = useHistory();



    return (
        <>
            <button
                onClick={()=> history.push("/adminpage/users")}

            >
                Bekijk alle gebruikers
            </button>
            <button>
                Verwijder gebruiker
            </button>
            <button>
                maak gebruiker administrator
            </button>


        </>
    );
}

export default AdminPage;