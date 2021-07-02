import React from 'react';
import { useState } from 'react';
import Modal from 'react-modal';
// import ModifInfo from './ModifInfo';TODO

const InfoPerso = () => {

    const [name, setName] = useState("Takeoff");
    const [surname, setSurname] = useState("Take");
    const [birth, setBirth] = useState("01-01-1999");
    const [addressPerso, setAddressPerso] = useState("15 rue de la liberte");
    const [adressActivite, setAdressActivite] = useState("22 avenue jean jaures");
    const [activite, setActivite] = useState("Boulanger");
    const [commune, setCommune] = useState("Bagnolet");
    const [telephone, setTelephone] = useState("0112234567");

    const [modalIsOpen, setIsOpen] = useState(false);

    const fixtureInfoPerso = {
        name: "Takeoff",
        userName: "Take",
        birth: "01-01-1999",
        addressPerso: "15 rue de la liberte",
        adressActivite: "22 avenue jean jaures",
        activite: "Boulanger",
        commune: "Bagnolet",
        telephone: "0112234567",
    }

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



    return (
        <div>
            <h1 className="text-center">EspacePerso</h1>
            <div className="container">
                <div className="row">
                    <div className="border border-dark col-4">
                        <ul>
                            <li><b>Name:</b> {fixtureInfoPerso.name}</li>
                            <li><b>Surname:</b> {fixtureInfoPerso.surname}</li>
                            <li><b>addressPerso:</b> {fixtureInfoPerso.addressPerso}</li>
                            <li><b>adressActivite:</b> {fixtureInfoPerso.adressActivite}</li>
                            <li><b>activite:</b> {fixtureInfoPerso.activite}</li>
                            <li><b>commune:</b> {fixtureInfoPerso.commune}</li>
                            <li><b>telephone:</b> {fixtureInfoPerso.telephone}</li>
                        </ul>
                    </div>
                    <div className="col-4 text-center align-middle text-wrap">
                        <button className="btn btn-warning" onClick={() => setIsOpen(true)}>Modifier</button>
                    </div>

                    {/* 
                    TODO
                    <ModifInfo
                        name={name}
                        surname={surname}
                        addressPerso={addressPerso}
                        adressActivite={adressActivite}
                        activite={activite}
                        commune={commune}
                        telephone={telephone}
                    /> */}
                    <Modal isOpen={modalIsOpen} style={customStyles}>
                        <h2>Modifications</h2>
                        <div className="input-group input-group-sm mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-sm">Name</span>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder={fixtureInfoPerso.name} className="form-control" />
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
                            <span className="input-group-text" id="inputGroup-sizing-sm">activite</span>
                            <input type="text" value={activite} onChange={(e) => setActivite(e.target.value)} className="form-control" />
                        </div>
                        <div className="input-group input-group-sm mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-sm">commune</span>
                            <input type="text" value={commune} onChange={(e) => setCommune(e.target.value)} className="form-control" />
                        </div>
                        <div className="input-group input-group-sm mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-sm">Telephone</span>
                            <input type="text" value={telephone} onChange={(e) => setTelephone(e.target.value)} className="form-control" />
                        </div>
                        <button onClick={() => setIsOpen(false)}>Sauver et sortir</button>
                    </Modal>
                    <div className="border border-dark col-4 text-center">
                        <h2 >Payement</h2>
                        <p>modalité de payement choisi</p>
                        <p>import à payer : 300.000 cfa</p>
                        <div className="text-center">
                            <a href="/Payement"><button>Payer</button></a>
                        </div>

                    </div>

                </div>

            </div>

        </div >
    );

}

export default InfoPerso;
