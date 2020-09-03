import React, { useState } from "react";
import Axios from "axios";

function Registration() {
  const [regEmail, setRegUsername] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const register = (e) => {
    e.preventDefault();
    console.log("submit");
    Axios({
      method: "POST",
      data: {
        email: regEmail,
        password: regPassword,
      },
      withCredentials: true,
      url: "/users/register",
    }).then((res) => console.log(res));
  };
  return (
    <>
      <div className="card">
        <div className="card-header">
          Registration<h4>I am a Registration component</h4>
        </div>
        <div className="card-body">
          <form id="registration">
            <div className="form-row">
              <div className="form-group col-md-12">
                <label htmlFor="inputEmail4">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                  onChange={(e) => setRegUsername(e.target.value)}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputPassword4">Choose a Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  onChange={(e) => setRegPassword(e.target.value)}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputPassword4">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Re-type your password"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="organization">Organization Name</label>
              <input
                type="text"
                className="form-control"
                id="organization"
                placeholder="Enter your Organization's name"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={register}
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Registration;