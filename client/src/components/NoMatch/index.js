import React from "react"
import {Link} from "react-router-dom"



function NoMatch(props){
    return (  
        
    <div className="jumbotron">
        Sorry the Route you are looking for no longer exists
        <div>Head back to your home page</div>
        <Link to={"/dash/" + props.email}>
          Click Here!
        </Link>
    </div>
    )}
 


export default NoMatch