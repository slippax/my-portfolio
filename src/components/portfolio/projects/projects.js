import React from "react";
import Container from "@material-ui/core/Container";
import classes from "./projects.module.css";
import Card from "../ui/card/card";
import ezsens from "./ezsens.JPG";
import weathergrabbr from "./weathergrabbr.JPG";
import todoz from "./todoz.JPG";
import type from "./type.JPG";
import covid from "./covid.JPG"
const Projects = () => {
  return (
    <div>
        <Container maxWidth="sm" className={classes.Container}>
            <div>
              <h3 className={classes.projectstitle}>Projects</h3>
              <Card
              covidimage={covid}
                ezsensimage={ezsens}
                weatherimage={weathergrabbr}
                todozimage={todoz}
                typeimage={type}
              />
            </div>
        </Container>
    </div>
  );
};

export default Projects;
