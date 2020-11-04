import React from "react";
import Container from "@material-ui/core/Container";
import classes from "./workxp.module.css";
import {FaApple, FaLaptop, FaMobileAlt} from 'react-icons/fa';
const Workxp = () => {
  return (
    <div>
        <Container maxWidth="sm" className={classes.Container}>
            <div>
          <h3 className={classes.workXP}>Work Experience</h3>
          <h3 className={classes.apple}>
            <FaApple fontSize='25'/> Apple
          </h3>
          <p>
            <FaLaptop fontSize='24'/><strong> Mac Genius (2018-Present)</strong>
          </p>
          <p>
            Repairing Macbooks and iPhones as well as coaching a team of
            specialists to provide memorable customer experiences.{" "}
          </p>
          <p>
          <FaMobileAlt fontSize='24'/><strong> Technical Specialist (2015-2018)</strong>
          </p>
          <p>
            Appointment servicing for customers with various Apple product
            issues. Discovering needs for customers and repairing customer
            relationships.
          </p>
          </div>
        </Container>
    </div>
  );
};

export default Workxp;
