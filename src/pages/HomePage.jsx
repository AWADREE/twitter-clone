import React from "react";
import "./HomePage.css";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Widgets from "../components/Widgets";

const HomePage = (props) => {
  return (
    //BEM
    <div className="app">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
};

export default HomePage;
