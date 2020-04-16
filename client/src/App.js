import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Player from "./components/Player/index";
import Nav from "./components/Nav";
import Footer from "./components/Footer/Index";
import Wrapper from "./components/Wrapper/Index"
import Buttons from "./components/Buttons/index"
import Recruiter from "./components/Recruiter/index";
import Coach from "./components/Coach/index";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Wrapper>
          <Route exact path={["/", "/home"]}>
            <Buttons />
          </Route>
          <Route exact path={["/player"]}>
            <Player />
          </Route>
          <Route exact path={["/coach"]}>
            <Coach />
          </Route>
          <Route exact path={["/recruiter"]}>
            <Recruiter />
          </Route>
          </Wrapper>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
