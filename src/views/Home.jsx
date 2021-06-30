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
                    <button class="btn btn-primary me-2">Inscrivez-vous</button>
                    <button class="btn btn-info">Connectez-vous</button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Home;
