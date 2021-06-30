import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
// import Inscription from './views/Inscription';
// import Connexion from './views/Connexion';
// import EspacePerso from './views/EspacePerso';

function App() {
  return (
    <BrowserRouter>

      <NavBar/>
      
    </BrowserRouter>
  )
}

export default App;
