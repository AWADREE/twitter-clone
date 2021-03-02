import { React, useEffect, useCallback, useState } from "react";
import "./App.css";
import { AuthProvider } from "../contexts/AuthContext";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";

import PrivateRoute from "./PrivateRoute";

//pages
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import LoginPage from "../pages/LoginPage";
// import { auth } from "./firebase";

const App = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [username, setUsername] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  // const clearInputs = () => {
  //   setEmail("");
  //   setPassword("");
  // };

  // const clearErrors = () => {
  //   setEmailError("");
  //   setPasswordError("");
  // };

  // const handleLogin = () => {
  //   clearErrors();

  //   auth.signInWithEmailAndPassword(email, password).catch((err) => {
  //     switch (err.code) {
  //       case "auth/invalid-email":
  //       case "auth/user-disabled":
  //       case "auth/user-not-found":
  //         setEmailError(err.message);
  //         break;
  //       case "auth/wrong-password":
  //         setPasswordError(err.message);
  //         break;
  //     }
  //   });
  // };

  // const handleSignup = () => {
  //   clearErrors();

  //   auth.createUserWithEmailAndPassword(email, password).catch((err) => {
  //     switch (err.code) {
  //       case "auth/email-already-in-use":
  //       case "auth/invalid-email":
  //         setEmailError(err.message);
  //         break;
  //       case "auth/weak-password":
  //         setPasswordError(err.message);
  //         break;
  //     }
  //   });
  // };

  // const handleLogout = () => {
  //   auth.signOut();
  // };

  // const authListener = () => {
  //   auth.onAuthStateChanged((user) => {
  //     if (user) {
  //       clearInputs();
  //       setUser(user);
  //     } else {
  //       setUser("");
  //     }
  //   });
  // };

  // const handleHomeLoad = () => {
  //   if (user) {
  //     //go to home page
  //   } else {
  //     //do nothing
  //   }
  // };

  // useEffect(() => {
  //   authListener();
  // }, []);

  return (
    <Router>
      <Switch>
        <AuthProvider>
          <Route
            exact
            path="/"
            render={(props) => (
              <LoginPage
              // email={email}
              // setEmail={setEmail}
              // password={password}
              // setPassword={setPassword}
              // handleSignup={handleSignup}
              // handleLogin={handleLogin}
              // hasAccount={hasAccount}
              // setHasAccount={setHasAccount}
              // emailError={emailError}
              // passwordError={passwordError}
              // username={username}
              // setUsername={setUsername}
              // displayName={displayName}
              // setDisplayName={setDisplayName}
              // user={user}
              />
            )}
          />

          <PrivateRoute exact path="/home" component={HomePage} />

          <Route exact path="/404" component={ErrorPage} />

          {/* <Redirect to="/404" /> */}
        </AuthProvider>
      </Switch>
    </Router>
  );
};

export default App;
