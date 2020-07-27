import React, { useEffect, useState } from "react";
import AboutMe from "./aboutme/aboutme";
import WorkXp from "./workxp/workxp";
import Projects from "./projects/projects";
import Contact from "./contact/contact";
import LightSpeed from "react-reveal/Fade";
import ButtonComponent from "./ui/button/button";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import scrollToComponent from "react-scroll-to-component";
import { useNavigate } from "react-router-dom";
import classes from "./portfolio.module.css";
import { SocialMediaIconsReact } from "social-media-icons-react";
import RubberBand from "react-reveal/RubberBand";
import PageProgress from "react-page-progress";
import Menu from "../portfolio/ui/menu/sidebar";
const Portfolio = () => {
  let pages = {
    aboutMe: null,
    projects: null,
    workXp: null,
    contact: null,
  };
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
      console.log("timer released");
    }, 1500);
  };

  const scrollToComponentHandler = (page) => {
    scrollToComponent(page, {
      offset: 0,
      align: "top",
      duration: 1500,
    });
    pauseHandler();
    if (!menuToggle) {
      setMenuToggle(true);
    }
  };

  return (
    <div>
      <Menu
        open={menuToggle}
        aboutClick={() => scrollToComponentHandler(pages.aboutMe)}
        projectClick={() => scrollToComponentHandler(pages.projects)}
        workClick={() => scrollToComponentHandler(pages.workXp)}
        contactClick={() => scrollToComponentHandler(pages.contact)}
      />
      <PageProgress color={"gray"} height={5} />
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
          <ButtonComponent />
        </div>
        <div className={classes.menu}>
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
        </div>

        <LightSpeed left>
          <AboutMe />
        </LightSpeed>
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
        <LightSpeed left>
          <Projects />
        </LightSpeed>
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
        <LightSpeed left>
          <WorkXp />
        </LightSpeed>
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
        <LightSpeed left>
          <Contact />
        </LightSpeed>
      </ReactScrollWheelHandler>
    </div>
  );
};

export default Portfolio;
