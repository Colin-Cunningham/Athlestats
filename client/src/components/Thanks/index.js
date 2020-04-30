import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import { useParams } from "react-router-dom";


function Thank(props){

    useEffect(() => {
        update();
        addID()
      }, []);
    
      const {email} = useParams()
      const {id} = useParams()
      const {type} = useParams()
      
      
      function update() {
        API.updateUserTeam(email, id)
          .then((res) => {console.log(res)})
          .catch((err) => console.log(err));
      }

     

      function addID(){
        API.getTeam(id)
        .then((res) => {add2team(email, res.data.players._id)})
        .catch((err) => console.log(err));
    }



      function add2team(email, number){
        if(type === "Player" ){
          API.add2user(email, number )
          .then((res) => {console.log(res)})
          .catch((err) => console.log(err));
        }else{
          console.log(type)
        }
      }



    return(
        <div>You have succsefully created your team! Click the football icon to see it!</div>
    )
}



export default Thank