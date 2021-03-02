import React from "react";
import "./App.css";
import { AuthProvider } from "../contexts/AuthContext";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import PrivateRoute from "./PrivateRoute";

//pages
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import LoginPage from "../pages/LoginPage";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path="/" render={(props) => <LoginPage />} />

          <PrivateRoute exact path="/home" component={HomePage} />

          <Route exact path="/404" component={ErrorPage} />

          <Redirect to="/404" />
        </Switch>
      </AuthProvider>
    </Router>
  );
};

export default App;
