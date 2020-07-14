import React from "react";
import Container from "@material-ui/core/Container";
import classes from "./projects.module.css";
import Card from "../ui/card/card";
import ezsens from './ezsens.JPG'

const projects = () => {
  return (
    <div className={classes.Container}>
      <Container maxWidth="sm">
        <h3 className={classes.projects}>Projects</h3>
        <Card
          name={"Ez-Sens"}
          text={
            "A sensitivity converter for common FPS titles, made with react."
          }
          image={ezsens}
          project={"https://slippax.github.io/Ez-Sens/"}
        />
      </Container>
    </div>
  );
};

export default projects;
