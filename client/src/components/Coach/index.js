import React from "react";
import Nav from "../Nav/index";
import Wrapper from "../Wrapper/Index";
import { Link } from "react-router-dom"
import "./style.css"

function Coach() {
  return (
    <>
      <Nav />
      <Wrapper>
        <div className="container-fluid">
          <div className="bd-highlight">
            <div id="info1" className="p-2 bd-highlight cont">
              <i className="fas fa-dumbbell fa-3x"></i><h4 id="tag">Build Your Roster!</h4>
              <br />
              <p className="justify">
                Stay up to date on your latest stats, coordinate with your staff
                to see where you can improve your game! Start by building your roster today!
              </p>
            </div>
            <div className="p-2 bd-highlight cont">
              <i className="fas fa-link fa-3x"></i><h4 id="tag">Input Your Stats</h4>
              <br />
              <p className="justify">
              Everything at your fingertips! Player names, stats, depth charts, scouting reports, and combine/workout stats to help evaluate your players. Update your team stats, and give your team more exposure. With features that allow you to communicate with recruiters and scouts, send stats and videos (soon), Athlestats is the premiere way to buld your program and send your players to the next level.

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

export default Coach;
