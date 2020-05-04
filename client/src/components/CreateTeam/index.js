import React, { useState } from "react";
import "./style.css";
import API from "../../utils/API";
import { useParams, useHistory } from "react-router-dom";

function CreateTeam(props) {
  const [sport, setSport] = useState("");
  const [name, setName] = useState("");
  const [highschool, setHighschool] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");


  const {email} = useParams()
  const teamID = props.teamID

  function createTeam(event) {
    event.preventDefault()
    API.createTeam({
      sport: sport,
      name: name,
      highschool: highschool,
      city: city, 
      state: state,
      teamID: teamID
    })
      .then((res) => {
       history.push("/dash/" + email + "/" ) 
      }
      )
      .catch((err) => console.log(err));
  }

  const history = useHistory()

  return (
    <form id="teamForm">
      <h3>Creating your team</h3>
      <div className="form-group">
        <p className="inputName">Sport</p>
        <input
          className="form-control"
          type="text"
          placeholder="Football"
          onChange={(e) => setSport(e.target.value)}
          value={sport}
        />
        <p className="inputName">Team Name</p>
        <input
          className="form-control"
          type="text"
          placeholder="Example: Falcons"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <p className="inputName">Highschool</p>
        <input
          className="form-control"
          type="text"
          placeholder="Example: Xavier High"
          onChange={(e) => setHighschool(e.target.value)}
          value={highschool}
        />
        <p className="inputName">Enter Location</p>
        <div className="form-row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="City"
              onChange={(e) => setCity(e.target.value)}
              value={city}
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="State"
              onChange={(e) => setState(e.target.value)}
              value={state}
            />
          </div>
        </div>        
          <button onClick={createTeam}>Submit</button>
      
      </div>
    </form>
  );
}

export default CreateTeam;
