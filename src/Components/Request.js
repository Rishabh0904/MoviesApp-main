import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Nav1 from './Nav1';

const useStyles = makeStyles((theme) => ({
  req: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
    height:'40vh',
    width:'40vw',
    marginLeft:'0px'
  },
  paper: {
    maxWidth: 400,
    backgroundColor:'grey',
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  }, root: {
    minWidth: 275,
  },
  card:{
    marginTop:'5rem',
    backgroundColor: '#404040',
    width: '60vw',
  }
  ,
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 20,
    fontFamily: 'impact',
    borderBottom:'solid 1px grey',
    color:'white'
  },
  pos: {
    marginBottom: 12,
    color:'white',
    fontSize:14,
  },
 


}));

const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support. `;

function Request() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <div>
      <Nav1></Nav1>
<Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         Request a Movie
        </Typography>

        <Typography variant="h5" component="h2">
        Hello everyone, if a movie or tv-series is not available on uwatchfree you can request it here, we will try to add it as soon as possible.
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        
        </Typography>
        <Typography className={classes.pos} style={{color:'blue'}} color="textSecondary">
        Please search the site before making a request.
        <div> </div>
        Don’t ask for HD print of a movie, your comment will be ultimately ignored.
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        Please search the site before making a request.
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        Movie name:
        </Typography>
        <Typography className={classes.pos} color="textSecondary">    
        Movie releasing year:
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        Add your Requests in the comment box below, we will try to add it if possible.
        <div></div>
        Good Luck.
        </Typography>
        <Typography className={classes.pos} color="textSecondary">    
       
        </Typography>
      </CardContent>
     
    </Card>
    <div className={classes.req}>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2} className={classes.grid}>
          <Grid item>
            <Avatar>W</Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography >can u pls add ALICE IN WONDERLAND IN TAMIL AND ALICE THROUGH THE LOOKING GLASS IN TAMIL AND OTHER SUCH CARTOON MOVIE IN TAMIL 🙏🙏🙏🙏🙏🙏</Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>R</Avatar>
          </Grid>
          <Grid item xs>
            <Typography >Please add Best of luck laalu in gujarati genre it’s not available anywhere in web and old movie yet demanding</Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>P</Avatar>
          </Grid>
          <Grid item xs>
            <Typography>I want to watch the movie “Ranchi Diaries” it is released in 2017 plz try to upload it plz 🙏</Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
    </div>
  );
}

export default Request
