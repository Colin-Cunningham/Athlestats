import React, { useState, useEffect } from "react";

import API from "../../utils/API";
import { Link, useParams } from "react-router-dom";

function Stats(props) {
  const [player, setPlayer] = useState([]);

  useEffect(() => {
    getPlayers();
  });

  const teamID = props.teamID;
  const { email } = useParams();

  function getPlayers() {
    API.getTeam(teamID)
      .then((res) => {
        setPlayer(res.data.players);
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
          <h4>Your Roster</h4>
          <h5>Location:</h5>
        </div>

        <div>
          <table className="table table-dark">
            <thead className="thead-light">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Offense</th>
                <th scope="col">Defense</th>
              </tr>
            </thead>
            <tbody>
              {player.map((player) => (
                <tr>
                  <th scope="row">{player.number}</th>

                  <Link to={"/dash/" + email + "/stats/" + player._id}>
                    <td>
                      {player.firstName} {player.lastName}
                    </td>
                  </Link>

                  <td>{player.oPosition}</td>
                  <td>{player.dPosition}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Stats;
