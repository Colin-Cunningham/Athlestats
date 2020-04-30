import React, { useState } from "react";
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
  const [position, setPosition] = useState("");

  const { email } = useParams();






  function AddPlayer(event) {
    event.preventDefault();
    console.log(email);
    API.addPlayer({
      firstName: first,
      lastName: last,
      teamID: teamID,
      email: plemail,
      cellPhone: cellPhone,
      position: position,
      highlightTape: highlight,
      stats: [],
    })
      .then((res) => {
        window.location.href =
          "/dash/" + email + "/" + teamID + "/" + props.category + "/create"
      })
      .catch((err) => console.log(err));
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
         <p className="inputName">Position</p>
        <input
          type="text"
          className="form-control"
          placeholder="Position"
          onChange={(e) => setPosition(e.target.value)}
          value={position}
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
