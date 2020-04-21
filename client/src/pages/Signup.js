import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      category: "",
      name: ""
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
      <form className="login" onSubmit={this.onSubmit}>
        <h1>Sign up Below!</h1>
        <input
          className="form-group"
          type="email"
          name="email"
          placeholder="Enter email"
          value={this.state.email}
          onChange={this.handleInputChange}
          required
        />
        <input
          className="form-group"
          type="password"
          name="password"
          placeholder="Enter password"
          value={this.state.password}
          onChange={this.handleInputChange}
          required
        />
        <h1>Tell us a bit about yourself</h1>
        <div className="form-group">
          <label for="exampleFormControlSelect1">Example select</label>
          <select
            className="form-control"
            type="category"
            name="category"
            placeholder="Enter password"
            value={this.state.category}
            onChange={this.handleInputChange}
            required
          >
            <option value="coach">Coach</option>
            <option value="player">Player</option>
            <option value="recruiter">Recruiter</option>
          </select>
        </div>
        <input
          className="form-group"
          type="name"
          name="name"
          placeholder="Enter Name"
          value={this.state.name}
          onChange={this.handleInputChange}
          required
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
