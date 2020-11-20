import "./Login.css";
import React from "react";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";
import { useStateValue } from "../StateProvider";

function Login() {
  const [state, dispatch] = useStateValue();
  const signIn = (e) => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: "SET_USER",
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img src="facebooklogo.png" alt="fblogo" />
        <img src="fb2.png" alt="fblogo" className="login__fbtext" />
      </div>
      <Button type="submit" onClick={signIn}>
        Login
      </Button>
    </div>
  );
}

export default Login;
