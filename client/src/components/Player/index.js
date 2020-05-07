import React from "react";
import Nav from "../Nav/index";
import Wrapper from "../Wrapper/Index";
import { Link } from "react-router-dom"

function Player() {
  return (
    <>
    <Nav />
    <Wrapper>
      <div className="container-fluid">
        <div className="bd-highlight">
          <div id="info1" className="p-2 bd-highlight cont">
            <i className="fas fa-dumbbell fa-3x"></i><h4 id="tag">Check Your Roster!</h4>
            <br />
            <p className="justify">
              Stay up to date on your latest stats, coordinate with your coach
              to see where you can improve your game! Link up with your team, just enter your team code and start
              keeping track of your stats! 
            </p>
          </div>
          <div className="p-2 bd-highlight cont">
            <i className="fas fa-link fa-3x"></i><h4 id="tag">See Your Stats</h4>
            <br />
            <p className="justify">
            A centralized location to view your team, check your depth chart, check your stats and the stats of others. Athlestats is where the athletes go for all of their athletic needs. Reach out to recruiters, communicate with coaches and players and check your stats and see where you stack up!
            </p>
          </div>
          <Link to="/signup">
            <p id="login">
              Sound good for you? Register for free here!
            </p>
          </Link>
        </div>
      </div>
    </Wrapper>
  </>
  );
}

export default Player;
