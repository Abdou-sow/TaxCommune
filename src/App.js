import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Inscription from './views/Inscription';
import Connexion from './views/Connexion';
import EspacePerso from './views/EspacePerso';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul className="d-flex flex-row">
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/Inscription">Inscription</Link></li>
          <li><Link to="/Connexion">Connexion</Link></li>
          <li><Link to="/EspacePerso">EspacePerso</Link></li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" />
        <Route exact path="/Inscription" component={Inscription}/>
        <Route exact path="/Connexion" component={Connexion}/>
        <Route exact path="/EspacePerso" component={EspacePerso}/>
      </Switch>

    </BrowserRouter>
  )
}

export default App;
