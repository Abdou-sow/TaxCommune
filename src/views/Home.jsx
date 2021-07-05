import React from 'react';
import axios from 'axios';
import InputGroup from "../components/InputGroup"
import { useState } from 'react';
import { useEffect } from 'react';

const Home = () => {

    const [commune, setCommune] = useState("")
    const [info, setInfo] = useState("")

    const afficheInfo = async () => {
        const response = await axios.get("http://localhost:9001/homepageinfo/" + commune)
        console.log("response :", response.data.communeID.information);
        setInfo(response.data.communeID.information)
    }
    console.log("info:", info);
    return (
        <div className="container-fluid text-center">
            <div className="row">
                <h1>Info commune</h1>

                <div className="col-4 offset-1 ">
                    <h2>{commune}</h2>
                    <p>{info}</p>

                </div>

                <div className="col-3 offset-2 " onClick={afficheInfo} onChange={(e) => setCommune(e.target.value)}>
                    <div>

                        <InputGroup
                            name="communes" />
                    </div>
                </div>

                {/* <p>La ville est située dans le Bassin parisien, dans la région Île-de-France. Elle est limitrophe de Paris, en banlieue est, dans le sud du département de la Seine-Saint-Denis. Elle fait partie de la petite couronne de Paris.</p> */}
                <div>
                    <div className="">
                        <div className="col-6 offset-3">
                            <a href="/Inscription"><button class="btn btn-primary me-2">Inscrivez-vous</button></a>
                            <a href="/Connexion"><button class="btn btn-info">Connectez-vous</button></a>
                        </div>
                    </div>
                </div >

            </div>
        </div>
    );
}

export default Home;
