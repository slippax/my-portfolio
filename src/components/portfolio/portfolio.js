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
import { SocialMediaIconsReact } from "social-media-icons-react";
import RubberBand from 'react-reveal/RubberBand';
import PageProgress from 'react-page-progress';
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
      <PageProgress color={'gray'} height={5}/>
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
          size="30"
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
          size="30"
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
