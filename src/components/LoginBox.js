import { Button } from "@material-ui/core";
import React from "react";
import "./LoginBox.css";
import { Link } from "react-router-dom";

const LoginBox = (props) => {
  return (
    <div className="loginBox">
      <form className="loginBox__Form">
        <div className="loginBox__InputContainer">
          <input
            placeholder="Email"
            type="text"
            autoFocus
            required
            value={props.email}
            onChange={(event) => props.setEmail(event.target.value)}
          />
          <p className="loginBox__ErrorMessage">{props.emailError}</p>
        </div>
        <div className="loginBox__InputContainer">
          <input
            placeholder="Password"
            type="password"
            required
            value={props.password}
            onChange={(event) => props.setPassword(event.target.value)}
          />
          <p className="loginBox__ErrorMessage">{props.passwordError}</p>
        </div>

        <Button
          className="loginBox__LoginButton"
          onClick={props.handleLogin}
          // to={props.user ? "/home" : null}
        >
          Log in
        </Button>
      </form>
    </div>
  );
};

export default LoginBox;
