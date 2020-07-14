import React from "react";
import { Container } from "@material-ui/core";
import classes from './contact.module.css'

const contact = () => {
  return (
    <div>
      <Container maxWidth="sm" className={classes.Container}>
        <h3 className={classes.contact}>Get In Touch</h3>
        <p>
          I'm currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>
      </Container>
    </div>
  );
};

export default contact;
