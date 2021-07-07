import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';


const AfficheUsersAdm = () => {
    // const [users, setUsers] = useState([])


    // useEffect(async () => {

    //     const response = await axios.get("http://localhost:9001/users/")
    //     console.log("response dans history:", response);
    //     // setUsers()
    // }, [])

    return (
        <div>
            <ul>
                {/* {payements.map((elem) => <li>{elem.amount}</li>)} */}
            </ul>
            <h5>AfficheUsersAdm .....</h5>
        </div>
    )
}
export default AfficheUsersAdm;