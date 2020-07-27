import React from "react";
import { elastic as Menu } from "react-burger-menu";
import "./styles.css";
const sideBar = (props) => {
  return (
    <div>
      <Menu isOpen={props.open}>
        <div className="menu-item" onClick={props.aboutClick}>
          About Me
        </div>
        <div className="menu-item" onClick={props.projectClick}>
          Projects
        </div>
        <div className="menu-item" onClick={props.workClick}>
          Work Experience
        </div>
        <div className="menu-item" onClick={props.contactClick}>
          Contact
        </div>
      </Menu>
    </div>
  );
};

export default sideBar;
