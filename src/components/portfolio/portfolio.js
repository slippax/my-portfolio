import React, { useState, useEffect } from "react";
import AboutMe from "./aboutme/aboutme";
import WorkXp from "./workxp/workxp";
import Projects from "./projects/projects";
import Contact from "./contact/contact";
import {HomeButton} from "./ui/button/button";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import { useNavigate } from "react-router-dom";
import classes from "./portfolio.module.css";
import RubberBand from "react-reveal/Zoom";
import Menu from "../portfolio/ui/menu/sidebar";
import SocialIcons from "./ui/socialicons/socialicons";
import SectionHeader from "../portfolio/ui/sectionheader/sectionheader";
import Flip from 'react-reveal/Zoom';
const Portfolio = () => {
  let navigate = useNavigate();

  const pages = [];

  const [index, setIndex] = useState(0);
  const [pause, setPause] = useState(false);
  const [menuToggle, setMenuToggle] = useState(false);

  const [aboutMe, showAboutMe] = useState(true);
  const [workXP, showWorkXP] = useState(false)
  const [project, showProject] = useState(false);
  const [contact, showContact] = useState(false);

  useEffect(() => {
    setMenuToggle(false);
  }, [menuToggle]);
  
  useEffect(() => {
    setPause(true);
    setTimeout(() => {
      setPause(false);
    }, 1000);
  }, [])
  const scrollToComponentHandler = (down) => {
    let num = index;
    if (down) {
      if (num === 3) {
        return;
      }
      num++;
    }
    if (!down) {
      if (num === 0) {
        navigate("/", { replace: true })
      }
      num--;
   
    };
    
    scrollToComponentMenuHandler(num);
    console.log(pages);
    
  };

  const refreshPages = () => {
    showAboutMe(false);
    showProject(false);
    showWorkXP(false);
    showContact(false);
  }

  const scrollToComponentMenuHandler = (num) => {
    refreshPages();
    if(num === 0) {
      setTimeout(() => {
        showAboutMe(true);
      }, 600);
      
    }
    if (num === 1) {
      setTimeout(() => {
        showProject(true);
      }, 600);
    }
    if (num ===2) {
  
      setTimeout(() => {
        showWorkXP(true);
      }, 600);
    }
    if (num === 3) {
   
      setTimeout(() => {
        showContact(true);
      }, 600);
    }
    setIndex(num);
    if (!menuToggle) {
      setMenuToggle(true);
    }
    currentHandler(num);
  };
  
  const currentHandler = (num) => {
    if (num === 0) {
      document.getElementById("about").style.textDecoration = "underline";
      document.getElementById("project").style.textDecoration = "none";
      document.getElementById("work").style.textDecoration = "none";
      document.getElementById("contact").style.textDecoration = "none";
    }
    if (num === 1) {
      document.getElementById("project").style.textDecoration = "underline";
      document.getElementById("about").style.textDecoration = "none";
      document.getElementById("work").style.textDecoration = "none";
      document.getElementById("contact").style.textDecoration = "none";
    }
    if (num === 2) {
      document.getElementById("work").style.textDecoration = "underline";
      document.getElementById("about").style.textDecoration = "none";
      document.getElementById("project").style.textDecoration = "none";
      document.getElementById("contact").style.textDecoration = "none";
    }
    if (num === 3) {
      document.getElementById("contact").style.textDecoration = "underline";
      document.getElementById("about").style.textDecoration = "none";
      document.getElementById("project").style.textDecoration = "none";
      document.getElementById("work").style.textDecoration = "none";
    }
  };
  return (
    <div>
      <ReactScrollWheelHandler className={classes.handlerbox}
        pauseListeners={pause}
        upHandler={() => scrollToComponentHandler(false)}
        downHandler={() => scrollToComponentHandler(true)}
      >
        <div className={classes.mobilemenu}>
          <Menu
            open={menuToggle}
            aboutClick={() => scrollToComponentMenuHandler(0)}
            projectClick={() => scrollToComponentMenuHandler(1)}
            workClick={() => scrollToComponentMenuHandler(2)}
            contactClick={() => scrollToComponentMenuHandler(3)}/>
        </div>
        <SocialIcons />
        <SectionHeader
          clickedabout={() => scrollToComponentMenuHandler(0)}
          clickedprojects={() => scrollToComponentMenuHandler(1)}
          clickedwork={() => scrollToComponentMenuHandler(2)}
          clickedcontact={() => scrollToComponentMenuHandler(3)}
          clickedhome={() => navigate("/", { replace: true })}/>
        <div className={classes.button}>
          <RubberBand>
            <HomeButton />
          </RubberBand>
        </div>
        <Flip duration={600} opposite appear={aboutMe} when={aboutMe}>
        {aboutMe ? (<AboutMe/>) : <div />}
        </Flip>
         <Flip duration={600} opposite appear={project} when={project}>
        {project ? (<Projects/>) : <div />}
        </Flip>
          <Flip  duration={600} opposite appear={workXP} when={workXP}>
          {workXP ? (<WorkXp/>) : <div />}
          </Flip>
        <Flip duration={600} opposite appear={contact} when={contact}>
        {contact ? (<Contact/>) : <div />}
        </Flip>
      </ReactScrollWheelHandler>
    </div>
  );
};

export default Portfolio;
