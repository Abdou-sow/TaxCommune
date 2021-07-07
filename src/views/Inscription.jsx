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
    return (
        <div className="container ">
            <h3 className="text-center">Inscrivez-vous</h3>

            <form onSubmit={validUser} >
                <div className="input-group mb-3" onChange={(e) => setCommune(e.target.value)}>
                    <InputGroup
                        name="communes" />
                </div>
                <div className="input-group mb-3" onChange={(e) => setActivite(e.target.value)}>
                    <InputGroup
                        name="activities" />
                </div>
                <div className="mb-3">
                    <label className="form-label">name</label>
                    <input type="text" className="form-control" autoComplete="name" onChange={(e) => setName(e.target.value)}></input>
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">surname</label>
                    <input type="text" className="form-control" onChange={(e) => setSurname(e.target.value)}></input>
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">addressPerso</label>
                    <input type="text" className="form-control" onChange={(e) => setsetAddressperso(e.target.value)}></input>
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">adressActivite</label>
                    <input type="text" className="form-control" onChange={(e) => setAddressactivite(e.target.value)}></input>
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">telephone</label>
                    <input type="text" className="form-control" onChange={(e) => setTelephone(e.target.value)}></input>
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Password </label>
                    <input type="Password" className="form-control" onChange={(e) => setPassWord(e.target.value)}></input>
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">confirmPassword</label>
                    <input type="Password" className="form-control" onChange={(e) => setConfirmPassword(e.target.value)}></input>
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">birth</label>
                    <input type="text" className="form-control" onChange={(e) => setBirth(e.target.value)}></input>
                </div>
                <button type="text" className="btn btn-primary">valider</button>
            </form>
        </div>
    )

}

export default Signup;
