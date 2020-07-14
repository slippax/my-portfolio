import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./splashpage.module.css";
import Typist from "react-typist";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/themes/theme-c137.css";
import ArrowDropDownOutlinedIcon from "@material-ui/icons/ArrowDropDownOutlined";
import { Link } from "react-router-dom";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import Tada from "react-reveal/Fade";
import ParticleComponent from "../portfolio/ui/particles/particles";

function SplashPage() {
  let navigate = useNavigate();

  return (
    <div className={classes.headertext}>
      <ParticleComponent />
      <Tada left>
        <ReactScrollWheelHandler
          downHandler={() => navigate("/portfolio", { replace: true })}
        >
          <p className={classes.greeting}>Hi, my name is</p>
          <p className={classes.name}>Stephen Lippa</p>
        </ReactScrollWheelHandler>
      </Tada>
      <Typist>
        <Typist.Delay ms={1000} />
        <span className={classes.tagline}>I am a front end developer.</span>
        <Typist.Backspace count={25} delay={200} />
        <span className={classes.tagline}>build things for the web.</span>
      </Typist>
      <div className={classes.button}>
        <Link to="/portfolio">
          <AwesomeButton type="primary" size="small">
            <ArrowDropDownOutlinedIcon fontSize="large" />
          </AwesomeButton>
        </Link>
      </div>
    </div>
  );
}

export default SplashPage;
