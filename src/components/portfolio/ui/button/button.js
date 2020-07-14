import React from "react";
import { Link } from "react-router-dom";
import ArrowDropUpOutlinedIcon from "@material-ui/icons/ArrowDropUpOutlined";
import { AwesomeButton } from "react-awesome-button";
import Wobble from "react-reveal/Fade";
import classes from "./button.module.css";


const button = () => {
  return (
    <div className={classes.button}>
      <Wobble left>
        <Link to="/">
          <AwesomeButton type="primary" size="small">
            <ArrowDropUpOutlinedIcon fontSize="small" />
          </AwesomeButton>
        </Link>
      </Wobble>
    </div>
  );
};

export default button;
