import { Button } from "@material-ui/core";
import React from "react";
import "./LoginBox.css";

const LoginBox = () => {
  return (
    <div className="loginBox">
      <form className="loginBox__Form">
        <div className="loginBox__InputContainer">
          <input placeholder="Email" type="text" />
        </div>
        <div className="loginBox__InputContainer">
          <input placeholder="Password" type="password" />
        </div>

        <Button className="loginBox__LoginButton">Log in</Button>
      </form>
    </div>
  );
};

export default LoginBox;
