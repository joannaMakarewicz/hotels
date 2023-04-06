import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingButton from "../../../../components/LoadingButton/LoadingButton";
import Input from "../../../../components/Input/Input";
import { validate } from "../../../../helpers/validations";
import axiosNew from "axios";

const Register = () => {
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

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axiosNew.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyADdc2_pX2CulasJq_8mHAl1WZQ8XPen5o",
        {
          email: form.email.value,
          password: form.password.value,
          returnSecureToken: true
        }
      );
      console.log(res.data);
    } catch (ex) {
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

          <div className="text-end">
            <LoadingButton loading={loading} className="btn btn-success">
              Zarejestruj
            </LoadingButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
