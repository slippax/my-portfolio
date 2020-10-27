import React from "react";
import Container from "@material-ui/core/Container";
import classes from "./workxp.module.css";
import Zoom from "react-reveal/Zoom";
const Workxp = () => {
  return (
    <div>
      <Zoom>
        <div className={classes.paddingbox}></div>
        <Container maxWidth="sm" className={classes.Container}>
            <div>
          <h3 className={classes.workXP}>Work Experience</h3>
          <h3>
            <strong>Apple</strong>
          </h3>
          <p>
            <strong>Mac Genius (2018-Present)</strong>
          </p>
          <p>
            Repairing Macbooks and iPhones as well as coaching a team of
            specialists to provide memorable customer experiences.{" "}
          </p>
          <p>
            <strong>Family Room Specialist (2015-2018)</strong>
          </p>
          <p>
            Appointment servicing for customers with various Apple product
            issues. Discovering needs for customers and repairing customer
            relationships.
          </p>
          </div>
        </Container>
      </Zoom>
    </div>
  );
};

export default Workxp;
