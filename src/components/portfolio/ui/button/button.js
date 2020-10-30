import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import ArrowDropDownOutlinedIcon from "@material-ui/icons/ArrowDropDownOutlined";
import { AwesomeButton } from "react-awesome-button";

export const HomeButton = () => {
  return (
        <Link to="/">
          <AwesomeButton type="primary" size="medium">
            <HomeIcon fontSize="default" />
          </AwesomeButton>
        </Link>
  );
};

export const NextButton = () => {
  return (
        <Link to="/portfolio">
          <AwesomeButton type="primary" size="medium">
            <ArrowDropDownOutlinedIcon fontSize="large" />
          </AwesomeButton>
        </Link>
  );
};