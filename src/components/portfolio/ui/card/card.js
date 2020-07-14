import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const card = (props) => {
  const styles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 300,
    },
  });
  const classes = styles();
  return (
    <Card className={classes.root} onClick={() =>  props.project }>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title="Project Media"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default card;
