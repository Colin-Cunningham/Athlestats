import React, { Component } from "react";
import Nav from "../components/Nav/index";
import Wrapper from "../components/Wrapper/Index";
import "./style.css"

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      category: "Coach",
      name: "",
    };
  }
  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    fetch("/api/register", {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 200) {
          window.location.href = "/login";
        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch((err) => {
        console.error(err);
        alert("That Email already exists");
      });
  };

  render() {
    return (
      <>
        <Nav />
        <Wrapper>
          <form className="signup" onSubmit={this.onSubmit}>
            <h1 className="jumbotron">Sign up Below!</h1>
            <input
              className="form-control"
              type="email"
              name="email"
              placeholder="Enter email"
              value={this.state.email}
              onChange={this.handleInputChange}
              required
            />
            <input
              className="form-control"
              type="password"
              name="password"
              placeholder="Enter password"
              value={this.state.password}
              onChange={this.handleInputChange}
              required
            />
            <h1 className="jumbotron">Tell us a bit about yourself</h1>
            <div className="form-control">
              <select
                className="form-control"
                type="category"
                name="category"
                placeholder="Enter password"
                value={this.state.category}
                onChange={this.handleInputChange}
                required
              >
                <option value="Coach">Coach</option>
                <option value="Player">Player</option>
                <option value="Recruiter">Recruiter</option>
              </select>
            </div>
            <input
              className="form-control"
              type="name"
              name="name"
              placeholder="Enter Name"
              value={this.state.name}
              onChange={this.handleInputChange}
              required
            />
            <input type="submit" value="Submit" />
          </form>
        </Wrapper>
      </>
    );
  }
}
