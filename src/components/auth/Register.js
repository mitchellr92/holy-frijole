import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../context/auth/AuthContext";

const Register = () => {
  const authContext = useContext(AuthContext);

  const { register, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }

    // if (error === "User already exists") {

    // }

    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  const onChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    register({ name, email, password });
  };

  return (
    <div className="form-container d-flex flex-column align-items-center">
      <h1 className="mb-4">
        Create <span className="text-danger">Account</span>
      </h1>
      <form className="w-50 p-5 bg-secondary rounded" onSubmit={onSubmit}>
        <div className="form-group d-flex justify-content-between mb-3">
          <label className="text-white h5" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={onChange}
            required
          />
        </div>
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
        <div className="form-group d-flex justify-content-between mb-3">
          <label className="text-white h5" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            required
            minLength="6"
          />
        </div>
        <div className="form-group d-flex justify-content-between mb-4">
          <label className="text-white h5" htmlFor="password2">
            Confirm Password
          </label>
          <input
            type="password"
            name="password2"
            value={password2}
            onChange={onChange}
            required
            minLength="6"
          />
        </div>
        <input
          type="submit"
          value="Register"
          className="btn btn-danger btn-block w-100"
        />
      </form>
    </div>
  );
};

export default Register;
