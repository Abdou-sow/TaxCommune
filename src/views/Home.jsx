import React from 'react';
import axios from 'axios';

const Home = () => {

    return (
        <div  className="container-fluid text-center">
            <div className="row">
                <h1>Info commune</h1>

            </div>
            <div className="col-4 offset-4  text-center">
                <h4>Bagnolet :</h4>
                <p>La ville est située dans le Bassin parisien, dans la région Île-de-France. Elle est limitrophe de Paris, en banlieue est, dans le sud du département de la Seine-Saint-Denis. Elle fait partie de la petite couronne de Paris.</p>
            </div>
            <div>
                <div className="">
                    <div className="col-6 offset-3">
                    <a href="/Inscription"><button class="btn btn-primary me-2">Inscrivez-vous</button></a>
                    <a href="/Connexion"><button class="btn btn-info">Connectez-vous</button></a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Home;
