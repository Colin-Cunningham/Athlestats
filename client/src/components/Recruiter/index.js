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
             Connect with Coaches and Students alike. Build Recruitment boards, email students and watch highlight tapes all within the app. Arrange vists, track engagment all within the app. See live statistical updates on players as they progress throughout the season.
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
