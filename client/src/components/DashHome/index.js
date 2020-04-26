import React, { useState, useEffect } from "react";
import "./style.css";
import API from "../../utils/API";
import { Link, useParams } from "react-router-dom";

function DashHome(props) {
  const [team, setTeam] = useState([]);

  const { teamID } = useParams();

  useEffect(() => {
    console.log(teamID);
    API.getTeam(teamID)
      .then((res) => {setTeam(res.data); console.log(res.data)})
      .catch((err) => console.log(err));
  }, [teamID]);




  return (
    <>
      <h4 className="welcome">Welcome back {props.category}</h4>
      <div id="container">
        <img
          className="ui centered circular image"
          id="profile"
          src="https://via.placeholder.com/150"
          alt="..."
        />
        <h3 id="name">{props.name}</h3>
      </div>
      <div id="teams">
        <h3>Teams</h3>
        <button>{team.name}</button>
        <Link to={"/dash/team/" + props.email }> + Create New Team</Link>
      </div>
    </>
  );
}

export default DashHome;
