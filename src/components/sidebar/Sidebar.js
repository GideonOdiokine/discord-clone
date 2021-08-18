import React from "react";
import "./sidebar.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import SidebarChannel from "../sidebarChannel/SidebarChannel";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h3>Gidi Programming</h3>
        <ExpandMoreIcon />
      </div>
      <div className="sidebar__channels">
        <div className="sidebar__channelsHeader">
          <div className="sidebar__header">
            <ExpandMoreIcon />
            <h4>Text Channels</h4>
          </div>
          <AddIcon className="sidebar__addChannel" />
        </div>
      </div>
      <div className="sidebar__channelslist">
        <SidebarChannel />
      </div>
    </div>
  );
}

export default Sidebar;
