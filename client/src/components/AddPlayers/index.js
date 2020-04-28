import React, { useState } from "react";
import "./style.css";
import API from "../../utils/API"
import { useParams } from "react-router-dom";
import { set } from "mongoose";

function AddPlayers() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [teamID, setTeamID] = useState("");
  const [plemail, setPlemail] = useState("");
  const [cellPhone, setCellPhone] = useState("");
  const [highlight, setHighlight] = useState("");


  const {email} = useParams()

  function AddPlayer(event) {
    event.preventDefault()
    console.log(email)
    API.createTeam({
      firstName: first,
      lastName: last,
      teamID: teamID,
      email: {type: String, required: true},
      cellPhone: {type: Number, required: true},
      position: {type: String},
      highlightTape:{type: URL},
      stats:[]
    })
      .then((res) => {
        window.location.href = "/dash/create/" + email + "/" + res.data._id 
      }
      )
      .catch((err) => console.log(err));
  }



  return (
    <form id="teamForm">
      <h3>Creating your profile</h3>
      <p>Dont worry you'll get to input your roster soon</p>
      <div className="form-group">
        <p className="inputName">First Name</p>
        <input
          className="form-control"
          type="text"
          placeholder="First Name"
          onChange={(e) => setFirst(e.target.value)}
          value={first}
        />
        <p className="inputName">Last Name</p>
        <input
          className="form-control"
          type="text"
          placeholder="Last Name"
          onChange={(e) => setLast(e.target.value)}
          value={last}
        />
        <p className="inputName">Highschool</p>
        <input
          className="form-control"
          type="text"
          placeholder="teamID required"
          onChange={(e) => setTeamID(e.target.value)}
          value={teamID}
        />
        <p className="inputName">Email</p>
            <input
              type="text"
              className="form-control"
              placeholder="Best email to contact"
              onChange={(e) => setPlemail(e.target.value)}
              value={plemail}
            />
             <p className="inputName">Email</p>
            <input
              type="text"
              className="form-control"
              placeholder="Cell Number"
              onChange={(e) => setCellPhone(e.target.value)}
              value={cellPhone}
            />
             <input
              type="text"
              className="form-control"
              placeholder="Cell Number"
              onChange={(e) => setHighlight(e.target.value)}
              value={highlight}
            />
      
        
          <button onClick={AddPlayer}>Submit</button>
      
      </div>
    </form>
  );
}

export default AddPlayers;
