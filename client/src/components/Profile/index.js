import React, { useState, useEffect } from "react";
import "./style.css";
import API from "../../utils/API";

function Profile(props) {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    getTeam();
  });

  const teamID = props.teamID;

  function getTeam() {
    API.getTeam(teamID)
      .then((res) => {
        setTeam(res.data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <div id="container">
        <h4 className="welcome">Welcome back {props.category}</h4>
        <img
          className="ui centered circular image"
          id="profile"
          src={props.link ? props.link : "https://via.placeholder.com/150"}
          alt="..."
        />
        <button>Edit</button>
        <h3 id="name">{props.name}</h3>

        <div className="do">
          <h4>
            {team.highschool} {team.name}
          </h4>
          <h5>Location:</h5>
          <h3>Get your players to connect using your teamID!</h3>
          <h4>{team._id}</h4>
        </div>

        <div id="about">
          <h4 id="head">Athlestat News</h4>
          <ul className="list-group">
            <li className="list-group-item">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item">Morbi leo risus</li>
            <li className="list-group-item">Porta ac consectetur ac</li>
            <li className="list-group-item">Vestibulum at eros</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Profile;
