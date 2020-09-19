import React from "react";
import classes from "./sections.module.css";
import Flip from "react-reveal/Rotate";
import Zoom from "react-reveal/Zoom";
const sectionheader = (props) => {
  return (
    <Flip top left>
      <div className={classes.sectionbox}>
        <div className={classes.section}>
          <Zoom>
            <h3
              id="home"
              name="menu"
              className={classes.home}
              onClick={props.clickedhome}
            >
              Home
            </h3>
            <h3
              id="about"
              name="menu"
              className={classes.aboutme}
              onClick={props.clickedabout}
            >
              About
            </h3>

            <h3
              id="project"
              name="menu"
              className={classes.projects}
              onClick={props.clickedprojects}
            >
              Projects
            </h3>

            <h3
              id="work"
              name="menu"
              className={classes.work}
              onClick={props.clickedwork}
            >
              Work
            </h3>

            <h3
              id="contact"
              name="menu"
              className={classes.work}
              onClick={props.clickedcontact}
            >
              Contact
            </h3>
            <div></div>
          </Zoom>
        </div>
      </div>
    </Flip>
  );
};

export default sectionheader;
