import React, { useState, useHistory  } from "react";
import "./style.css";
import API from "../../utils/API";
import { useParams } from "react-router-dom";

function AddPlayers(props) {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [teamID, setTeamID] = useState("");
  const [plemail, setPlemail] = useState("");
  const [cellPhone, setCellPhone] = useState("");
  const [highlight, setHighlight] = useState("");
  const [oPosition, setOposition] = useState("");
  const [dPosition, setDposition] = useState("");
  const [jerseyNumber, setJerseyNumber] = useState("");

  const { email } = useParams();


  function AddPlayer(event) {
    event.preventDefault();
    const history = useHistory;
    API.addPlayer({
      firstName: first,
      lastName: last,
      teamID: teamID,
      email: plemail,
      cellPhone: cellPhone,
      oPosition: oPosition,
      dPosition: dPosition,
      jerseyNumber: jerseyNumber,
      highlightTape: highlight,
      stats: [],
    })
      .then((res) => {
        history.push("/dash/" + email)
      })
      .catch((err) => alert(err));
  }




  return (
    <form id="teamForm">
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
         <p className="inputName">Offensive Position</p>
        <input
          type="text"
          className="form-control"
          placeholder="QB"
          onChange={(e) => setOposition(e.target.value)}
          value={oPosition}
        />
         <p className="inputName">Defensive Position</p>
        <input
          type="text"
          className="form-control"
          placeholder="CB"
          onChange={(e) => setDposition(e.target.value)}
          value={dPosition}
        />
          <p className="inputName">Jersey Number</p>
        <input
          type="text"
          className="form-control"
          placeholder="Number"
          onChange={(e) => setJerseyNumber(e.target.value)}
          value={jerseyNumber}
        />
        <p className="inputName">Highschool ID</p>
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
        <p className="inputName">Cell Phone</p>
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
          placeholder="Highlight Tape"
          onChange={(e) => setHighlight(e.target.value)}
          value={highlight}
        />

        <button onClick={AddPlayer}>Submit</button>
      </div>
    </form>
  );
}

export default AddPlayers;
