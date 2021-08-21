import React from "react";
import { Button } from "@material-ui/core";
import "./login.css";

function Login() {
  const signIn = () => {
    console.log(1234);
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://www.logo.wine/a/logo/Discord_(software)/Discord_(software)-Logo.wine.svg"
          alt="logo"
        />
      </div>
      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}

export default Login;
