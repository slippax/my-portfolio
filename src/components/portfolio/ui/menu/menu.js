import React from "react";
import Link from "@material-ui/core/Link";
import classes from "./menu.module.css";
import Wobble from "react-reveal/Fade";

export default function Menu(props) {
  return (
    <div className={classes.menu}>
      <Wobble left>
      <Link href="#" color="inherit">
        {props.name}
      </Link>
      </Wobble>
    </div>
  );
}
