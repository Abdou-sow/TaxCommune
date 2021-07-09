import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import moment from 'moment';


const History = (props) => {
    const [payements, setPayements] = useState([])


    useEffect(async () => {
        const baka = props.numero
        console.log("payements dans history :", props.numero);

        const response = await axios.get("http://localhost:9001/payment/" + baka)
        console.log("response dans history:", response);
        setPayements(response.data.userPaymentList)
    }, [])

    return (
        <div>
            <ul class="list-group">
                {payements.map((elem) => <li class="list-group-item">prix payer :{elem.amount}<br />date de payement: {moment(elem.paidon).format("DD/MM/YYYY")}</li>)}
            </ul>
        </div>
    )
}
export default History;