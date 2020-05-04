import React, { useState, useEffect } from "react";
import "./style.css";
import API from "../../utils/API";
import {Link} from "react-router-dom"


function Profile(props) {
 



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

        <div className="don">
          <h4> "{props.motto}"</h4>
        </div>

        <div className="do">
          <h4>TeamID: {props.teamID}</h4>
        </div>

        <div id="about">
          <h4 id="head">Highschool Football News</h4>
          <ul className="list-group">
           <a target= "_blank"href="https://sanangelolive.com/news/sports/2020-05-02/will-there-be-2020-high-school-football-season" className="list-group-item">Will there be a 2020 Highschool Season?</a>
           <a target= "_blank"href="https://usatodayhss.com/2020/the-best-teams-in-high-school-sports-history" className="list-group-item">Best Teams in Higshchool sports History</a>
           <a target= "_blank"href="https://www.palmbeachpost.com/sports/20200403/coronavirus-florida-what-will-high-school-football-look-like-going-forward" className="list-group-item">What will Higshchool Football look like going forward?</a>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Profile;
