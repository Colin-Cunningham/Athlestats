import React from "react";
import Nav from "../Nav/index";
import Wrapper from "../Wrapper/Index";
import {Link} from "react-router-dom";



function Recruiter() {
  return (
    <>
    <Nav />
    <Wrapper> 
      <div className="container-fluid">
          <div onClick={alert(" This Page is Currently Under Construction")} className="p-2 bd-highlight cont">
            <i className="fas fa-hands-helping fa-3x"></i> <h4 id="tag">Start Connecting!</h4>
            <br />
            <p className="justify">
            Regardless of how you hear about a player Atlestat is the premiere way to locate, track, scout and recruit players across the nation. A centralized location for scouts and recruiting featuring player names, positions, schools and stats and videos (coming soon). Real time updates and direct communication with players and coaches which can lead you to the next program changing student athlete.

            </p>
          </div>
          <Link to="/signup">
            <p id="login">
              Sound good for you? Register for free here!
            </p>
          </Link>
        </div>
    </Wrapper>
  </>
  );
}

export default Recruiter;
