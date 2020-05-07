import React, { useState, useEffect } from "react";
import "./style.css";
import API from "../../utils/API";
import { Route, Switch, Link, useParams } from "react-router-dom";
import CreateTeam from "../../components/CreateTeam/index";
import Thank from "../../components/Thanks/index";
import AddPlayer from "../../components/AddPlayers/index";
import Profile from "../../components/Profile/index";
import Stats from "../../components/Stats/index";
import Individual from "../../components/Individual/index";
import NoMatch from "../../components/NoMatch/index"



function DashNav() {
  const [user, setUser] = useState([]);

  const { email } = useParams();

  useEffect(() => {
    API.getInfo(email)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="over">
      <div id="holder">
        <p></p>
      </div>
      <div className="sidenav">
        <Link to={"/dash/" + email}>
          <i className="fas fa-home"></i>
        </Link>
        <Link to={"/dash/" + email + "/" + user.category}>
          <i className="fas fa-plus-square"></i>
        </Link>
        <Link to={"/dash/" + email + "/stats/"}>
          <i className="fas fa-football-ball"></i>
        </Link>
        <Link to={"/dash/" + email}>
          <i className="fas fa-user-alt"></i>
        </Link>
      </div>
      <div className="main">
        <Switch>
          <Route exact path={["/dash/:email"]}>
            <Profile
              name={user.name}
              category={user.category}
              email={user.email}
              link={user.link}
              teamID={user.teamID}
              motto={user.motto}
              
            />
          </Route>
          <Route exact path={["/dash/:email/coach"]}>
            <CreateTeam
              name={user.name}
              category={user.category}
              email={user.email}
              teamID={user.teamID}
            />
          </Route>
          <Route exact path={["/dash/:email/player"]}>
            <AddPlayer
              name={user.name}
              category={user.category}
              email={user.email}
              teamID={user.teamID}
            />
          </Route>
          <Route exact path={["/dash/:email/stats"]}>
            <Stats
              name={user.name}
              category={user.category}
              email={user.email}
              link={user.link}
              teamID={user.teamID}
            />
          </Route>
          <Route exact path={["/dash/:email/stats/:playerID"]}>
            <Individual
              name={user.name}
              category={user.category}
              email={user.email}
              link={user.link}
              teamID={user.teamID}
            />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default DashNav;
