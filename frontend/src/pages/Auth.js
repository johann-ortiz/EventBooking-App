import React, { Component } from "react";
import "./Auth.css";

export default class Auth extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  submitHandler = event => {
    event.preventDefault();

    const requestBody = {
      query: `
      mutation {
        createUser(userInput: {email: "${this.state.email}", password: "${
        this.state.password
      }"}) {
        _id
        email
      }
      }
      `
    };

    fetch("http://localhost:4000/graphql", {
      method: "POST",
      body: JSON.stringify(),
      headers: {
        "Content-Type": "application/json"
      }
    });
  };

  render() {
    return (
      <form className="auth-form" onSubmit={this.submitHandler}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={this.handleChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={this.handleChange}
          />
        </div>
        <div className="form-actions">
          <button type="submit">Submit</button>
          <button type="button">Switch to SignUp</button>
        </div>
      </form>
    );
  }
}
