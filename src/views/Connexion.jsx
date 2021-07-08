import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function Login() {

  let history = useHistory()

  const [telephoneNmb, setTelephoneNmb] = useState("");
  const [password, setPassword] = useState("");

  const validLogoin = async () => {
    try {
      const response = await axios.post('http://localhost:9001/login', { telephone: telephoneNmb, password })
      console.log("response :", response);
      if (response.data.error) {
        console.log("if");

        alert("information incorrect")


        
      }else{

        const key = response.data.validToken
        const telephoneNmb = response.data.validUser.telephone 

        // console.log("key :", key);
        // console.log("telephoneNmb :", telephoneNmb);
        
        localStorage.setItem("secretKey", `${key} ${telephoneNmb}`)

        console.log("localStorage :", localStorage.getItem("secretKey"));

        history.push("/EspacePerso")
      }

    } catch (error) {
      console.log("error :", error);
    }
  }

  return (
    <div className="card-fluid col-6 offset-3 text-black" >
      <div className=" text-center ">
        <h1 className="text-center">Login</h1>
        <div className=" " >
          <input type="text" className="form-control" onChange={(e => setTelephoneNmb(e.target.value))} id="staticEmail" placeholder="User Name" />
          <label for="floatingInput"></label>
        </div>
        <div className="">
          <input type="password" className="form-control" onChange={(e => setPassword(e.target.value))} id="inputPassword" placeholder="Password" />
          <label className="col-sm-2 col-form-label" for="floatingInput"></label>
        </div>
        <div className="mx-2">
          <button type="button" className="btn btn-success mx-2" onClick={validLogoin}>Valider</button>

          <button type="button" className="btn btn-danger" >Annuler</button>
        </div>
      </div>

    </div>
  );
}

export default Login;
