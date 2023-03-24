import React from 'react'

const Login = (props) => {
  return (
    <div>
      <h2>Logowanie</h2>
      <form>
      <div className="form-group">
        <label>
          E-mail:
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
          />
        </label>
      </div>
      <div className="form-group mt-2">
        <label>
          Hasło:
          <input type="password" className="form-control" />
        </label>
      </div>
      <button type="submit" className="btn btn-primary mt-4">
        Submit
      </button>
    </form>
    </div>
  )
}

export default Login
