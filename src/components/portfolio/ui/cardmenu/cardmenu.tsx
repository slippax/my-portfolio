import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import CloudIcon from '@material-ui/icons/Cloud';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import GamepadIcon from '@material-ui/icons/Gamepad';
import MouseIcon from '@material-ui/icons/Mouse';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    link: {
      display: 'flex',
      cursor: 'pointer',
      color: 'black'
    },
    icon: {
      marginRight: theme.spacing(0),
      width: 17,
      height: 20,
    },

    breadcrumbs : {
      marginTop: '5px',
marginLeft : '0px',
    }
  }),
);


export default function IconBreadcrumbs(props:any) {

  const classes = useStyles();
   const pressHandler = (num:any) => props.clicked(num);
  return (
    <Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumbs}>
      <Link color="inherit" onClick={()=>(pressHandler(0))}  className={classes.link}>
        <KeyboardIcon className={classes.icon} />
        Virus Trackr
      </Link>
      <Link
        color="inherit"
        onClick={()=>(pressHandler(1))}
        className={classes.link}
      >
        <GamepadIcon className={classes.icon} />
        Type King
      </Link>
      <Link
        color="inherit"
        onClick={()=>(pressHandler(2))}
        className={classes.link}
      >
        <CloudIcon className={classes.icon} />
        Weather Grabbr
      </Link>
      <Link
        color="inherit"
        onClick={()=>(pressHandler(3))}
        className={classes.link}
      >
        <AssignmentTurnedInIcon className={classes.icon} />
       Todoz
      </Link>
      <Link
        color="inherit"
        onClick={()=>(pressHandler(4))}
        className={classes.link}
      >
        <MouseIcon className={classes.icon} />
       Ez Sens
      </Link>
    </Breadcrumbs>
  );
}
