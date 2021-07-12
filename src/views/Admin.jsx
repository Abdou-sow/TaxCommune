import { useState } from "react";
import Modal from 'react-modal'
import AfficheUsersAdm from "../components/AfficheUsersAdm";
import AffichePayementAdm from "../components/AffichePayementAdm";
import Button from '@material-ui/core/Button';
import axios from "axios";
import { useHistory } from "react-router-dom";

function Admin() {

    let history = useHistory()

    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [telephone, setTelephone] = useState("")
    const [role, setRole] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

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
    const logout = () => {
        localStorage.clear()
        alert(`${name} a ete deconnecte`)
        history.push("/ConnexionAdmin")
    }

    const valideAjout = async () => {
        // console.log(" name:",name);
        // console.log(" surname:",surname);
        // console.log(" telephone:",parseInt(telephone));
        // console.log(" role:",parseInt(role));
        // console.log(" passWord:",password);
        // console.log(" confirmPassword:",confirmPassword);

        try {
            const infoAdmin = {
                firstname: name,
                surname: surname,
                role: role,
                password: password,
                telephone: parseInt(telephone)
            }
            if (password === confirmPassword) {

                const response = await axios.post("http://localhost:9001/adminsignup", infoAdmin)

                console.log("response valide ajout admin :", response);
                alert("you can connect now !")
                // history.push("/Connexion")
                setIsOpen(false)

            } else {

                alert("confirm pasetconfirmPasswordssword not correct")
            }

        } catch (error) {
            console.log("error :", error);

        }
    }

    // Input reset

    const annuler = () => {

        setName("");
        setSurname("");
        setTelephone("");
        setPassword("");
        setConfirmPassword("");

    };

    // console.log("localstorage :", localStorage.getItem("secretKey").split(" ")[0]);
    return (
        <div className="container text-center">
            <div className="row" style={{ height: 100 }}>
                <div className="col-6 offset-3">
                    <Button variant="contained" color="primary" disableElevation onClick={ajouteAdmin}>
                        Ajoute Admin
                    </Button>
                    <Button variant="contained" color="primary" disableElevation onClick={logout}>
                        Logout
                    </Button>

                </div>

            </div>
            <div className="row">
                <div className="col-5 ">
                    <AfficheUsersAdm />
                </div>
                <div className="col-5 offset-2 ">
                    <AffichePayementAdm />
                </div>
            </div>
            <Modal isOpen={modalIsOpen} style={customStyles} >
                <div>
                    <div className="mb-3">
                        <label className="form-label">name</label>
                        <input type="text" className="form-control"
                            autoComplete="name" value={name}
                            onChange={(e) => setName(e.target.value)}></input>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">surname</label>
                        <input type="text" className="form-control" value={surname}
                            onChange={(e) => setSurname(e.target.value)}></input>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">telephone</label>
                        <input type="text" className="form-control" value={telephone}
                            onChange={(e) => setTelephone(e.target.value)}></input>
                    </div>
                    <div class="input-group mb-3" onChange={(e) => setRole(e.target.value)} >
                        <label class="input-group-text" for="inputGroupSelect01">role</label>
                        <select class="form-select" id="inputGroupSelect01">
                            <option value="admin">Admin</option>
                            <option value="agent">Agent</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Password </label>
                        <input type="Password" className="form-control" value={password}
                            onChange={(e) => setPassword(e.target.value)}></input>
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">confirmPassword</label>
                        <input type="Password" className="form-control" value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}></input>
                    </div>
                </div>
                <button type="button" class="btn btn-danger mx-1" onClick={() => setIsOpen(false)}>Annuler</button>
                <button type="button" class="btn btn-success  mx-1"
                    onClick={valideAjout}>Valider</button>
                <button type="button" class="btn btn-warning mx-1"
                    onClick={annuler}>Effacer</button>
            </Modal>
        </div>
    );
}

export default Admin;
