import React from "react";
import "./HomePage.css";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Widgets from "../components/Widgets";

const HomePage = (props) => {
  return (
    <div className="app">
      <Sidebar handleLogout={props.handleLogout} />
      <Feed />
      <Widgets />
    </div>
  );
};

export default HomePage;
