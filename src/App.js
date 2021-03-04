import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./views/Landing";
import Cats from "./views/Cats";
import Dogs from "./views/Dogs";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/cats">
          <Cats />
        </Route>
        <Route path="/dogs">
          <Dogs />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
