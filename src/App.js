import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Facebook from "./Facebook/Facebook";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/fb">
            <Facebook />
          </Route>
          <Route path="/">
            <h1>Hello, there is nothing here</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
