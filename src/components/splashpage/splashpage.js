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
import { SocialMediaIconsReact } from "social-media-icons-react";
import RubberBand from "react-reveal/RubberBand";
import ParticleComponent from '../portfolio/ui/particles/particles';

function SplashPage() {
  let navigate = useNavigate();

  return (
    <div>
      <ParticleComponent/>
      <ReactScrollWheelHandler
        downHandler={() => navigate("/portfolio", { replace: true })}
      >
        <div className={classes.headertext}>
          <Tada left>
            <p className={classes.greeting}>Hi, my name is</p>
            <p className={classes.name}>Stephen Lippa</p>
          </Tada>
          <Typist>
            <Typist.Delay ms={1000} />
            <span className={classes.tagline}>I am a front end developer.</span>
            <Typist.Backspace count={25} delay={200} />
            <span className={classes.tagline}>build things for the web.</span>
          </Typist>
          <div className={classes.button}>
            <Link to="/portfolio">
              <AwesomeButton type="primary" size="medium">
                <ArrowDropDownOutlinedIcon fontSize="medium" />
              </AwesomeButton>
            </Link>
          </div>
          <div className={classes.icontainer}>
            <div className={classes.icongit}>
              <RubberBand>
                <SocialMediaIconsReact
                  borderColor="rgba(0,0,0,0.25)"
                  borderWidth="3"
                  borderStyle="solid"
                  icon="github"
                  url="https://github.com/slippax"
                  iconColor="rgba(255,255,255,1)"
                  backgroundColor="rgba(77,100,100,0.66)"
                  iconSize="4"
                  roundness="50%"
                  size="60"
                />
              </RubberBand>
            </div>
            <div className={classes.iconlinked}>
              <RubberBand>
                <SocialMediaIconsReact
                  borderColor="rgba(0,0,0,0.25)"
                  borderWidth="3"
                  borderStyle="solid"
                  icon="linkedin"
                  url="https://ca.linkedin.com/in/stephen-lippa-465203198"
                  iconColor="rgba(255,255,255,1)"
                  backgroundColor="rgba(77,100,100,0.66)"
                  iconSize="4"
                  roundness="50%"
                  size="60"
                />
              </RubberBand>
            </div>
          </div>
        </div>
      </ReactScrollWheelHandler>
    </div>
  );
}
export default SplashPage;
