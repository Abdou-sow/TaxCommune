import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Modal from 'react-modal'
import AfficheUsersAdm from "../components/AficheUsersAdm";
import AffichePayementAdm from "../components/AffichePayementAdm";

function Admin() {

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
    const ajouteAdmin = () => {
        setIsOpen(true)
    }

    return (
        <div className="container text-center">
            <div className="row">
                <div className="col-6 offset-3">

                    <button onClick={ajouteAdmin}>ajoute admin</button>
                </div>

            </div>
            <div className="row">
                <div className="col-5 border border-dark">
                    <AfficheUsersAdm />
                </div>
                <div className="col-5 offset-2 border border-dark">
                    <AffichePayementAdm />
                </div>
            </div>
            <Modal isOpen={modalIsOpen} style={customStyles} >
                <button onClick={()=>setIsOpen(false)}>sortir</button>
            </Modal>



        </div>
    );
}

export default Admin;
