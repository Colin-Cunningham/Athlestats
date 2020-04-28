import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav/index"
import Wrapper from "../Wrapper/Index";
import "./style.css";

function Buttons() {
  return (
    <>
    <Nav />
    <Wrapper>
    <div id="direct" className="shadow p-3 mb-5 rounded">
      <Link to="/coach">
        <button type="button" value="coach" className="btn btn-lg btn-block">
          Coaches
        </button>
      </Link>
      <Link to="/player">
        <button type="button" value="player" className="btn btn-lg btn-block">
          Players
        </button>
      </Link>
      <Link to="/recruiter">
        <button
          type="button"
          value="recruiter"
          className="btn btn-lg btn-block"
        >
          Recruiter
        </button>
      </Link>
      <a type="a" href="/login" value="Log in" className="login">
        Already a member? Log in here!
      </a>
    </div>
    </Wrapper>
    </>
  );
}

export default Buttons;
