import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import "./Facebook.css";
import Widgets from "./Widgets";
import Login from "./Login";
import { useStateValue } from "../StateProvider";

function Facebook() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="facebook">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default Facebook;
