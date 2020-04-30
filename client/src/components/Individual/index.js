
import React, { useState, useEffect } from "react";

import API from "../../utils/API";
import { Link, useParams } from "react-router-dom";

function Stats(props) {
  const [player, setPlayer] = useState([]);

  useEffect(() => {
    getPlayers();
  });

  const teamID = props.teamID;
  const {playerID} = useParams()

  function getPlayers() {
    API.seePlayer(teamID, playerID)
      .then((res) => {
        setPlayer(res.data);console.log(res.data)
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <h4 className="welcome">Welcome back {props.category}</h4>
      <div id="container">
        <img
          className="ui centered circular image"
          id="profile"
          src={props.link ? props.link : "https://via.placeholder.com/150"}
          alt="..."
        />
        <button>Edit</button>
        <h3 id="name">{props.name}</h3>

        <div className="do">
          <h4>Your teams Stats</h4>
          <h5>Location:</h5>
        </div>

        <div>
          <table className="table table-dark">
            <thead className="thead-light">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Position</th>
              </tr>
            </thead>
           
          </table>
        </div>
      </div>
    </>
  );
}


export default Stats;
