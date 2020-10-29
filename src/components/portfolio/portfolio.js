import React, { useState, useEffect } from "react";
import AboutMe from "./aboutme/aboutme";
import WorkXp from "./workxp/workxp";
import Projects from "./projects/projects";
import Contact from "./contact/contact";
import ButtonComponent from "./ui/button/button";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import scrollToComponent from "react-scroll-to-component";
import { useNavigate } from "react-router-dom";
import classes from "./portfolio.module.css";
import RubberBand from "react-reveal/Zoom";
import PageProgress from "react-page-progress";
import Menu from "../portfolio/ui/menu/sidebar";
import SocialIcons from "./ui/socialicons/socialicons";
import SectionHeader from "../portfolio/ui/sectionheader/sectionheader";
const Portfolio = () => {
  let navigate = useNavigate();

  const pages = [];

  const [index, setIndex] = useState(0);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    setPause(true);
    setTimeout(() => {
      setPause(false);
    }, 800);
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

  const scrollToComponentMenuHandler = (num) => {
    scrollToComponent(pages[num], {
      offset: 0,
      align: "top",
      duration: 700,
    });
    setIndex(num);
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
            open={false}
            aboutClick={() => scrollToComponentMenuHandler(0)}
            projectClick={() => scrollToComponentMenuHandler(1)}
            workClick={() => scrollToComponentMenuHandler(2)}
            contactClick={() => scrollToComponentMenuHandler(3)}
          />
        </div>
        <SocialIcons />
        <PageProgress color={"gray"} height={5} />
        <SectionHeader
          clickedabout={() => scrollToComponentMenuHandler(0)}
          clickedprojects={() => scrollToComponentMenuHandler(1)}
          clickedwork={() => scrollToComponentMenuHandler(2)}
          clickedcontact={() => scrollToComponentMenuHandler(3)}
          clickedhome={() => navigate("/", { replace: true })}
        />
        <section
          ref={(section) => {
            pages[0] = section;
          }}
        ></section>

        <div className={classes.button}>
          <RubberBand>
            <ButtonComponent />
          </RubberBand>
        </div>
        <AboutMe
        />
        <section
          ref={(section) => {
            pages[1] = section;
          }}
        ></section>
        <Projects
        />
        <section
          ref={(section) => {
            pages[2] = section;
          }}
        ></section>
        <WorkXp
        />
        <section
          ref={(section) => {
            pages[3] = section;
          }}
        ></section>
        <Contact
        />
      </ReactScrollWheelHandler>
    </div>
  );
};

export default Portfolio;
