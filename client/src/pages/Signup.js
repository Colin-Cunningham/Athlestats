import React, { useState } from "react";
import Nav from "../components/Nav/index";
import Wrapper from "../components/Wrapper/Index";
import "./signup.css"
import API from "../utils/API"

function Signup(){

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [category, setCategory] = useState("Coach");
  const [name, setName] = useState("")

  function register(event) {
    event.preventDefault()
    API.signup({
      email: email,
      password: password,
      category: category,
      name: name
    })
      .then((res) => {
        console.log(res)
        window.location.href = "/login" 
      }
      )
      .catch((err) => console.log(err));
  }


  


    return (
      <>
        <Nav />
        <Wrapper>
          <form className="signup" onSubmit={register}>
            <h1 className="header">Sign up Below!</h1>
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
            <h1 className="header">Tell us a bit about yourself</h1>
            <div>
              <select
              className="form-control"
                type="category"
                name="category"
                placeholder="Enter password"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
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
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input id="submit" className="btn btn-center"type="submit" value="Submit" />
          </form>
        </Wrapper>
      </>
    );
  }



  export default Signup
