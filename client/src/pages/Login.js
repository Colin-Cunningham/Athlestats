import React, { Component } from 'react';
import Nav from "../components/Nav/index"
import Wrapper from "../components/Wrapper/Index"
import {Link} from 'react-router-dom'

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email : '',
      password: '',
      redirect: null 
    };
  }
  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
   fetch('/api/authenticate', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if (res.status === 200) {
        console.log(res)
      } else {
        const error = new Error(res.error);
        throw error;
      }
    })
    .catch(err => {
      console.error(err);
      alert('Error logging in please try again');
    });
  }


  render() {
    return (
      <>
      <Nav />
      <Wrapper>
      <form className="login" onSubmit={this.onSubmit}>
        <h1>Login Below!</h1>
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
       <Link to="/dash"><input type="submit" value="Submit"/></Link>
      </form>
      </Wrapper>
      </>
    );
  }
}