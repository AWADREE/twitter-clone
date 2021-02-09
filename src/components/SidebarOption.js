import React from "react";
import "./SidebarOption.css";
import { Link } from "react-router-dom";

function SidebarOption({ active, text, Icon, link }) {
  return (
    <Link className="sidebarOption__Link" to={link}>
      <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
        <Icon />
        <h2>{text}</h2>
      </div>
    </Link>
  );
}

//if active then add the following sidebarOption--active class to the component
export default SidebarOption;
