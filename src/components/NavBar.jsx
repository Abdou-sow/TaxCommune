import React from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import "../styles/nava.css"
import Inscription from '../views/Inscription';
import Connexion from '../views/Connexion';
import EspacePerso from '../views/EspacePerso';
import Admin from '../views/Admin';
import Home from '../views/Home';
import Payement from "../views/Payement"
import Agent from "../views/Agent"



const NavBar = () => {

    const imgUrl = "https://jpi-urbaneurope.eu/wp-content/uploads/2020/10/page-dut.png"
    return (
        <BrowserRouter>
            <nav className="navbar navbar-expand-lg navbar-light bg-light p-0 " >
                <div className="container-fluid"style={{backgroundColor:"#2c4053"}}>
                    <img src={imgUrl} alt="" width="250px" height="auto" className="d-inline-block align-text-top" />

                    <ul className="navbar-nav me-auto mb-lg-0">
                        <li className="nav-item" >
                            <Link to="/"style={{color:"white", textDecoration:"none"}} >Accueil</Link>
                        </li>
                    </ul>
                    <span className="navbar-text">
                        <ul id ="nava-ul"className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li><Link to="/Inscription" style={{color:"white", textDecoration:"none"}}>Inscription</Link></li>
                            <li><Link to="/Connexion"style={{color:"white", textDecoration:"none"}}>Connexion</Link></li>
                            {/* <li><Link to="/EspacePerso" style={{color:"white", textDecoration:"none"}}>EspacePerso</Link></li> */}
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
                <Route exact path="/Admin" component={Admin} />
                <Route exact path="/Agent" component={Agent} />
            </Switch>
        </BrowserRouter>
    );
}

export default NavBar;
