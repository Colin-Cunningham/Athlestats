import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { Link, useParams } from "react-router-dom";


function Thank(){

    useEffect(() => {
        update();
      }, []);
    
      const {email} = useParams()
      const {id} = useParams()

      function update() {
        API.updateUserTeam(email, id)
          .then((res) => {console.log(res)})
          .catch((err) => console.log(err));
      }
    


    return(
        <div>Thankssssssssssssss</div>
    )
}



export default Thank