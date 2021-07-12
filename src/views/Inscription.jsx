import { useState } from "react";
import axios from "axios";
import InputGroup from "../components/InputGroup";
import { useHistory } from "react-router-dom";

function Signup() {

    let history = useHistory()

    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [birth, setBirth] = useState("")
    const [addressPerso, setsetAddressperso] = useState("")
    const [adressActivite, setAddressactivite] = useState("")
    const [activite, setActivite] = useState("")
    const [commune, setCommune] = useState("")
    const [telephone, setTelephone] = useState("")
    const [passWord, setPassWord] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")


    const validUser = async (e) => {
        e.preventDefault();

        try {

            const userInfo = {
                surname: surname,
                firstname: name,
                dateofbirth: birth,
                address_personal: addressPerso,
                address_activity: adressActivite,
                activity_commune: commune,
                activity: activite,
                telephone: parseInt(telephone),
                password: passWord,
            }

            if (passWord === confirmPassword) {

                const response = await axios.post('http://localhost:9001/signup', userInfo)

                if (response.status === 200) {

                    alert("you can connect now !")
                    history.push("/Connexion")
                }

            } else {

                alert("confirm password not correct")
            }

        } catch (error) {

            console.error(error.response);
        }

    }

    // Input reset

    const annuler = () => {

        setName("");
        setSurname("");
        setBirth("");
        setsetAddressperso("");
        setAddressactivite("");
        setTelephone("");
        setPassWord("");
        setConfirmPassword("");

    };

    return (
        <div className="card-fluid col-6 offset-3 text-black">
            <h3 className="text-center">Inscrivez-vous</h3>

            <form onSubmit={validUser} >
                <div>
                    <div className="input-group" onChange={(e) => setCommune(e.target.value)} value={commune}>
                        <InputGroup
                            name="Communes" />
                    </div>
                    <div className="input-group" onChange={(e) => setActivite(e.target.value)} value={activite}>
                        <InputGroup
                            name="Activities" />
                    </div>
                </div>

                <div className="">
                    <div className="">
                        <label className="form-label"></label>
                        <input type="text" className="form-control"
                            placeholder="Name" autoComplete="name"
                            onChange={(e) => setName(e.target.value)} value={name}></input>
                    </div>
                    <div className="">
                        <label for="exampleInputEmail1" className="form-label"></label>
                        <input type="text" className="form-control"
                            placeholder="Surname"
                            onChange={(e) => setSurname(e.target.value)} value={surname}></input>
                    </div>
                    <div className="">
                        <label for="exampleInputEmail1" className="form-label"></label>
                        <input type="text" className="form-control"
                            placeholder="Personal Address" value={addressPerso}
                            onChange={(e) => setsetAddressperso(e.target.value)}></input>
                    </div>
                    <div className="">
                        <label for="exampleInputEmail1" className="form-label"></label>
                        <input type="text" className="form-control"
                            placeholder="Activity Address" value={adressActivite}
                            onChange={(e) => setAddressactivite(e.target.value)} ></input>
                    </div>
                    <div className="">
                        <label for="exampleInputEmail1" className="form-label"></label>
                        <input type="text" className="form-control"
                            placeholder="Telephone Number(as User ID)" value={telephone}
                            onChange={(e) => setTelephone(e.target.value)} ></input>
                    </div>
                    <div className="">
                        <label for="exampleFormControlInput1" className="form-label"> </label>
                        <input type="Password" className="form-control"
                            placeholder="Password" value={passWord}
                            onChange={(e) => setPassWord(e.target.value)} ></input>
                    </div>
                    <div className="">
                        <label for="exampleFormControlInput1" className="form-label"></label>
                        <input type="Password" className="form-control"
                            placeholder="Confirm Password" value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)} ></input>
                    </div>
                    <div className="">
                        <label for="exampleFormControlInput1" className="form-label"></label>
                        <input type="text" className="form-control"
                            placeholder="Date Of Birth" value={birth}
                            onChange={(e) => setBirth(e.target.value)} ></input>
                    </div>
                    <button className="btn btn-primary my-1" type="text">Valider</button>
                    <button className="btn btn-warning my-3 mx-3"
                        type="text" onClick={annuler}>Annuler</button>
                </div>

            </form>
        </div>
    )
}

export default Signup;
