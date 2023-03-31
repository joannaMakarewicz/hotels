import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
  const [auth, setAuth]=useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e) => {
    e.preventDefault();
   setTimeout(() => {
setAuth(true)
navigate('/')
   }, 500)
  };

  return (
    <div>
      <h2>Logowanie</h2>

      <form onSubmit={submit}>
        <div className="form-group">
          <label>
            E-mail:
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
            />
          </label>
        </div>
        <div className="form-group mt-2">
          <label>
            Hasło:
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-control"
            />
          </label>
        </div>
        <button type="submit" className="btn btn-primary mt-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
