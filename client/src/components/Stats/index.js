import React, { useState, useEffect } from "react";

import API from "../../utils/API";
import { Link, useParams } from "react-router-dom";

function Stats(props) {
  const [player, setPlayer] = useState([]);
  const [team, setTeam] = useState([]);

  useEffect(() => {
    getPlayers();
  });

  const teamID = props.teamID;
  const { email } = useParams();

  function getPlayers() {
    API.getTeam(teamID)
      .then((res) => {
        setTeam(res.data);
        setPlayer(res.data.players);
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <div id="container">
       {team ? (
         <>
        <h3>{team.highschool} {team.name}</h3>
        <div id="teamInfo">
       
        <h4 > {team.city},{team.state}</h4>
        </div>
        </>
       ) : (
         <h4>You need to create a team</h4>
       )
       }

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
