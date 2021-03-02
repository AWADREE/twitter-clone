import React, { useRef, useState } from "react";
import {
  Form,
  //  Button,
  Card,
  Alert,
} from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import "./SignupScreen.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Button } from "@material-ui/core";
import { useSpring, animated } from "react-spring";

export default function Signup({ showSignup, setshowSignup }) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const screenRef = useRef();
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
      setError("Failed to create an account");
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
    if (screenRef.current === e.target) {
      setshowSignup(false);
    }
  };

  return (
    <>
      {showSignup ? (
        <div
          className="signup__DarkenedBackground"
          ref={screenRef}
          onClick={closeScreen}
        >
          <animated.div style={animation} className="signup__Background">
            <Card>
              <Card.Body>
                <h2 className="text-center mb-4">Sign up</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                  <Form.Group id="email">
                    <TwitterIcon className="signup__Icon" />
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" ref={emailRef} required />
                  </Form.Group>
                  <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} required />
                  </Form.Group>
                  <Form.Group id="password-confirm">
                    <Form.Label>Password Confirmation</Form.Label>
                    <Form.Control
                      type="password"
                      ref={passwordConfirmRef}
                      required
                    />
                  </Form.Group>

                  <Button disabled={loading} className="w-100" type="submit">
                    Sign Up
                  </Button>
                </Form>
              </Card.Body>
            </Card>
            {/* <div className="w-100 tect-center mt-2">
              Already have an account? <Link to="/login">Log In</Link>
            </div> */}
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
