import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import classes from "./projects.module.css";
import Card from "../ui/card/card";
import ezsens from "./ezsens.JPG";
import weathergrabbr from "./weathergrabbr.JPG";
import todoz from "./todoz.JPG";
import type from "./type.JPG";
import Zoom from "react-reveal/Zoom";
import Pulse from "react-reveal/Pulse";

const Projects = () => {
  const [box, wiggleBox] = useState(false);
  return (
    <div>
      <Zoom>
        <div className={classes.paddingbox}></div>
        <Container maxWidth="sm" className={classes.Container}>
          <Pulse spy={box}>
            <div onMouseEnter={() => wiggleBox(!box)}>
              <h3 className={classes.projectstitle}>Projects</h3>
              <Card
                ezsensimage={ezsens}
                weatherimage={weathergrabbr}
                todozimage={todoz}
                typeimage={type}
              />
            </div>
          </Pulse>
        </Container>
      </Zoom>
    </div>
  );
};

export default Projects;
