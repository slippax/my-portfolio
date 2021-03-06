import React, {useState} from 'react'
import classes from './socialicons.module.css';
import { SocialMediaIconsReact } from "social-media-icons-react";
import Flip from 'react-reveal/Rotate';
import RubberBand from "react-reveal/Zoom";
import Tada from 'react-reveal/Pulse';
import Spin from 'react-reveal/Jello';
const Socialicons = () => {
  const [box, wiggleBox] = useState(false);
  const [linked, wiggleLinked] = useState(false);
  const [git, wiggleGit] = useState(false);
    return (
     
            <div className={classes.menu} onMouseEnter={()=> wiggleBox(!box)}>
            
          <Flip top right>
         
          <div className={classes.icontainer}>
          <Tada spy = {box}>
            <div className={classes.icongit} onMouseEnter={()=>wiggleGit(!git)}>
              <RubberBand>
              <Spin spy ={git}>
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
                  size="50"
                />
                </Spin>
              </RubberBand>
            </div>
            
            <div className={classes.iconlinked} onMouseEnter={()=>wiggleLinked(!linked)}>
            <RubberBand>
            <Spin spy ={linked}>
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
                  size="50"
                />
                </Spin>
              </RubberBand>
            </div>
            </Tada>
          </div>
         
          </Flip>
         
        </div>
    )
}

export default Socialicons
