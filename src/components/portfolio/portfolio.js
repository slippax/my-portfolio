import React, { useEffect, useState } from "react";
import AboutMe from "./aboutme/aboutme";
import WorkXp from "./workxp/workxp";
import Projects from "./projects/projects";
import Contact from "./contact/contact";
import ButtonComponent from "./ui/button/button";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import scrollToComponent from "react-scroll-to-component";
import { useNavigate } from "react-router-dom";
import classes from "./portfolio.module.css";
import { SocialMediaIconsReact } from "social-media-icons-react";
import RubberBand from "react-reveal/Zoom";
import PageProgress from "react-page-progress";
import Menu from "../portfolio/ui/menu/sidebar";
import SectionHeader from '../portfolio/ui/sectionheader/sectionheader';
import Flip from 'react-reveal/Rotate';
const Portfolio = () => {
  let pages = {};
  let navigate = useNavigate();

  const [pause, setPause] = useState(false);
  const [menuToggle, setMenuToggle] = useState(false);

  useEffect(() => {
    pauseHandler();
  }, []);

  useEffect(() => {
    setMenuToggle(false);
  }, [menuToggle]);

  const pauseHandler = () => {
    setPause(true);
    setTimeout(() => {
      setPause(false);
    }, 800);
  };

  const scrollToComponentHandler = (page) => {
    scrollToComponent(page, {
      offset: 0,
      align: "top",
      duration: 700,
    });
    pauseHandler();
    if (!menuToggle) {
      setMenuToggle(true);
    }
  };

  return (
    <div>
      <div className={classes.mobilemenu}>
      <Menu
        open={menuToggle}
        aboutClick={() => scrollToComponentHandler(pages.aboutMe)}
        projectClick={() => scrollToComponentHandler(pages.projects)}
        workClick={() => scrollToComponentHandler(pages.workXp)}
        contactClick={() => scrollToComponentHandler(pages.contact)}
      />
      </div>
      <PageProgress color={"gray"} height={5} />
      <SectionHeader clickedabout={()=> scrollToComponentHandler(pages.aboutMe)}clickedprojects={()=> scrollToComponentHandler(pages.projects)} clickedwork={()=> scrollToComponentHandler(pages.workXp)} clickedcontact={()=> scrollToComponentHandler(pages.contact)} clickedhome={()=> navigate("/", { replace: true }) } />
      <section
        ref={(section) => {
          pages.aboutMe = section;
        }}
      ></section>
      <ReactScrollWheelHandler
        pauseListeners={pause}
        upHandler={() => navigate("/", { replace: true })}
        downHandler={() => scrollToComponentHandler(pages.projects)}
      >
        <div className={classes.button}>
          <RubberBand>
            <ButtonComponent />
          </RubberBand>
        </div>
        <div className={classes.menu}>
          <Flip top right>
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
                  size="50"
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
                  size="50"
                />
              </RubberBand>
            </div>
          </div>
          </Flip>
        </div>
        <AboutMe clickedabout={()=> scrollToComponentHandler(pages.aboutMe)}clickedprojects={()=> scrollToComponentHandler(pages.projects)} clickedwork={()=> scrollToComponentHandler(pages.workXp)} clickedcontact={()=> scrollToComponentHandler(pages.contact)} />
      </ReactScrollWheelHandler>
      <section
        ref={(section) => {
          pages.projects = section;
        }}
      ></section>
      <ReactScrollWheelHandler
        pauseListeners={pause}
        upHandler={() => scrollToComponentHandler(pages.aboutMe)}
        downHandler={() => scrollToComponentHandler(pages.workXp)}
      >
        <Projects clickedabout={()=> scrollToComponentHandler(pages.aboutMe)}clickedprojects={()=> scrollToComponentHandler(pages.projects)} clickedwork={()=> scrollToComponentHandler(pages.workXp)} clickedcontact={()=> scrollToComponentHandler(pages.contact)} />
      </ReactScrollWheelHandler>
      <section
        ref={(section) => {
          pages.workXp = section;
        }}
      ></section>
      <ReactScrollWheelHandler
        pauseListeners={pause}
        upHandler={() => scrollToComponentHandler(pages.projects)}
        downHandler={() => scrollToComponentHandler(pages.contact)}
      >
        <WorkXp clickedabout={()=> scrollToComponentHandler(pages.aboutMe)}clickedprojects={()=> scrollToComponentHandler(pages.projects)} clickedwork={()=> scrollToComponentHandler(pages.workXp)} clickedcontact={()=> scrollToComponentHandler(pages.contact)} />
      </ReactScrollWheelHandler>
      <section
        ref={(section) => {
          pages.contact = section;
        }}
      ></section>
      <ReactScrollWheelHandler
        pauseListeners={pause}
        upHandler={() => scrollToComponentHandler(pages.workXp)}
      >
        <Contact clickedabout={()=> scrollToComponentHandler(pages.aboutMe)}clickedprojects={()=> scrollToComponentHandler(pages.projects)} clickedwork={()=> scrollToComponentHandler(pages.workXp)} clickedcontact={()=> scrollToComponentHandler(pages.contact)} />
      </ReactScrollWheelHandler>
    </div>
  );
};

export default Portfolio;
