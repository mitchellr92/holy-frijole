import React from 'react'

const Login = () => {
  return (
    <div className="form-container d-flex flex-column align-items-center border">
      <h1>
        Account <span className="text-danger">Sign In</span>
      </h1>
      <form className="border">
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            required
          />
        </div>
        <input
          type="submit"
          value="Register"
          className="btn btn-danger btn-block"
        />
      </form>
    </div>
  );
}

export default Login
