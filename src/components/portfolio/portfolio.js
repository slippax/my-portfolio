import React from "react";
import AboutMe from "./aboutme/aboutme";
import WorkXp from "./workxp/workxp";
import Education from "./education/education";
import Projects from "./projects/projects";
import Contact from "./contact/contact";
import LightSpeed from "react-reveal/Fade";
import ButtonComponent from "./ui/button/button";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import scrollToComponent from "react-scroll-to-component";
import { useNavigate } from "react-router-dom";
import classes from "./portfolio.module.css";

const Portfolio = () => {
  let aboutMe = null;
  let projects = null;
  let workXp = null;
  let education = null;
  let contact = null;
  //may use this in the future.
  let navigate = useNavigate();

  return (
    <div>
      <section
        ref={(section) => {
          aboutMe = section;
        }}
      ></section>
      <ReactScrollWheelHandler
        upHandler={() => navigate("/", { replace: true })}
        downHandler={() =>
          scrollToComponent(projects, {
            offset: 0,
            align: "top",
            duration: 1500,
          })
        }
      >
        <div className={classes.button}>
          <ButtonComponent />
        </div>
        <div className={classes.menu}></div>

        <LightSpeed left>
          <AboutMe />
        </LightSpeed>
      </ReactScrollWheelHandler>
      <section
        ref={(section) => {
          projects = section;
        }}
      ></section>
      <ReactScrollWheelHandler
        upHandler={() =>
          scrollToComponent(aboutMe, {
            offset: 0,
            align: "top",
          })
        }
        downHandler={() =>
          scrollToComponent(workXp, { offset: 0, align: "top" })
        }
      >
        <LightSpeed left>
          <Projects />
        </LightSpeed>
      </ReactScrollWheelHandler>
      <section
        ref={(section) => {
          workXp = section;
        }}
      ></section>
      <ReactScrollWheelHandler
        upHandler={() =>
          scrollToComponent(projects, {
            offset: 0,
            align: "top",
          })
        }
        downHandler={() =>
          scrollToComponent(education, {
            offset: 0,
            align: "top",
          })
        }
      >
        <LightSpeed left>
          <WorkXp />
        </LightSpeed>
      </ReactScrollWheelHandler>
      <section
        ref={(section) => {
          education = section;
        }}
      ></section>
      <ReactScrollWheelHandler
        upHandler={() => scrollToComponent(workXp, { offset: 0, align: "top" })}
        downHandler={() =>
          scrollToComponent(contact, {
            offset: 0,
            align: "top",
          })
        }
      >
        <LightSpeed left>
          <Education />
        </LightSpeed>
      </ReactScrollWheelHandler>
      <section
        ref={(section) => {
          contact = section;
        }}
      ></section>
      <ReactScrollWheelHandler
        upHandler={() =>
          scrollToComponent(education, {
            offset: 0,
            align: "top",
          })
        }
      >
        <LightSpeed left>
          <Contact />
        </LightSpeed>
      </ReactScrollWheelHandler>
    </div>
  );
};

export default Portfolio;
