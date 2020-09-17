import React from "react";
import { Container } from "@material-ui/core";
import classes from "./contact.module.css";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/themes/theme-c137.css";
import ArrowDropDownOutlinedIcon from "@material-ui/icons/MailOutlined";
import Zoom from "react-reveal/Bounce";
const contact = () => {
  return (
    <div>
      <Zoom bottom>
      <div className={classes.paddingbox}></div>
      <Container maxWidth="sm" className={classes.Container}>
        
          <h3 className={classes.contacttitle}>Get In Touch</h3>
          <p>
            I'm currently looking for new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I'll try
            my best to get back to you!
          </p>
          <div className={classes.button}>
            <AwesomeButton
              type="primary"
              size="medium"
              onPress={() => {
                window.open("mailto:slippa@me.com");
              }}
            >
              <ArrowDropDownOutlinedIcon fontSize="large" />
            </AwesomeButton>
          </div>
      </Container>
      </Zoom>
    </div>
  );
};

export default contact;
