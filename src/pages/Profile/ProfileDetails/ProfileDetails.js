import React, { useState, useEffect } from "react";
import LoadingButton from "../../../components/LoadingButton/LoadingButton";
import { validateEmail } from "../../../helpers/validations";

const ProfileDetails = (props) => {
  const [email, setEmail] = useState("joanna.milun@gmail.com");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    email:'',
    password: ''
  });

  const buttonDisabled=Object.values(error).filter(x => x).length;

  const submit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      //zapisywanie danych do backend'u
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    if (validateEmail(email)) {
      setError({...error, email: ''});
    } else {
      setError({...error, email: 'Niepoprawny email'});
    }
  }, [email]);

  useEffect(() => {
    if (password.length >= 4 || !password) {
      setError({...error, password: ''});
    } else {
      setError({...error, password: 'Wymagane 4 znaki'});
    }
  }, [password]);


  return (
    <form onSubmit={submit}>
    <div className="form-group">
      <label>
        E-mail:      </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className={`form-control ${error.email ? 'is-invalid' : 'is-valid'}`}
        />
        <div className="invalid-feedback">{error.email}</div>
        <div className="valid-feedback">Wszystko gra</div>
    </div>
    <div className="form-group mt-2">
      <label>
        Hasło:
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className={`form-control ${error.password ? 'is-invalid' : ''}`}
        />
        <div className="invalid-feedback">{error.password}</div>
      </label>
    </div>
    <div className="text-end">
      <LoadingButton className="btn-success mt-4" loading={loading} disabled={buttonDisabled}>
        Zapisz
      </LoadingButton>
    </div>
  </form>
  );
};

export default ProfileDetails;
