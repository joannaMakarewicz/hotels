import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import LoadingButton from "../../../components/LoadingButton/LoadingButton";
import axios from "../../../axios/axios-auth";

const Login = (props) => {
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [valid, setValid] = useState(null);
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        'accounts:signInWithPassword',
        {
          email,
          password,
          returnSecureToken: true,
        }
      );
      console.log(res);
      setAuth(true, {
        email: res.data.email,
        token: res.data.idToken,
        userId: res.data.localId,
      });
      navigate("/");
    } catch (ex) {
      setError(
        ex.response.data.error.message
      );
      setLoading(false);
      console.log(ex.response);
    }
  };

  if(auth) {
    navigate('/')
  }

  return (
    <div>
      <h2>Logowanie</h2>
      {valid === false ? (
        <>
          <p className="alert alert-danger">Niepoprawne dane logowania</p>
        </>
      ) : null}
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

        {error ? <div className="alert alert-danger">{error}</div> : null}

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
