import React from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';

import Inscription from '../views/Inscription';
import Connexion from '../views/Connexion';
import EspacePerso from '../views/EspacePerso';
import Home from '../views/Home';
import Payement from '../views/Payement'



const NavBar = () => {

    const imgUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkM_UHOsGT_1pQO7XbAbBw2I5zhVVbbgc8wQ&usqp=CAU"
    return (
        <BrowserRouter>
            <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                <div className="container-fluid">
                    <img src={imgUrl} alt="" width="75" height="50" className="d-inline-block align-text-top" />

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item" >
                            <Link to="/">Accueil</Link>
                        </li>
                    </ul>
                    <span className="navbar-text">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li><Link to="/Inscription">Inscription</Link></li>
                            <li><Link to="/Connexion">Connexion</Link></li>
                            <li><Link to="/EspacePerso">EspacePerso</Link></li>
                        </ul>
                    </span>
                </div>
            </nav>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Inscription" component={Inscription} />
                <Route exact path="/Connexion" component={Connexion} />
                <Route exact path="/EspacePerso" component={EspacePerso} />
                <Route exact path="/Payement" component={Payement} />
            </Switch>
        </BrowserRouter>
    );
}

export default NavBar;
