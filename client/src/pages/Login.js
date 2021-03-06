import React, { useState } from "react";
import { useHistory } from "react-router-dom";
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
        history.push("/dash/" + email ) 
      }
      )
      .catch((err) => alert(err));
  }


  const history = useHistory()


    return (
      <>
      <Nav />
      <Wrapper>
      <h5 id="h5">Login</h5>
      <form className="login">
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