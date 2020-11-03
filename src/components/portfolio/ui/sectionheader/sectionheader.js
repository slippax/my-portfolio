import React, {useState} from "react";
import classes from "./sections.module.css";
import Flip from "react-reveal/Rotate";
import Zoom from "react-reveal/Zoom";
import Tada from 'react-reveal/Pulse';
import Jello from 'react-reveal/Swing';
const Sectionheader = (props) => {
  const [box, wiggleBox] = useState(false);
  const [home, wiggleHome] = useState(false);
  const [about, wiggleAbout] = useState(false);
  const [project, wiggleProject] = useState(false);
  const [work, wiggleWork] = useState(false);
  const [contact, wiggleContact] = useState(false);
  return (
    <Flip top left>
      <div className={classes.sectionbox} onMouseEnter={()=> wiggleBox(!box)}>
        <Tada spy={box}>
        <div className={classes.section}>
          <Zoom>
            <Jello spy={home}>
            <h3
            onMouseEnter={()=>wiggleHome(!home)}
              id="home"
              name="menu"
              className={classes.home}
              onClick={props.clickedhome}
            >
              Home
            </h3>
            </Jello>
            <Jello spy={about}>
            <h3
             onMouseEnter={()=>wiggleAbout(!about)}
              id="about"
              name="menu"
              className={classes.aboutme}
              onClick={props.clickedabout}
            >
              About
            </h3>
            </Jello>
            <Jello spy={project}>
            <h3
             onMouseEnter={()=>wiggleProject(!project)}
              id="project"
              name="menu"
              className={classes.projects}
              onClick={props.clickedprojects}
            >
              Projects
            </h3>
            </Jello>
            <Jello spy={work}>
            <h3
             onMouseEnter={()=>wiggleWork(!work)}
              id="work"
              name="menu"
              className={classes.work}
              onClick={props.clickedwork}
            >
              Work
            </h3>
            </Jello>
            <Jello spy={contact}>
            <h3
             onMouseEnter={()=>wiggleContact(!contact)}
              id="contact"
              name="menu"
              className={classes.work}
              onClick={props.clickedcontact}
            >
              Contact
            </h3>
            </Jello>
          </Zoom>
        </div>
        </Tada>
      </div>
    </Flip>
  );
};

export default Sectionheader;
