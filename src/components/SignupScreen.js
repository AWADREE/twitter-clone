import React, { useRef } from "react";
import { useSpring, animated } from "react-spring";
import "./SignupScreen.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Button } from "@material-ui/core";

const SignupScreen = ({
  showSignup,
  setshowSignup,
  email,
  setEmail,
  password,
  setPassword,
  handleSignup,
  hasAccount,
  setHasAccount,
  emailError,
  passwordError,
  username,
  setUsername,
  displayName,
  setDisplayName,
}) => {
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
            <div>
              <TwitterIcon className="signup__Icon" />
              <h3 className="signup__h3">Create your account</h3>
              <div className="signup__InputContainer">
                <p className="signup__ErrorMessage">{emailError}</p>
                <input
                  className="signup__Input"
                  placeholder="Email"
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />

                <p className="signup__ErrorMessage">{passwordError}</p>
                <input
                  className="signup__Input"
                  placeholder="Password"
                  type="password"
                  required
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />

                <input
                  className="signup__Input"
                  placeholder="Username"
                  type="text"
                  required
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                />
                <input
                  className="signup__Input"
                  placeholder="Display name"
                  type="text"
                  required
                  value={displayName}
                  onChange={(event) => setDisplayName(event.target.value)}
                />
              </div>

              <Button
                className="signup__Button"
                type="submit"
                onClick={() => {
                  handleSignup();
                  // setshowSignup((prev) => !prev);
                }}
              >
                Sign up
              </Button>
            </div>
          </animated.div>
        </div>
      ) : null}
    </div>
  );
};

export default SignupScreen;
