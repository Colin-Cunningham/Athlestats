import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Player from "./components/Player/index";
import Buttons from "./components/Buttons/index";
import Recruiter from "./components/Recruiter/index";
import Coach from "./components/Coach/index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashnav from "./pages/UserDash/index"
import Footer from "./components/Footer/Index"

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path={["/", "/home"]}>
            <Buttons />
            <Footer />
          </Route>
          <Route exact path={["/player"]}>
            <Player />
            <Footer />
          </Route>
          <Route exact path={["/coach"]}>
            <Coach />
            <Footer />
          </Route>
          <Route exact path={["/recruiter"]}>
            <Recruiter />
          </Route>
          <Route exact path={["/login"]}>
            <Login />
          </Route>
          <Route exact path={["/signup"]}>
            <Signup />
          </Route>
          <Route path={["/dash/:email"]}>
            <Dashnav />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
