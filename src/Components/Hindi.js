import React from 'react'
import UploadFile from '../UploadFile'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Nav1 from './Nav1';

const useStyles = makeStyles({
  root: {
      height:'80vh',
    maxWidth: '80vw',
    backgroundColor:'#404040',
    marginLeft:'10vw',
    marginTop:'10vh',
   display:'flex',
    flexDirection:'column',
   justifyContent:'center',
   alignContent:'center'
  },
 btn:{
 
     fontSize:20,
     cursor:'pointer',
     backgroundColor:'black'
 }
});




function Hindi() {
    const classes = useStyles();
    return (
      <> 
      <Nav1></Nav1>
        <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="400"
            image="https://media.istockphoto.com/photos/digital-security-concept-picture-id1289956604"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography style={{paddingLeft:'37vw'}} gutterBottom variant="h3" component="h2">
              Movie
            </Typography>
            <div  style={{paddingLeft:'35vw'}}>
            <UploadFile/>
               </div>
            <Typography variant="body2" color="textSecondary" variant='h4' component="h2">
            UWatchFree is a site where you can watch movies online free in HD without annoying ads, just come and enjoy the latest full movies online. You can also download the movies to your pc to watch movies later offline. Our official domain is uwatchfree.pe please bookmark it and share it with your friends.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button  className={classes.btn}  color="primary">
            Share
          </Button>
          <Button  className={classes.btn}  size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
      </>
    );
        
    
}

export default Hindi
