import { useState } from "react";

function Login() {

  const [telephoneNmb, setTelephoneNmb] = useState(0);
  const [password, setPassword] = useState("");


  return (
    <div className="container">
      <div className=" text-center">
        <h1 className="text-center">Login</h1>
        <div className="mb-3 col-5 form-floating " style={{ marginLeft: 323 }}>
          <input type="text" className="form-control" onChange={(e => setTelephoneNmb(e.target.value))} id="staticEmail" />
          <label for="floatingInput">T.Numero</label>
        </div>
        <div className="mb-3 col-5 offset-4 form-floating" style={{ marginLeft: 323 }}>
          <input type="password" className="form-control" onChange={(e => setPassword(e.target.value))} id="inputPassword" />
          <label className="col-sm-2 col-form-label" for="floatingInput">Password</label>
        </div>
        <div className="col-4 offset-4">
          <button style={{ marginRight: 30 }} type="button" className="btn btn-success mt-2" >Valider</button>

          <button type="button" className="btn btn-danger mt-2" >Annuler</button>
        </div>
      </div>

    </div>
  );
}

export default Login;
