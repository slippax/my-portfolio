import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./splashpage.module.css";
import Typist from "react-typist";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import ArrowDropDownOutlinedIcon from "@material-ui/icons/ArrowDropDownOutlined";
import { Link } from "react-router-dom";


function SplashPage() {
  let navigate = useNavigate();
  const handleScroll = () => {
    navigate("/portfolio", { replace: true });
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  });
  return (
    <div className={classes.headertext}>
      <p className={classes.greeting}>Hi, my name is</p>
      <p className={classes.name}>Stephen Lippa</p>
      <Typist>
        <Typist.Delay ms={1000} />
        <span className={classes.tagline}>I am a front end developer.</span>
        <Typist.Backspace count={25} delay={200} />
        <span className={classes.tagline}>build things for the web.</span>
      </Typist>
      <div className={classes.button}>
        <Link to="/portfolio">
          <AwesomeButton size="small" type="primary">
            <ArrowDropDownOutlinedIcon fontSize="small" />
          </AwesomeButton>
        </Link>
      </div>
    </div>
  );
}

export default SplashPage;
