import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

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
      setError("Failed to Log in");
    }
    setLoading(false);
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Log In
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 tect-center mt-2">
        Need an account? <Link to="/signup">Sign up</Link>
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
