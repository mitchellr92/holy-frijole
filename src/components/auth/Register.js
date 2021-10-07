import React from 'react'

const Register = () => {
  return (
    <div className="form-container d-flex flex-column align-items-center">
      <h1 className="mb-4">
        Create <span className="text-danger">Account</span>
      </h1>
      <form className="w-50 p-5 bg-secondary rounded">
        <div className="form-group d-flex justify-content-between mb-3">
          <label className="text-white h5" htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            required
          />
        </div>
        <div className="form-group d-flex justify-content-between mb-3">
          <label className="text-white h5" htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            required
          />
        </div>
        <div className="form-group d-flex justify-content-between mb-3">
          <label className="text-white h5" htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            required
            minLength="6"
          />
        </div>
        <div className="form-group d-flex justify-content-between mb-4">
          <label className="text-white h5" htmlFor="password2">Confirm Password</label>
          <input
            type="password"
            name="password2"
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
}

export default Register
