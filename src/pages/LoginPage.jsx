import React, { useState } from "react";
import "./LoginPage.css";
import LoginBox from "../components/LoginBox";
import loginImage from "../Login-Image.png";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Button } from "@material-ui/core";
import SignupScreen from "../components/SignupScreen";

const LoginPage = () => {
  const [showSignup, setshowSignup] = useState(false);
  const openSignupScreen = () => {
    setshowSignup((prev) => !prev);
  };

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
          <Button
            onClick={openSignupScreen}
            className="loginPage__SignupButton"
          >
            Sign up
          </Button>
          <SignupScreen showSignup={showSignup} setshowSignup={setshowSignup} />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
