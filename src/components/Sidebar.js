import React from "react";

import "./Sidebar.css";

import SidebarOption from "./SidebarOption";

import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Button from "@material-ui/core/Button";

function Sidebar(props) {
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar__twitterIcon" />

      <SidebarOption active Icon={HomeIcon} link="/home" text="Home" />

      <SidebarOption Icon={SearchIcon} text="Explore" />

      <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />

      <SidebarOption Icon={MailOutlineIcon} text="Messages" />

      <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />

      <SidebarOption Icon={ListAltIcon} text="Lists" />

      <SidebarOption Icon={PermIdentityIcon} text="Profile" />

      <SidebarOption Icon={MoreHorizIcon} text="More" />

      <Button
        variant="outlined"
        className="sidebar__Logout"
        fullWidth
        onClick={props.handleLogout}
      >
        Log out
      </Button>
      {/* {props.logoutError && <Alert variant="danger">{props.logoutError}</Alert>} */}
    </div>
  );
}

export default Sidebar;
