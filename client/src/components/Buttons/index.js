import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Buttons() {
  return (
    <div id="directOne" class="shadow p-3 mb-5 rounded">
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
  );
}

export default Buttons;
