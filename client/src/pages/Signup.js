import React, { useState } from "react";
import {  useHistory } from "react-router-dom";
import Nav from "../components/Nav/index";
import Wrapper from "../components/Wrapper/Index";
import "./signup.css"
import API from "../utils/API"

function Signup(){

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [category, setCategory] = useState("Coach");
  const [name, setName] = useState("")
  const [link, setLink] = useState("")
  const [teamID, setTeamID] = useState("")
  const [motto, setMotto] = useState("")


  function UserGreeting(props) {
    if(category === "Coach"){
      return <> 
      <p id="label">Create Your Unique Team Code</p>
      <p>Share this with staff and players to have them join!</p>
       <input
        className="form-control"
        placeholder="1234"
        value={teamID}
        onChange={(e) => setTeamID(e.target.value)}
        required
      />
      </>
    }else{
      return <h1></h1>
    }
  }
  




  function register(event) {
    event.preventDefault()
    API.signup({
      email: email,
      password: password,
      category: category,
      name: name,
      link: link,
      teamID: teamID,
      motto: motto
    })
      .then((res) => {
        console.log(res)
        history.push("/login")
      }
      )
      .catch((err) => console.log(err));
  }


  const history = useHistory()


    return (
      <>
        <Nav />
        <Wrapper>
          <form className="signup" onSubmit={register}>
            <p id="label">Email</p>
            <input
              className="form-control"
              type="email"
              name="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <p id="label">Password</p>
            <input
              className="form-control"
              type="password"
              name="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
             <p id="label">Category</p>
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
            <p id="label">Full Name</p>
            <input
              className="form-control"
              type="name"
              name="name"
              placeholder="Joe Smith"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <p id="label">Link a Profile Picture (optional)</p>
             <input
              className="form-control"
              placeholder="Enter Url to picture"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              required
            />
            <p id="label">Team Motto</p>
             <input
              className="form-control"
              placeholder="Ex: Leave no Doubts"
              value={motto}
              onChange={(e) => setMotto(e.target.value)}
              required
            />
           <UserGreeting />
            <input id="submit" className="btn btn-center"type="submit" value="Submit" />
          </form>
        </Wrapper>
      </>
    );
  }



  export default Signup
