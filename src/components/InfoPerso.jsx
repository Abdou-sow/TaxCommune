import React from 'react';
import { useState } from 'react';
import Modal from 'react-modal';

const InfoPerso = () => {

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [birth, setBirth] = useState("");
    const [addressPerso, setAddressPerso] = useState("");
    const [adressActivite, setAdressActivite] = useState("");
    const [activite, setActivite] = useState("");
    const [commune, setCommune] = useState("");
    const [telephone, setTelephone] = useState("");

    const [modalIsOpen, setIsOpen] = useState(false);

    const fixtureInfoPerso = {
        name: "takeoff",
        userName: "take",
        birth: "01-01-1999",
        addressPerso: "15 rue de la liberte",
        adressActivite: "22 avenue jean jaures",
        activite: "boulanger",
        commune: "bagnolet",
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
                            <li><b>Surname:</b> {fixtureInfoPerso.userName}</li>
                            <li><b>addressPerso:</b> {fixtureInfoPerso.addressPerso}</li>
                            <li><b>adressActivite:</b> {fixtureInfoPerso.adressActivite}</li>
                            <li><b>activite:</b> {fixtureInfoPerso.activite}</li>
                            <li><b>commune:</b> {fixtureInfoPerso.commune}</li>
                            <li><b>telephone:</b> {fixtureInfoPerso.telephone}</li>
                        </ul>
                    </div>
                    <div className="col-4">
                        <button class="btn btn-warning" onClick={() => setIsOpen(true)}>Modifier</button>
                    </div>
                    <Modal isOpen={modalIsOpen} style={customStyles}>
                        <h1>modal OK</h1>
                        <div class="input-group input-group-sm mb-3">
                            <span class="input-group-text" id="inputGroup-sizing-sm">Name</span>
                            <input type="text" value={fixtureInfoPerso.name} placeholder={fixtureInfoPerso.name} class="form-control" />
                        </div>
                        <div class="input-group input-group-sm mb-3">
                            <span class="input-group-text" id="inputGroup-sizing-sm">Surname</span>
                            <input type="text" value={fixtureInfoPerso.userName} class="form-control"/>
                        </div>
                        <div class="input-group input-group-sm mb-3">
                            <span class="input-group-text" id="inputGroup-sizing-sm">addressPerso</span>
                            <input type="text" value={fixtureInfoPerso.addressPerso} class="form-control"/>
                        </div>
                        <div class="input-group input-group-sm mb-3">
                            <span class="input-group-text" id="inputGroup-sizing-sm">adressActivite</span>
                            <input type="text" value={fixtureInfoPerso.adressActivite} class="form-control"/>
                        </div>
                        <div class="input-group input-group-sm mb-3">
                            <span class="input-group-text" id="inputGroup-sizing-sm">activite</span>
                            <input type="text" value={fixtureInfoPerso.activite} class="form-control"/>
                        </div>
                        <div class="input-group input-group-sm mb-3">
                            <span class="input-group-text" id="inputGroup-sizing-sm">commune</span>
                            <input type="text" value={fixtureInfoPerso.commune} class="form-control"/>
                        </div>
                        <div class="input-group input-group-sm mb-3">
                            <span class="input-group-text" id="inputGroup-sizing-sm">Telephone</span>
                            <input type="text" value={fixtureInfoPerso.telephone} class="form-control"/>
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


{/* <div className="container">
                <div className="mb-3 row col-5 offset-3">
                    <label className="col-sm-2 col-form-label">Name</label>
                    <input className="form-control" type="text"  onChange={(e => setName(e.target.value))} disabled readonly />
                    
                </div>
                <div className="mb-3 row col-5 offset-3">
                    <label className="col-sm-2 col-form-label">Surname</label>
                    <input className="form-control" type="text"  onChange={(e => setSurname(e.target.value))} disabled readonly />
                    </div>
                <div className="mb-3 row col-5 offset-3">
                    <label className="col-sm-2 col-form-label">Birth</label>
                    <input className="form-control" type="text"  onChange={(e => setBirth(e.target.value))} disabled readonly />
                    </div>
                <div className="mb-3 row col-5 offset-3">
                    <label className="col-sm-2 col-form-label">AddressPerso</label>
                    <input className="form-control" type="text"  onChange={(e => setAddressPerso(e.target.value))} disabled readonly />
                    </div>
                <div className="mb-3 row col-5 offset-3">
                    <label className="col-sm-2 col-form-label">AdressActivite</label>
                    <input className="form-control" type="text"  onChange={(e => setAdressActivite(e.target.value))} disabled readonly />
                    </div>
                <div className="mb-3 row col-5 offset-3">
                    <label className="col-sm-2 col-form-label">Activite</label>
                    <input className="form-control" type="text"  onChange={(e => setActivite(e.target.value))} disabled readonly />
                    </div>
                <div className="mb-3 row col-5 offset-3">
                    <label className="col-sm-2 col-form-label">Commune</label>
                    <input className="form-control" type="text"  onChange={(e => setCommune(e.target.value))} disabled readonly />
                    </div>
                <div className="mb-3 row col-5 offset-3">
                    <label className="col-sm-2 col-form-label">Telephone</label>
                    <input className="form-control" type="text"  onChange={(e => setTelephone(e.target.value))} disabled readonly />
                    </div>

            </div> */}