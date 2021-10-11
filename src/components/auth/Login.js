import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../context/auth/AuthContext";

const Login = props => {
  const authContext = useContext(AuthContext);

  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }

    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const { email, password } = user;

  const onChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <div className="form-container d-flex flex-column align-items-center">
      <h1 className="mb-4">
        Account <span className="text-danger">Login</span>
      </h1>
      <form className="w-50 p-5 bg-secondary rounded">
        <div className="form-group d-flex justify-content-between mb-3">
          <label className="text-white h5" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group d-flex justify-content-between mb-4">
          <label className="text-white h5" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            name="password"
            value="password"
            onChange={onChange}
            required
          />
        </div>
        <input
          type="submit"
          value="Login"
          className="btn btn-danger btn-block w-100"
        />
      </form>
    </div>
  );
};

export default Login;
