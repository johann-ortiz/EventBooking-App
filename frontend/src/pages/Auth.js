import React, { Component } from "react";
import "./Auth.css";

export default class Auth extends Component {
  render() {
    return (
      <form className="auth-form">
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div className="form-actions">
          <button type="submit">Submit</button>
          <button type="button">Switch to SignUp</button>
        </div>
      </form>
    );
  }
}
