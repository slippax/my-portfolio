import React from "react";
import { Link } from "react-router-dom";
import ArrowDropUpOutlinedIcon from "@material-ui/icons/Home";
import { AwesomeButton } from "react-awesome-button";
import Wobble from "react-reveal/Fade";
import classes from "./button.module.css";


const button = () => {
  return (
    <div className={classes.button}>
      <Wobble left>
        <Link to="/">
          <AwesomeButton type="primary" size="medium">
            <ArrowDropUpOutlinedIcon fontSize="default" />
          </AwesomeButton>
        </Link>
      </Wobble>
    </div>
  );
};

export default button;
