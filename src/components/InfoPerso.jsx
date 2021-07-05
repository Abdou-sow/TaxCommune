import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { useHistory } from "react-router-dom";
// import ModifInfo from './ModifInfo';TODO
import Pay from '../components/pay';

const InfoPerso = () => {

    let history = useHistory()

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [birth, setBirth] = useState("");
    const [addressPerso, setAddressPerso] = useState("");
    const [adressActivite, setAdressActivite] = useState("");
    const [telephone, setTelephone] = useState("");
    const [key, setKey] = useState("");
    const [modalIsOpen, setIsOpen] = useState(false);

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    const tel = ("telephone", localStorage.getItem("secretKey").split(" ")[1]);
    useEffect(async () => {
        const response = await axios.get("http://localhost:9001/telephone/" + tel)
        console.log("response", response);
        setName(response.data.telephoneExist.surname)
        setSurname(response.data.telephoneExist.firstname)
        setAddressPerso(response.data.telephoneExist.address_personal)
        setAdressActivite(response.data.telephoneExist.address_activity)
        setTelephone(response.data.telephoneExist.telephone)
        setKey(localStorage.getItem("secretKey").split(" ")[0])

    })

    const logout = () => {

        history.push("/Connexion")

        localStorage.clear()

        alert("okkk")
    }

    return (
        <div>
            <h1 className="text-center">EspacePerso</h1>
            <div className="container">
                <div className="row">
                    <div className="border border-dark col-4">
                        <ul>
                            <li><b>Name:</b> {name}</li>
                            <li><b>Surname:</b> {surname}</li>
                            <li><b>addressPerso:</b> {addressPerso}</li>
                            <li><b>adressActivite:</b> {adressActivite}</li>
                            <li><b>telephone:</b> {telephone}</li>
                        </ul>
                    </div>
                    <div className="col-4 text-center align-middle text-wrap">
                        <button className="btn btn-warning" onClick={() => setIsOpen(true)}>Modifier</button>
                        <button className="btn btn-warning" onClick={() => logout()}>LOGOUT</button>
                    </div>
                    <Modal isOpen={modalIsOpen} style={customStyles}>
                        <h2>Modifications</h2>
                        <div className="input-group input-group-sm mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-sm">Name</span>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder={name} className="form-control" />
                        </div>
                        <div className="input-group input-group-sm mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-sm">Surname</span>
                            <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} className="form-control" />
                        </div>
                        <div className="input-group input-group-sm mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-sm">addressPerso</span>
                            <input type="text" value={addressPerso} onChange={(e) => setAddressPerso(e.target.value)} className="form-control" />
                        </div>
                        <div className="input-group input-group-sm mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-sm">adressActivite</span>
                            <input type="text" value={adressActivite} onChange={(e) => setAdressActivite(e.target.value)} className="form-control" />
                        </div>
                        <div className="input-group input-group-sm mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-sm">Telephone</span>
                            <input type="text" value={telephone} onChange={(e) => setTelephone(e.target.value)} className="form-control" />
                        </div>
                        <button onClick={() => setIsOpen(false)}>Sauver et sortir</button>
                    </Modal>
                    <div className="border border-dark col-4 text-center">
                        <h2 >Payement</h2>
                        <Pay />
                        <div className="text-center">
                            <a><button>Payer</button></a>
                            {/* <a href="/Payement"><button>Payer</button></a> */}
                        </div>

                    </div>

                </div>

            </div>

        </div >
    )
}

export default InfoPerso;
