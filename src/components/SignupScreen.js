import React, { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import "./SignupScreen.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Button } from "@material-ui/core";

const SignupScreen = ({ showSignup, setshowSignup }) => {
  const screenRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showSignup ? 1 : 0,
    transform: showSignup ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeScreen = (e) => {
    if (screenRef.current === e.target) {
      setshowSignup(false);
    }
  };

  return (
    <div>
      {showSignup ? (
        <div
          className="signup__DarkenedBackground"
          ref={screenRef}
          onClick={closeScreen}
        >
          <animated.div style={animation} className="signup__Background">
            <form>
              <TwitterIcon className="signup__Icon" />
              <h3 className="signup__h3">Create your account</h3>
              <div className="signup__InputContainer">
                <input
                  className="signup__Input"
                  placeholder="Email"
                  type="email"
                />
                <input
                  className="signup__Input"
                  placeholder="Password"
                  type="password"
                />
              </div>

              <Button
                className="signup__Button"
                type="submit"
                onClick={() => setshowSignup((prev) => !prev)}
              >
                Sign up
              </Button>
            </form>
          </animated.div>
        </div>
      ) : null}
    </div>
  );
};

export default SignupScreen;
