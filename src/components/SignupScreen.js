import React, { useRef, useEffect, useCallback, useState } from "react";
import { useSpring, animated } from "react-spring";
import "./SignupScreen.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Button } from "@material-ui/core";
import { auth } from "./firebase";

const SignupScreen = ({ showSignup, setshowSignup }) => {
  const screenRef = useRef();

  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHassAccount] = useState(false);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleLogin = () => {
    clearErrors();

    auth.signInWithEmailAndPassword(email, password).catch((err) => {
      switch (err.code) {
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
          setEmailError(err.message);
          break;
        case "auth/wrong-password":
          setPasswordError(err.message);
          break;
      }
    });
  };

  const handleSignup = () => {
    clearErrors();

    auth.craeteUserWithEmailAndPassword(email, password).catch((err) => {
      switch (err.code) {
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailError(err.message);
          break;
        case "auth/weak-password":
          setPasswordError(err.message);
          break;
      }
    });
  };

  const handleLogout = () => {
    auth.signOut();
  };

  const authListener = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

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
