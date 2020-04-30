import React, { useState } from 'react';
import Nav from "../components/Nav/index"
import Wrapper from "../components/Wrapper/Index"
import "./login.css"
import Footer from "../components/Footer/Index"
import API from "../utils/API"

function Login(){

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  function authenticate(event) {
    event.preventDefault()
    API.authenticate({
      email: email,
      password: password
    })
      .then((res) => {
        console.log(res)
        window.location.href = "/dash/" + email 
      }
      )
      .catch((err) => console.log(err));
  }




    return (
      <>
      <Nav />
      <Wrapper>
      <form className="login">
        <h1>Login Below!</h1>
        <input
          className="form-control"
          type="email"
          name="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
 
        <input
          className="form-control"
          type="password"
          name="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button onClick={authenticate} className="btn btn-lrg">Submit</button>
      </form>
      </Wrapper>
      <Footer />
      </>
    );
  }


  export default Login