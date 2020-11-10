import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./splashpage.module.css";
import Typist from "react-typist";
import { NextButton } from '../portfolio/ui/button/button';
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import Rotate from 'react-reveal/Zoom';
import Roll from 'react-reveal/Roll';
import Fade from "react-reveal/Fade";
import Tada from 'react-reveal/Jello';
import { SocialMediaIconsReact } from "social-media-icons-react";
function SplashPage() {
  let navigate = useNavigate();
  const [linked, wiggleLinked] = useState(false);
  const [git, wiggleGit] = useState(false);
  const [next, wiggleNext] = useState(false);
  const [box, showBox] = useState(true);

  const nextHandler = () => {
    showBox(!box);
    setTimeout(() => {
      navigate("/portfolio", { replace: true })
    }, 1000);
    
  }
  return (
    <div>
      <div className={classes.container}>
        <ReactScrollWheelHandler className={classes.handlerbox}
          downHandler={() => nextHandler()}>
            <Rotate opposite when={box} appear={box}>
          <div className={classes.headerText}>
          
              <Fade delay={1400} right cascade>
                <p className={classes.greetingText}>Hi, my name is</p>
              </Fade>
              <Roll delay={2400} top cascade><p className={classes.nameText}>Stephen Lippa</p></Roll>

              <Typist avgTypingDelay={65}>
                <Typist.Delay ms={5900} />
                <span className={classes.taglineText}>
                  I am a front end developer.
              </span>
                <Typist.Delay ms={1000} />
                <Typist.Backspace count={25} />
                <span className={classes.taglineText}>
                  build things for the web.
              </span>
              </Typist>
        <div className={classes.buttonbox}>
            <div className={classes.button} onMouseEnter={() => wiggleNext(!next)}>
                <Tada spy={next}>
                  <Rotate delay={3700}>
                  <NextButton />
                  </Rotate>
                </Tada>
                </div>
              <div className={classes.icontainer}>
              <Tada spy={git}>
                <div className={classes.icongit} onMouseEnter={() => wiggleGit(!git)}>
                  <Rotate delay={4200}>
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
                  </Rotate>
                </div>
              </Tada>
              <div className={classes.iconlinked} onMouseEnter={() => wiggleLinked(!linked)}>
                <Tada spy={linked}>
                  <Rotate delay={4200}>
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
                  </Rotate>
                </Tada>
              </div>
            </div>
            </div>
            </div>
            </Rotate>
        </ReactScrollWheelHandler>
      </div>
     
    </div>
  );
}
export default SplashPage;
