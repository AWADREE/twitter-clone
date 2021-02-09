import React from "react";
import "./LoginPage.css";
import LoginBox from "../components/LoginBox";
import loginImage from "../Login-Image.png";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Button } from "@material-ui/core";

const LoginPage = () => {
  return (
    <div className="loginPage">
      <img src={loginImage} alt="" />
      <TwitterIcon className="loginPage__LargeTwitterIcon" />

      <div className="loginPage__Interactive">
        <LoginBox />

        <TwitterIcon className="loginPage__SmallTwitterIcon" />

        <div className="loginPage__WelcomeMessageBox">
          <h1>Happening now</h1>
          <h3>Join Twitter today.</h3>
          <Button className="loginPage__SignupButton">Sign up</Button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
