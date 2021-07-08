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
        <div className="card-fluid col-6 offset-3 text-black">
            <h3 className="text-center">Inscrivez-vous</h3>

            <form onSubmit={validUser} >
                <div>
                    <div className="input-group" onChange={(e) => setCommune(e.target.value)}>
                        <InputGroup
                            name="Communes" />
                    </div>
                    <div className="input-group" onChange={(e) => setActivite(e.target.value)}>
                        <InputGroup
                            name="Activities" />
                    </div>
                </div>

                <div className="">
                    <div className="">
                        <label className="form-label"></label>
                        <input type="text" className="form-control" placeholder="Name" autoComplete="name" onChange={(e) => setName(e.target.value)}></input>
                    </div>
                    <div className="">
                        <label for="exampleInputEmail1" className="form-label"></label>
                        <input type="text" className="form-control" placeholder="Surname" onChange={(e) => setSurname(e.target.value)}></input>
                    </div>
                    <div className="">
                        <label for="exampleInputEmail1" className="form-label"></label>
                        <input type="text" className="form-control" placeholder="Personal Address" onChange={(e) => setsetAddressperso(e.target.value)}></input>
                    </div>
                    <div className="">
                        <label for="exampleInputEmail1" className="form-label"></label>
                        <input type="text" className="form-control" placeholder="Activity Address" onChange={(e) => setAddressactivite(e.target.value)}></input>
                    </div>
                    <div className="">
                        <label for="exampleInputEmail1" className="form-label"></label>
                        <input type="text" className="form-control" placeholder="Telephone Number(as User ID)" onChange={(e) => setTelephone(e.target.value)}></input>
                    </div>
                    <div className="">
                        <label for="exampleFormControlInput1" className="form-label"> </label>
                        <input type="Password" className="form-control" placeholder="Password" onChange={(e) => setPassWord(e.target.value)}></input>
                    </div>
                    <div className="">
                        <label for="exampleFormControlInput1" className="form-label"></label>
                        <input type="Password" className="form-control" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)}></input>
                    </div>
                    <div className="">
                        <label for="exampleFormControlInput1" className="form-label"></label>
                        <input type="text" className="form-control" placeholder="Date Of Birth" onChange={(e) => setBirth(e.target.value)}></input>
                    </div>
                    <button className="btn btn-primary my-1" type="text">Valider</button>
                </div>

            </form>
        </div>
    )
}

export default Signup;
