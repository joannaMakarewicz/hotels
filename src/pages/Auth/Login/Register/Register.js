import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingButton from "../../../../components/LoadingButton/LoadingButton";
import Input from "../../../../components/Input/Input";
import { validate } from "../../../../helpers/validations";
import axios from "../../../../axios/axios-auth";
import useAuth from "../../../../hooks/useAuth";

const Register = (props) => {
  const [auth, setAuth] = useAuth();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: {
      value: "",
      error: "",
      showError: false,
      rules: ["required", "email"],
    },
    password: {
      value: "",
      error: "",
      showError: false,
      rules: ["required"],
    },
  });

  const [error, setError] = useState('');
  const valid = !Object.values(form)
                    .map(input => input.error)
                    .filter(error => error)
                    .length;

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        "accounts:signUp",
        {
          email: form.email.value,
          password: form.password.value,
          returnSecureToken: true
        }
      );
      setAuth(true, {
        email: res.data.email,
        token: res.data.idToken,
        userId: res.data.localId,
      });
      navigate('/');
    } catch (ex) {
      setError(ex.response.data.error.message);
      console.log(ex.response);
    }

    setLoading(false);
  };

  const changeHandler = (value, fieldName) => {
    const error = validate(form[fieldName].rules, value);

    setForm({
      ...form,
      [fieldName]: {
        ...form[fieldName],
        value,
        showError: true,
        error: error,
      },
    });
  };

  if (auth) {
    navigate('/');
  }


  return (
    <div className="card">
      <div className="card-header">Rejestracja</div>
      <div className="card-body">
        <p className="text-muted">Uzupełnij dane</p>

        <form onSubmit={submit}>
          <Input
            label="Email"
            type="email"
            value={form.email.value}
            onChange={(val) => changeHandler(val, "email")}
            error={form.email.error}
            showError={form.email.showError}
          />

          <Input
            label="Hasło"
            type="password"
            value={form.password.value}
            onChange={(val) => changeHandler(val, "password")}
            error={form.password.error}
            showError={form.password.showError}
          />

          {error ? (
            <div className="alert alert-danger">{error}</div>
          ) : null}

          <div className="text-end">
            <LoadingButton loading={loading} disabled={!valid} className="btn btn-success">
              Zarejestruj
            </LoadingButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
