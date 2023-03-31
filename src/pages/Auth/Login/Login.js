import React, { useState } from "react";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e) => {
    e.preventDefault();
    console.log(email, password);
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
