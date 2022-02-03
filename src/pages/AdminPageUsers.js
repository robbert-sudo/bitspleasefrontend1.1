import React, {useEffect, useState} from "react";
import axios from "axios";

function AdminPageUsers() {
    const [userData, setUserData] = useState();

    useEffect(() => {

        const source = axios.CancelToken.source();

        async function fetchUserData() {
            const token = localStorage.getItem('token');
            try {
                const result = await axios.get(`http://localhost:8080/users`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    },
                    cancelToken: source.token,
                });

                console.log(result);
                console.log(result.data);
                setUserData(result.data);

            } catch (e) {
                console.error(e);
            }
        }
        fetchUserData();
    },[])


    return (
        <>
            {userData && userData.map((userData)=>
                <>
                    <h3>user_id: {userData.user_id}</h3>
            <h5>username: {userData.username}</h5>
                </>
            )}

        </>
    );


}

export default AdminPageUsers;