import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function Loginadmin() {

  let history = useHistory()

  const [telephoneNmb, setTelephoneNmb] = useState("");
  const [password, setPassword] = useState("");

  const validLogoin = async () => {
    try {
      const response = await axios.post('http://localhost:9001/adminlogin', { telephone: telephoneNmb, password })
      console.log("response :", response);
      if (response.data.error) {

        console.log("if");

        alert("Admin Information Incorrect")

      } else {

        const key = response.data.validToken
        const telephoneNmb = response.data.validUser.telephone

        // console.log("key :", key);
        // console.log("telephoneNmb :", telephoneNmb);

        localStorage.setItem("secretKey", `${key} ${telephoneNmb}`)

        console.log("localStorage :", localStorage.getItem("secretKey"));
        const userRole = response.data.validUser.role;

        console.log("userRole", userRole)

        if (userRole === 1) {

          history.push("/Admin")  // changer pour espace admine 

        } else if (userRole === 2) {

          history.push("/Agent")  // changer pour espace admine 

        }
      }

    } catch (error) {

      alert("Telephone ou password incorrect")

      console.log("error :", error);
    }
  }

  // Input reset

  const annuler = () => {

    setTelephoneNmb("");
    setPassword("");

  };

  return (
    <>
      <div className="container">
        <div className=" text-center">
          <h1 className="text-center">Admin</h1>
          <div className="mb-3 col-5 form-floating " style={{ marginLeft: 323 }}>
            <input type="text" className="form-control"
              onChange={(e => setTelephoneNmb(e.target.value))}
              id="staticEmail" placeholder="User Name" value={telephoneNmb} />
            <label for="floatingInput">User Number</label>
          </div>
          <div className="mb-3 col-5 offset-4 form-floating" style={{ marginLeft: 323 }}>
            <input type="password" className="form-control"
              onChange={(e => setPassword(e.target.value))}
              id="inputPassword" placeholder="Password" value={password} />
            <label for="floatingInput">Password</label>
          </div>
          <div className="col-4 offset-4">
            <button style={{ marginRight: 30 }} type="button" className="btn btn-success mt-2"
              onClick={validLogoin}>Valider</button>

            <button type="button" className="btn btn-danger mt-2" onClick={annuler} >Annuler</button>
          </div>
        </div>

      </div>
    </>
  );
}

export default Loginadmin;
