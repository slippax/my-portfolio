import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import classes from "./splashpage.module.css";
import Typist from "react-typist";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/themes/theme-c137.css";
import ArrowDropDownOutlinedIcon from "@material-ui/icons/ArrowDropDownOutlined";
import { Link } from "react-router-dom";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import Roll from "react-reveal/Roll";
import Flip from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import Tada from 'react-reveal/Jello';
import Pulse from 'react-reveal/Pulse';
import { SocialMediaIconsReact } from "social-media-icons-react";
function SplashPage() {
  let navigate = useNavigate();
const [linked, wiggleLinked] = useState(false);
const [git, wiggleGit] = useState(false);
const [next, wiggleNext] = useState(false);
const [box, wiggleBox] = useState(false);
  return (
    <div onMouseEnter={()=>wiggleBox(!box)}>
      
      <div className={classes.container}>
      
        <ReactScrollWheelHandler
          downHandler={() => navigate("/portfolio", { replace: true })}
        >
        
          <div className={classes.headerText}>
          <Pulse spy={box}>
            <Roll bottom cascade>
              <p className={classes.greetingText}>Hi, my name is</p>
              <p className={classes.nameText}>Stephen Lippa</p>
            </Roll>

            <Typist>
              <Typist.Delay ms={2600} />

              <span className={classes.taglineText2}>
                I am a front end developer.
              </span>

              <Typist.Delay ms={1000} />
              <Typist.Backspace count={27} />
              <span className={classes.taglineText}>
                I build things for the web.
              </span>
            </Typist>
            </Pulse>
            <Fade bottom>
              <div className={classes.button} onMouseEnter={()=> wiggleNext(!next)}>
                <Link to="/portfolio">
                  <Tada spy={next}>
                  <AwesomeButton type="primary" size="medium">
                    <ArrowDropDownOutlinedIcon fontSize="large" />
                  </AwesomeButton>
                  </Tada>
                </Link>
              </div>
            </Fade>
            <div className={classes.icontainer}>
              <Tada spy={git}>
              <div className={classes.icongit} onMouseEnter= {()=> wiggleGit(!git)}>
                <Flip>
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
                </Flip>
              </div>
              </Tada>
              <div className={classes.iconlinked} onMouseEnter= {()=> wiggleLinked(!linked)}>
                <Tada spy = {linked}>
                <Flip>
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
                </Flip>
                </Tada>
              </div>
            </div>
          

          </div>
        </ReactScrollWheelHandler>
        
      </div>
         
    </div>
  );
}
export default SplashPage;
