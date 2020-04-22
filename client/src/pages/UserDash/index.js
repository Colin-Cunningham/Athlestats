import React, { useState, useEffect } from "react";
import "./style.css";
import API from "../../utils/API";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="over">
      <div>
        <div id="holder" className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1>Welcome to Athlestat</h1>
            <h5>
              {user.category} {user.name}
            </h5>
          </div>
        </div>
      </div>
      <div className="sidenav">
        <a href="dash/home">Home</a>
        <a href="services">Teams</a>
        <a href="clients">Connect</a>
        <a href="contact">Profile</a>
        <a href="about">Settings</a>
      </div>
      <div className="main">
        <Router>
          <Switch>
            <Route path={["/dash/home"]}> 
              <DashHome  />
            </Route>
          </Switch>
          </Router>
      </div>
    </div>
  );
}

export default DashNav;
