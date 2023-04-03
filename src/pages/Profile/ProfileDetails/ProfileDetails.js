import React, { useState } from "react";
import LoadingButton from "../../../components/LoadingButton/LoadingButton";

const ProfileDetails = (props) => {
  const [email, setEmail] = useState("joanna.milun@gmail.com");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [valid, setValid] = useState(null);

  const submit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      //zapisywanie danych do backend'u
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
  );
};

export default ProfileDetails;
