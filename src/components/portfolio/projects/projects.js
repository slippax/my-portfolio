import React from "react";
import Container from "@material-ui/core/Container";
import classes from "./projects.module.css";
import Card from "../ui/card/card";
import ezsens from "./ezsens.JPG";
import weathergrabbr from "./weathergrabbr.JPG";
import todoz from "./todoz.JPG";
import type from "./type.JPG";
import Zoom from "react-reveal/Zoom";
const Projects = () => {
  return (
    <div className={classes.projectbox}>
      <Zoom>
        <div className={classes.paddingbox}></div>
        <Container maxWidth="sm" className={classes.Container}>
            <div>
              <h3 className={classes.projectstitle}>Projects</h3>
              <Card
                ezsensimage={ezsens}
                weatherimage={weathergrabbr}
                todozimage={todoz}
                typeimage={type}
              />
            </div>
        </Container>
      </Zoom>
    </div>
  );
};

export default Projects;
