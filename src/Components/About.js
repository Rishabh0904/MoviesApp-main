import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {

    
    
  },
  avt:{
      height:'40vh',
      width:'20vw',
      marginLeft:'35vw',
      marginTop:'20vh'
  },
  typo:{
      width:'80vw',
      marginTop:'5vh',
      marginLeft:'10vw',
      textAlign:'center'
  }

}));

function About() {
    
     const classes = useStyles();

  return (
    <div className={classes.root}> 
      <Avatar className={classes.avt} alt="Travis Howard" src="https://wallpapercave.com/wp/wp4360615.jpg" />
    <div className={classes.typo}> 
      <Typography  variant='h3' component="h2">
            UWatchFree is a site where you can watch movies online free in HD without annoying ads, just come and enjoy the latest full movies online. You can also download the movies to your pc to watch movies later offline. Our official domain is uwatchfree.pe please bookmark it and share it with your friends.
        </Typography>
        </div>
    </div>
  );
    
}

export default About
