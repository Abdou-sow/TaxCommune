import { useState } from "react";
import axios from "axios";
import InputGroup from "../components/InputGroup";

function Signup() {
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


    // const validUser = (e) => {
    //     e.preventDefault();

    //     const url = "http://localhost:9001/signup"

    //     axios.post(url, {
    //         "name":name,
    //         "surname":surname,
    //         "birth":birth,
    //         "addressPerso" :addressPerso,
    //         "adressActivite" :adressActivite,
    //         "activite":activite,
    //         "commune":commune,
    //         "telephone":telephone,
    //         "passWord": passWord,
    //         "confirmPassword": confirmPassword
    //     }).then(res =>{
    //         console.log("res :", res);
    //         console.log("res.data :", res.data);
    //     })

    // }


    // const validUser = async () => {


    //     try {

    //         const userInfo = {
    //             name: name,
    //             surname: surname,
    //             birth: birth,
    //             addressPerso: addressPerso,
    //             adressActivite: adressActivite,
    //             activite: activite,
    //             commune: commune,
    //             telephone: telephone,
    //             passWord: passWord,
    //         }

    //         if (userInfo.password === confirmPassword) {

    //             const response = await axios.post('http://localhost:9001/signup', userInfo)

    //             if (response.status === 200) {

    //                 setUserCreated(true)
    //                 console.log("setUserCreated :", userCreated);

    //                 history.push("/Login")

    //                 alert("you can connect now !")
    //             }
    //             await console.log("userCreated :", userCreated);

    //         } else {
    //             alert("confirm password not correct")
    //         }

    //     } catch (error) {
    //         console.error(error.response);
    //     }



    // }
    return (
        <div className="container ">
            <h3 className="text-center">Inscrivez-vous</h3>

            {/* <form onSubmit={validUser} > */}
            <form>
                {/* <div className="input-group mb-3" onChange={(e) => setCommune(e.target.value)}>
                    <InputGroup
                        name="commune" />
                </div> */}
                <div className="input-group mb-3" onChange={(e) => setActivite(e.target.value)}>
                    <InputGroup
                        name="activity" />
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
                    <input type="date" className="form-control" onChange={(e) => setBirth(e.target.value)}></input>
                </div>
                <button type="submit" className="btn btn-primary">valider</button>
            </form>
        </div>
    )

}

export default Signup;
