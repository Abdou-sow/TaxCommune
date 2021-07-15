import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import '@fortawesome/fontawesome-free/css/all.min.css'; import
'bootstrap-css-only/css/bootstrap.min.css'; import
'mdbreact/dist/css/mdb.css';
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
