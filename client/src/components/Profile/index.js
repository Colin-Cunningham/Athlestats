import React, { useState, useEffect } from "react";
import "./style.css";
import API from "../../utils/API";
import { Link, useParams } from "react-router-dom";



function Profile(props) {

    const [team, setTeam] = useState([]);

   
  
    useEffect(() => {
        getTeam()
     } );
     
     const  teamID  = props.teamID;

    function getTeam(){
       
        API.getTeam(teamID)
        .then((res) => {setTeam(res.data)})
        .catch((err) => console.log(err));
    }
    




  return (
    <>
      <h4 className="welcome">Welcome back {props.category}</h4>
      <div id="container">
        <img
          className="ui centered circular image"
          id="profile"
          src= {props.link?  props.link : "https://via.placeholder.com/150" }
          alt="..."
        />
        <button>Edit</button>
        <h3 id="name">{props.name}</h3>
        
        <div className="do">
        <h4>{team.highschool}  {team.name}</h4>
        <h5>Location:</h5>
        </div>



      </div>
    </>
  );
}

export default Profile;
