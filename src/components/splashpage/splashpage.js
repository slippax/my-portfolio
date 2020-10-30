import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./splashpage.module.css";
import Typist from "react-typist";
import { NextButton } from '../portfolio/ui/button/button';
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import Rotate from 'react-reveal/Zoom';
import Slide from 'react-reveal/Rotate';
import Fade from "react-reveal/Fade";
import Tada from 'react-reveal/Jello';
import Bounce from 'react-reveal/Bounce';
import { SocialMediaIconsReact } from "social-media-icons-react";
function SplashPage() {
  let navigate = useNavigate();
  const [linked, wiggleLinked] = useState(false);
  const [git, wiggleGit] = useState(false);
  const [next, wiggleNext] = useState(false);
  const [greet1, setgreet1] = useState(false);
  const [greet2, setgreet2] = useState(false);
  const [greet3, setgreet3] = useState(false);
  const [greet4, setgreet4] = useState(false);
  setTimeout(() => {
    setgreet1(true);
  }, 1100);
  setTimeout(() => {
    setgreet2(true);
  }, 2100);
  setTimeout(() => {
    setgreet3(true);
  }, 3500);
  setTimeout(() => {
    setgreet4(true);
  }, 4000);
  return (
    <div>
      <div className={classes.container}>
        <ReactScrollWheelHandler className={classes.handlerbox}
          downHandler={() => navigate("/portfolio", { replace: true })}>
            <Rotate>
          <div className={classes.headerText}>
          
              {greet1 ? (<Fade right cascade>
                <p className={classes.greetingText}>Hi, my name is</p>
              </Fade>) : (<p className={classes.greetingText2}>.</p>)}
              {greet2 ? (<Slide cascade><p className={classes.nameText}>Stephen Lippa</p></Slide>) : (<p className={classes.nameText2}>.</p>)}

              <Typist avgTypingDelay={65}>
                <Typist.Delay ms={5000} />
                <span className={classes.taglineText2}>
                  I am a front end developer.
              </span>
                <Typist.Delay ms={1000} />
                <Typist.Backspace count={25} />
                <span className={classes.taglineText}>
                  build things for the web.
              </span>
              </Typist>
        
            {greet3 ? (<div className={classes.button} onMouseEnter={() => wiggleNext(!next)}>
                <Tada spy={next}>
                  <Bounce>
                  <NextButton />
                  </Bounce>
                </Tada>
              </div>) : (<div/>)}
              {greet4 ? (<div className={classes.icontainer}>
              <Tada spy={git}>
                <div className={classes.icongit} onMouseEnter={() => wiggleGit(!git)}>
                  <Bounce>
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
                  </Bounce>
                </div>
              </Tada>
              <div className={classes.iconlinked} onMouseEnter={() => wiggleLinked(!linked)}>
                <Tada spy={linked}>
                  <Bounce>
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
                  </Bounce>
                </Tada>
              </div>
            </div>) : (<div/>)}
              
            </div>
            </Rotate>
        </ReactScrollWheelHandler>
      </div>
    </div>
  );
}
export default SplashPage;
