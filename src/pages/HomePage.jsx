import React, { useState } from "react";
import "./HomePage.css";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Widgets from "../components/Widgets";
import { Card, Button, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const HomePage = (props) => {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.replace("/");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <div className="app">
      <Sidebar handleLogout={handleLogout} logoutError={error} />
      <Feed currentUser={currentUser} />
      <Widgets />
    </div>
  );
};

export default HomePage;
