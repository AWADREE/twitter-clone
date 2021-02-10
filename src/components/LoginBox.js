import { Button } from "@material-ui/core";
import React from "react";
import "./LoginBox.css";

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
          <p>{props.emailError}</p>
        </div>
        <div className="loginBox__InputContainer">
          <input
            placeholder="Password"
            type="password"
            required
            value={props.password}
          />
        </div>

        <Button className="loginBox__LoginButton">Log in</Button>
      </form>
    </div>
  );
};

export default LoginBox;
