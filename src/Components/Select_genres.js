import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';



const styles = theme => ({
    outer : {
        paddingTop : '20px',
        paddingBottom : '20px'
    },
  button: {
    margin: theme.spacing.unit,
    minHeight : '4rem',
    minWidth : '6rem',
    fontSize : '1.5rem',
    color : '#14d0d0',
    backgroundColor : '#5d5656'
  },
  input: {
    display: 'none',
  },
  genre: {
      height : "40px",
      width : "150px",
      color : "white",
      fontSize : '25px',
      paddingLeft : '10px'
  },
  outerdiv: {
      backgroundColor : '#151313',
      paddingTop : '20px',
      paddingLeft : '20px',
    //   border : '2px solid white',
      borderRadius : '2%'
  },
  text : {
      fontSize : "50px",
  }
});



function ContainedButtons(props) {

  const [genreId, setgenreId] = useState(1);
  const [c, setC] = useState(0);
  const logValue = (e) => {
    debugger
    console.log(e.currentTarget.getAttribute("genreId"));
    let val = e.currentTarget.getAttribute("genreId");
    setgenreId(val);
    setC(10);
  }
  
  const { classes } = props;
  return (
      <div className = {classes.outer}>
    <div className = { classes.outerdiv}>
        <div className= {classes.genre}>Genres</div>
      <Button variant="contained" href="/movies" genreId={10} className={classes.button} onClick = {(e) => {logValue(e)}}>Action</Button>
      <Button variant="contained" href="/movies" className={classes.button}> Adult</Button>
      <Button variant="contained" href="/movies" className={classes.button}> Adventure</Button>
      <Button variant="contained" href="/movies" className={classes.button}> Animation</Button>
      <Button variant="contained" href="/movies" className={classes.button}> Biography</Button>
      <Button variant="contained" href="/movies" className={classes.button}> Comedy</Button>
      <Button variant="contained" href="/movies" className={classes.button}> Crime</Button>
      <Button variant="contained" href="/movies" className={classes.button}> Documentaries</Button>
      <Button variant="contained" href="/movies" className={classes.button}> Drama</Button>
      <Button variant="contained" href="/dubbed" className={classes.button}> Dubbed</Button>
      <Button variant="contained" href="/movies" className={classes.button}> Family</Button>
      <Button variant="contained" href="/movies" className={classes.button}> Fantasy</Button>
      <Button variant="contained" href="/movies" className={classes.button}> Featued</Button>
      <Button variant="contained" href="/hindi" className={classes.button}> Hindi</Button>
      <Button variant="contained" href="/movies" className={classes.button}> History</Button>
      <Button variant="contained" href="/movies" className={classes.button}> Hollywood</Button>
      <Button variant="contained" href="/movies" className={classes.button}> Horror</Button>
      <Button variant="contained" href="/movies" className={classes.button}> Romance</Button>
      <Button variant="contained" href="/movies" className={classes.button}> Sci-fi</Button>
      <Button variant="contained" href="/movies" className={classes.button}> Sport</Button>
      <Button variant="contained" href="/movies" className={classes.button}> Thriller</Button>
      <Button variant="contained" href="/tvseries" className={classes.button}> Tv-Series</Button>

      
      {/* <label htmlFor="contained-button-file">
        <Button variant="contained" component="span" className={classes.button}>
          Upload
        </Button>
      </label> */}
    </div>
    </div>
  );
}

ContainedButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContainedButtons);