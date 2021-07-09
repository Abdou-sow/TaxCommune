import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { useHistory } from "react-router-dom";
import Pay from '../components/pay';
import History from './History.jsx';
import Clock from './Clock';

const InfoPerso = () => {

    let history = useHistory()
    const tel = ("telephone", localStorage.getItem("secretKey").split(" ")[1]);

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [addressPerso, setAddressPerso] = useState("");
    const [adressActivite, setAdressActivite] = useState("");
    const [telephone, setTelephone] = useState("");
    const [key, setKey] = useState(""); //todo pour savoitr le temps ecouler 
    const [modalIsOpen, setIsOpen] = useState(false);
    const [prix, setPrix] = useState("")
    const [acivity, setActivity] = useState("")

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

    useEffect(async () => {
        const response = await axios.get("http://localhost:9001/telephone/" + tel)
        console.log("response", response);
        setName(response.data.validUser.surname)
        // setId(response.data.validUser._id)
        setSurname(response.data.validUser.firstname)
        setAddressPerso(response.data.validUser.address_personal)
        setAdressActivite(response.data.validUser.address_activity)
        setTelephone(response.data.validUser.telephone)
        setKey(localStorage.getItem("secretKey").split(" ")[0])
        setPrix(response.data.userActivityPrix)
        setActivity(response.data.userActivity)

    }, [])

    const modification = async () => {

        try {
            const infoModifie = {
                firstname: name,
                surname: surname,
                address_personal: addressPerso,
                address_activity: adressActivite,
                telephone: telephone,
            }

            const response = await axios.put("http://localhost:9001/modif/" + telephone, infoModifie)
            console.log(response);
            alert("tes donnees ont bien etait modifiez")
            setIsOpen(false)

        } catch (error) {
            console.log(error);
        }

    }

    const validePaye = {
        telephone: telephone,
        amount: prix

    }

    const paye = async () => {

        const response = await axios.post("http://localhost:9001/payment", validePaye)
        console.log(response);
        alert("vous avez effectuer un payement")
        window.location.reload();
    }

    const logout = () => {

        history.push("/Connexion")

        localStorage.clear()

        alert(`${name} a été déconnecté`)
    }

    // console.log(document.getElementById("MyClockDisplay"));

    return (
        <div>
            <h2 className="text-center">Espace Personnelle</h2>
            <div className="container-fluid">
                <div className="row">
                    <div class="list-group col-4">
                        <button type="button" class="list-group-item list-group-item-action"><b>Prenom: </b>{name}</button>
                        <button type="button" class="list-group-item list-group-item-action"><b>Nom: </b>{surname}</button>
                        <button type="button" class="list-group-item list-group-item-action"><b>Adresse personnel: </b>{addressPerso}</button>
                        <button type="button" class="list-group-item list-group-item-action"><b>Adresse activité: </b>{adressActivite}</button>
                        <button type="button" class="list-group-item list-group-item-action"><b>Telephone: </b>{telephone}</button>
                        <div className="text-center">
                            <button className="btn btn-warning" onClick={() => setIsOpen(true)}>Modifier</button>
                        </div>
                    </div>
                    <div className="col-4 text-center align-middle text-wrap">
                        <button className="btn btn-danger" onClick={() => logout()}>LOGOUT</button>
                        <Clock />
                    </div>
                    <div className="class=list-group col-4">
                        <h2>Payement</h2>
                        {/* <Pay /> */}
                        <div className="">
                            <div>
                            <button type="button" class="list-group-item list-group-item-action"><b>Activité: </b>{acivity}</button>
                            <button type="button" class="list-group-item list-group-item-action"><b>Prix: </b>{prix}</button>
                                    
                        
                            </div>
                            <div className="text-center">
                                <a><button onClick={paye}>Payer</button></a>
                            </div>
                            {/* <a href="/Payement"><button>Payer</button></a> */}
                        </div>

                    </div>
                </div>

                <div className="row ">
                    <div className="text-center">
                        <h2>history de payement</h2>
                        <History
                            numero={tel} />
                    </div>
                </div>


                <Modal isOpen={modalIsOpen} style={customStyles}>
                    <h2>Modifications</h2>
                    <div className="input-group input-group-sm mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Name</span>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" />
                    </div>
                    <div className="input-group input-group-sm mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Surname</span>
                        <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} className="form-control" />
                    </div>
                    <div className="input-group input-group-sm mb-3">
                        <span className="input-group-text" id="in-putGroup-sizing-sm">addressPerso</span>
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
                    <button onClick={modification}>Sauver et sortir</button>
                </Modal>

            </div>

        </div >
    )
}

export default InfoPerso;
