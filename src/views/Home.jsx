import React from 'react';

const Home = () => {
    return (
        <div  className="container-fluid">
            <div className="row offset-4">
                <h1>Info commune</h1>
            </div>
            <div>
                <div className="row">
                    <div className="col-6 offset-4">
                    <a href="/Inscription"><button class="btn btn-primary me-2">Inscrivez-vous</button></a>
                    <a href="/Connexion"><button class="btn btn-info">Connectez-vous</button></a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Home;
