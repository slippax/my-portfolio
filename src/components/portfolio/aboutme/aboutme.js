import React from "react";
import classes from "./aboutme.module.css";
import "react-awesome-button/dist/styles.css";
import Container from "@material-ui/core/Container";
import {SiSass, SiJavascript, SiReact, SiNodemon, SiPython, SiRedux} from 'react-icons/si'
const Aboutme = () => {
  return (
    <div>
        <Container maxWidth="sm" className={classes.Container}>
          <h3 className={classes.about}>About me</h3>
         
            <div>
              <p>
                Hello! I'm Stephen, a front end developer based in Toronto,
                Canada.
              </p>
              <p>
                I enjoy creating websites and applications that live on the
                internet. My goal is to consistently provide pixel-perfect code
                that functions seamlessly.
              </p>
              <p>
                After graduating York University, I found a passion for using
                web technologies.
              </p>
              <p>
                Here are a few technologies and languages I've been working with recently:
              </p>
              <ul>
                <li><SiJavascript fontSize={22}/> JavaScript (ES6+)</li>
                <li><SiReact fontSize={22}/> React</li>
                <li><SiRedux fontSize={22}/> Redux</li>
                <li><SiSass fontSize={22}/> (S)CSS</li>
                <li><SiNodemon fontSize={22}/> Node.js</li>
                <li><SiPython fontSize={22}/> Python</li>
              </ul>
            </div>
        </Container>

    </div>
  );
};

export default Aboutme;
