import React from "react";
import { useHistory } from "react-router";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { AUTH_TOKEN } from "./constants";
import { Link } from "react-router-dom";

import "./App.scss";
import Container from "./components/Container";
import OnePieceLaughGame from "./components/OnePieceLaughGame";
import WordGame from "./components/WordGame";
import Login from "./components/Login";

const Header = () => {
  const history = useHistory();
  const authToken = localStorage.getItem(AUTH_TOKEN);
  return (
    <div>
      {!authToken && (
        <Link to="/login" className="ml1 no-underline black">
          login
        </Link>
      )}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Container>
          <Switch>
            <Route exact path="/onepiecegame" component={OnePieceLaughGame} />
            <Route exact path="/wordgame" component={WordGame} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
