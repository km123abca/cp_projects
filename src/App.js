import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Facebook from "./Facebook/Facebook";
import TravelLog from "./TravelLog/TravelLog";
import CvdTrker from "./CvdTrker/CvdTrker";
import GoogleMaps from "./googlemaps/GoogleMaps";

import FileUpload from "./FileUpload/FileUpload";
import Twitter from "./Twitter/Twitter";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/fb">
            <Facebook />
          </Route>
          <Route path="/cvt">
            <CvdTrker />
          </Route>
          <Route path="/tl">
            <TravelLog />
          </Route>
          <Route path="/maps">
            <GoogleMaps />
          </Route>
          <Route path="/twitter">
            <Twitter />
          </Route>

          <Route path="/fu">
            <FileUpload />
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
