import { useState } from "react";

function Login() {

  const [telephoneNmb, setTelephoneNmb] = useState(0);
  const [password, setPassword] = useState("");


  return (
    <div className="container">
      <h1 className="text-center">Login</h1>
      <div className="mb-3 row col-5 offset-3">
        <label className="col-sm-2 col-form-label">T.Numero</label>
        <input type="text" className="form-control" onChange={(e => setTelephoneNmb(e.target.value))} id="staticEmail" />
      </div>
      <div className="mb-3 row col-5 offset-3">
        <label className="col-sm-2 col-form-label">Password</label>
        <input type="password" className="form-control" onChange={(e => setPassword(e.target.value))} id="inputPassword" />
        <div className="col-sm-10">
          <button type="button" className="btn btn-success mt-2" >Valider</button>

          <button type="button" className="btn btn-danger mt-2" >Annuler</button>
        </div>
      </div>

    </div>
  );
}

export default Login;
