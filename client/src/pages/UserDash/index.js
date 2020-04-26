import React, { useState, useEffect } from "react";
import "./style.css";
import API from "../../utils/API";
import { Route, Switch, Link } from "react-router-dom";
import DashHome from "../../components/DashHome/index"
import CreateTeam from "../../components/CreateTeam/index"
import Thank from "../../components/Thanks/index"


function DashNav() {
  const [user, setUser] = useState([]);
  
  function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
  }
  
  var value = getCookie("id");
  
  function parseJwt(token) {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
  
    return JSON.parse(jsonPayload);
  }
  
  const token = parseJwt(value);
  

  const { email } = token;
  useEffect(() => {
    API.getInfo(email)
      .then((res) => {setUser(res.data); console.log(res.data)})
      .catch((err) => console.log(err));
  }, []);


  return (
    <div className="over">
      <div id="holder">
        <p></p>
      </div>
      <div className="sidenav">
        <Link to={"dash/home/" + user.teamID}><i className="fas fa-home"></i></Link>
        <Link to="dash/stats"><i className="fas fa-chart-pie"></i></Link>
        <Link to="dash/clients"><i className="fas fa-football-ball"></i></Link>
        <Link to="dash/contact"><i className="fas fa-user-alt"></i></Link>
        <Link to="dash/about"><i className="fas fa-cog"></i></Link>
      </div>
      <div className="main">
          <Switch>
            <Route exact path={["/dash", "/dash/home/:teamID"]}> 
              <DashHome name={user.name} category={user.category} email={user.email}  />
            </Route>
            <Route exact path={["/dash/team/:email"]}> 
              <CreateTeam name={user.name} category={user.category} email={user.email}  />
            </Route>
            <Route exact path={["/dash/:email/:id"]}> 
              <Thank />
            </Route>
          </Switch>
      </div>
    </div>
  );
}

export default DashNav;
