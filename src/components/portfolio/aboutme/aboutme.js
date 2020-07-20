import React from "react";
import classes from "./aboutme.module.css";

import "react-awesome-button/dist/styles.css";

import Container from "@material-ui/core/Container";

const aboutme = () => {
  return (
    <div>
      <Container maxWidth="sm" className={classes.Container}>
        <h3 className={classes.aboutme}>About me</h3>
        <div>
          <p>
            Hello! I'm Stephen, a front end developer based in Toronto, Canada.
          </p>
          <p>
            I enjoy creating websites and applications that live on the
            internet. My goal is to consistently provide pixel-perfect code that
            functions seamlessly.
          </p>
          <p>
            After graduating York University, I found a passion for using web
            technologies.
          </p>
          <p>Here are a few technologies I've been working with recently:</p>
          <ul>
            <li>JavaScript(ES6+)</li>
            <li>HTML & CSS</li>
            <li>React</li>
            <li>Node.js</li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default aboutme;