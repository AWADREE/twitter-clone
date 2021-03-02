import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSpring, animated } from "react-spring";

import TwitterIcon from "@material-ui/icons/Twitter";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";

import { useAuth } from "../contexts/AuthContext";
import "./SignupScreen.css";

export default function Signup({ showSignup, setshowSignup }) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  // const screenRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/home");
    } catch {
      setError("Email already signed up");
    }
    setLoading(false);
  }

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showSignup ? 1 : 0,
    transform: showSignup ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeScreen = (e) => {
    // if (screenRef.current === e.target) {
    setshowSignup(false);
    setError("");
    // }
  };

  return (
    <>
      {showSignup ? (
        <div
          className="signup__DarkenedBackground"
          //
        >
          <animated.div style={animation} className="signup__Background">
            <div>
              <div className="signup__header">
                <TwitterIcon className="signup__Icon" />
                <Button className="signup__CloseButton" onClick={closeScreen}>
                  <CloseIcon />
                </Button>
              </div>
              <h3 className="signup__h3">Create your account</h3>

              <form onSubmit={handleSubmit}>
                <div className="signup__InputContainer" id="email">
                  <input
                    className="signup__Input"
                    placeholder="Email"
                    type="email"
                    ref={emailRef}
                    required
                  />
                </div>

                <div className="signup__InputContainer" id="password">
                  <input
                    className="signup__Input"
                    placeholder="Password"
                    type="password"
                    ref={passwordRef}
                    required
                  />
                </div>
                <div className="signup__InputContainer" id="password-confirm">
                  <input
                    className="signup__Input"
                    placeholder="Confirm password"
                    type="password"
                    ref={passwordConfirmRef}
                    required
                  />
                </div>
                {error && <p className="signup__ErrorMessage">{error}</p>}
                <Button
                  disabled={loading}
                  className="signup__Button"
                  type="submit"
                >
                  Sign Up
                </Button>
              </form>
            </div>
          </animated.div>
        </div>
      ) : null}
    </>
  );
}

// import React, { useRef } from "react";
// import { useSpring, animated } from "react-spring";
// import "./SignupScreen.css";
// import TwitterIcon from "@material-ui/icons/Twitter";
// import { Button } from "@material-ui/core";

// const SignupScreen = ({
//   showSignup,
//   setshowSignup,
//   email,
//   setEmail,
//   password,
//   setPassword,
//   handleSignup,
//   hasAccount,
//   setHasAccount,
//   emailError,
//   passwordError,
//   username,
//   setUsername,
//   displayName,
//   setDisplayName,
// }) => {

//   const screenRef = useRef();

//   const animation = useSpring({
//     config: {
//       duration: 250,
//     },
//     opacity: showSignup ? 1 : 0,
//     transform: showSignup ? `translateY(0%)` : `translateY(-100%)`,
//   });

//   const closeScreen = (e) => {
//     if (screenRef.current === e.target) {
//       setshowSignup(false);
//     }
//   };

//   return (
//     <div>
//       {showSignup ? (
//         <div
//           className="signup__DarkenedBackground"
//           ref={screenRef}
//           onClick={closeScreen}
//         >
//           <animated.div style={animation} className="signup__Background">
//             <div>

//               <TwitterIcon className="signup__Icon" />
//               <h3 className="signup__h3">Create your account</h3>

//               <div className="signup__InputContainer">
//                 <p className="signup__ErrorMessage">{emailError}</p>
//                 <input
//                   className="signup__Input"
//                   placeholder="Email"
//                   type="email"
//                   required
//                   value={email}
//                   onChange={(event) => setEmail(event.target.value)}
//                 />

//                 <p className="signup__ErrorMessage">{passwordError}</p>
//                 <input
//                   className="signup__Input"
//                   placeholder="Password"
//                   type="password"
//                   required
//                   value={password}
//                   onChange={(event) => setPassword(event.target.value)}
//                 />

//                 <input
//                   className="signup__Input"
//                   placeholder="Username"
//                   type="text"
//                   required
//                   value={username}
//                   onChange={(event) => setUsername(event.target.value)}
//                 />
//                 <input
//                   className="signup__Input"
//                   placeholder="Display name"
//                   type="text"
//                   required
//                   value={displayName}
//                   onChange={(event) => setDisplayName(event.target.value)}
//                 />
//               </div>

//               <Button
//                 className="signup__Button"
//                 type="submit"
//                 onClick={() => {
//                   handleSignup();
//                   // setshowSignup((prev) => !prev);
//                 }}
//               >
//                 Sign up
//               </Button>
//             </div>
//           </animated.div>
//         </div>
//       ) : null}
//     </div>
//   );
// };

// export default SignupScreen;
