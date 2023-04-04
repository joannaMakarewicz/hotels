import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import LoadingButton from "../../../components/LoadingButton/LoadingButton";

const Login = (props) => {
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [valid, setValid] = useState(null);

  const submit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      //logowanie
      if (true) {
        setAuth(true);
        navigate("/");
      } else {
        setValid(false);
        setPassword('');
      }
    }, 500);
  };

  return (
    <div>
      <h2>Logowanie</h2>
 { valid === false ? (
  <>
    <p className="alert alert-danger">Niepoprawne dane logowania</p>
  </>
 ) : null }
      <form onSubmit={submit}>
        <div className="form-group">
          <label>
            E-mail:
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control"
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
        <div className="text-end">
          <LoadingButton className="btn-success mt-4" loading={loading}>
            Zaloguj
          </LoadingButton>
        </div>
      </form>
    </div>
  );
};

export default Login;
