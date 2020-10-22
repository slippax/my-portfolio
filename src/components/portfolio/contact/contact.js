import React, { useState } from "react";
import { Container } from "@material-ui/core";
import classes from "./contact.module.css";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/themes/theme-c137.css";
import ArrowDropDownOutlinedIcon from "@material-ui/icons/MailOutlined";
import Zoom from "react-reveal/Zoom";
import Pulse from "react-reveal/Pulse";
import Jello from 'react-reveal/Jello';
const Contact = () => {
  const [box, wiggleBox] = useState(false);
  const [button, wiggleButton] = useState(false);
  return (
    <div>
      <Zoom>
        <div className={classes.paddingbox}></div>
        <Container maxWidth="sm" className={classes.Container}>
          <Pulse spy={box}>
            <div onMouseEnter={() => wiggleBox(!box)}>
              <h3 className={classes.contacttitle}>Get In Touch</h3>
              <p>
                I'm currently looking for new opportunities, my inbox is always
                open. Whether you have a question or just want to say hi, I'll
                try my best to get back to you!
              </p>
              <div className={classes.button} onMouseEnter={()=> wiggleButton(!button)}>
                <Jello spy={button}>
                <AwesomeButton
                  type="primary"
                  size="medium"
                  onPress={() => {
                    window.open("mailto:slippa@me.com");
                  }}
                >
                  <ArrowDropDownOutlinedIcon fontSize="large" />
                </AwesomeButton>
                </Jello>

              </div>
            </div>
          </Pulse>
        </Container>
      </Zoom>
    </div>
  );
};

export default Contact;
