import React from "react";
import Container from "@material-ui/core/Container";
import classes from "./education.module.css";

const education = () => {
  return (
    <div>
      <Container maxWidth="sm" className={classes.Container}>
        <h3 className={classes.education}>Education</h3>
        <p>York University</p>
        <p>Information Technology (2017-2020)</p>
        <p>
          York's Information Technology has provided me with the educational
          background to pursue an exciting career in the application of
          computers to a variety of tasks faced by organizations today.
        </p>
      </Container>
    </div>
  );
};

export default education;
