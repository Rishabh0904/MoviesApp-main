import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  outer : {
    paddingTop : '20px',
    paddingBottom : '20px',
},
outerdiv: {
    backgroundColor : '#151313',
    paddingTop : '20px',
    paddingLeft : '20px',
  //   border : '2px solid white',
    borderRadius : '2%'
},
text: {
    fontSize : '25rem',
    color : '#14d0d0',
},
icon : {
    color :" #14d0d0",
}
}));

export default function LatestMovies() {
  const classes = useStyles();

  let arr = ["Stillwater","Jungle Cruise","The Green Knight","Lorelei" ,"Nine Days", "Masquerade","Demonic",
  "Reminiscence",
  "Paw Patrol: The Movie ",
  "The Night House",
  "The Protege ",
  "Flag Day",
  "Habit",
  "Risen" ];



  return (
      <div className = {classes.outer}>
    <List
      className={classes.root, classes.outerdiv}>
          <h2>Upcoming Movies</h2>
      {arr.map((idx) => {
          return(
              <div>
            <ListItem button>
            <ListItemIcon>
            <PlayCircleFilledWhiteIcon className = {classes.icon}/>
            </ListItemIcon>
            <ListItemText className ={classes.text}>{idx}</ListItemText>
          </ListItem>
          </div>
          )
      })}
      

    </List>
    </div>
  );
}