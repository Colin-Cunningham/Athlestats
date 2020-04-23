import React, { useState, useEffect } from "react";
import "./style.css";
import API from "../../utils/API";
import { Route, Switch, Link } from "react-router-dom";
import DashHome from "../../components/DashHome/index"

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

function DashNav() {
  const [user, setUser] = useState([]);
 

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
        <Link to={"dash/home/" + user.teamID}>Home</Link>
        <Link to="dash/teams">Teams</Link>
        <Link to="dash/clients">Connect</Link>
        <Link to="dash/contact">Profile</Link>
        <Link to="dash/about">Settings</Link>
      </div>
      <div className="main">
          <Switch>
            <Route path={"/dash/home/:id"}> 
              <DashHome name={user.name} category={user.category}  />
            </Route>
          </Switch>
      </div>
    </div>
  );
}

export default DashNav;
