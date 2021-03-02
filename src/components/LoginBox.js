import React, { useRef, useState } from "react";
import { Form, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import "./LoginBox.css";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/home");
    } catch {
      setError(
        "The username and password you entered did not match our records. Please double-check and try again."
      );
    }
    setLoading(false);
  }

  return (
    <>
      <div className="loginBox">
        <form className="loginBox__Form" onSubmit={handleSubmit}>
          <div className="loginBox__InputContainer" id="email">
            <input placeholder="Email" type="email" ref={emailRef} required />
          </div>
          <div className="loginBox__InputContainer" id="password">
            <input
              placeholder="Password"
              type="password"
              ref={passwordRef}
              required
            />
          </div>
          <Button
            disabled={loading}
            className="loginBox__LoginButton"
            type="submit"
          >
            Log in
          </Button>
        </form>
        {error && <p className="loginBox__ErrorMessage">{error}</p>}
      </div>
    </>
  );
}

// import { Button } from "@material-ui/core";
// import React from "react";
// import "./LoginBox.css";
// import { Link } from "react-router-dom";
// const LoginBox = (props) => {
//    return (
//   //   <div className="loginBox">

//   //     <form className="loginBox__Form">

//   //       <div className="loginBox__InputContainer">
//   //         <input
//   //             placeholder="Email"
//   //             type="text"
//   //             autoFocus
//   //             required
//   //             value={props.email}
//   //             onChange={(event) => props.setEmail(event.target.value)}
//   //           />
//   //         <p className="loginBox__ErrorMessage">{props.emailError}</p>
//   //       </div>
//   //       <div className="loginBox__InputContainer">

//   //         <input
//   //           placeholder="Password"
//   //           type="password"
//   //           required
//   //           value={props.password}
//   //           onChange={(event) => props.setPassword(event.target.value)}
//   //         />
//   //         <p className="loginBox__ErrorMessage">{props.passwordError}</p>
//   //       </div>

//   //       <Button
//   //         className="loginBox__LoginButton"
//   //         onClick={props.handleLogin}
//   //         // to={props.user ? "/home" : null}
//   //       >
//   //         Log in
//   //       </Button>
//   //     </form>
//   //   </div>
//   );
// };

// export default LoginBox;
