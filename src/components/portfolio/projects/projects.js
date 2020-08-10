import React from "react";
import Container from "@material-ui/core/Container";
import classes from "./projects.module.css";
import Card from "../ui/card/card";
import ezsens from "./ezsens.JPG";
import weathergrabbr from "./weathergrabbr.JPG";
import todoz from './todoz.png';
import Zoom from "react-reveal/Zoom";

const projects = () => {
  return (
    <div className={classes.Container}>
      <Container maxWidth="sm">
        <Zoom>
          <h3 className={classes.projects}>Projects</h3>
          <Card ezsensimage = {ezsens} weatherimage= {weathergrabbr} todozimage={todoz}/>
        </Zoom>
      </Container>
    </div>
  );
};

export default projects;
