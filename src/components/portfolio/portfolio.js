import React from "react";
import classes from "./portfolio.module.css";
import { motion } from "framer-motion";

const Portfolio = () => {
  const icon = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)",
    },
  };
  return (
    <motion.div
      className={classes.text}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 350,
        damping: 10,
      }}
    >
      This is the First page.
    </motion.div>
  );
};

export default Portfolio;
