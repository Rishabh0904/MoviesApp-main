import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import { Container, Grid, makeStyles, TextField, Button, Card, CardMedia, Typography, Hidden, LinearProgress } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel'

export default function Login(props) {
    const useStyles = makeStyles({
        mainContainer: {
            height: "100vh",
            width: "80vw",
            // backgroundColor: "lightgreen",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto"
        },
        textField: {
            fontSize : "20px"
        },
        defaultStyle : {
            marginTop : '10px'
        }
    })
    const classes = useStyles();
    
    const [styl, setStyle] = useState({});
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [loader, setLoader] = useState(false);
    const { login } = useContext(AuthContext);

    const changeStyle = () => {
        debugger
        let obj  = {
            fontSize : "20px" 
        }
        setStyle(obj);
      };

    const handleSubmit = async (e) => {
        // Prevent default action of a submit button
        e.preventDefault();
        try {
            setLoader(true);
            await login(email, password);
            setLoader(false);

            // This case is handled when manually routing from the '/login' route
            props.history.push("/moviesApp");
        } catch (error) {
            setLoader(false);
            setError(true);
            setEmail("");
            setPassword("");
        }
    }

    return (

        <div>
            <Grid container className={classes.mainContainer} spacing={4}>
                <Hidden xsDown smDown mdDown>
                    <Grid item xs={6} sm={6} md={6} lg={7}>
                        <div style={{ position: "relative" }}>
                            <CardMedia
                                image="https://www.instagram.com/static/images/homepage/home-phones.png/43cc71bb1b43.png"
                                style={{ backgroundSize: "contain", height: "86vh", position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}
                            >
                                <div style={{ height: "55rem", width: "40rem", marginLeft: "20rem" }}>
                                    <Carousel animation="fade" indicators={false} swipe={false} navButtonsAlwaysInvisible={true} autoPlay interval="3000">
                                        <img style={{height: '560px'}} src="https://foyrboost.s3.ap-south-1.amazonaws.com/banners/staging/banner_ef8e5ab4-4ad8-46c6-9056-9313797315f3_WhatsApp Image 2022-05-08 at 11.04.03 PM.jpeg" />
                                        <img  style={{height: '560px'}} src="https://foyrboost.s3.ap-south-1.amazonaws.com/banners/staging/banner_3db80755-d8e6-4d73-b6fd-e899765e5b9e_WhatsApp Image 2022-05-08 at 11.04.36 PM.jpeg" />
                                        <img style={{height: '560px'}} src="https://foyrboost.s3.ap-south-1.amazonaws.com/banners/staging/banner_adbf6d99-6d64-4cb6-81f5-a64405231179_WhatsApp Image 2022-05-08 at 11.51.25 PM.jpeg" />
                                        <img style={{height: '560px'}}  src="https://foyrboost.s3.ap-south-1.amazonaws.com/banners/staging/banner_7c3e5cbe-a85a-46c0-8864-20fb5158bb8c_WhatsApp Image 2022-05-08 at 11.50.25 PM.jpeg" />
                                    </Carousel>
                                </div>
                            </CardMedia>
                        </div>
                    </Grid>
                </Hidden>
                <Grid item xs={11} sm={8} md={6} lg={5}>
                    {loader ? <LinearProgress color="secondary" /> : null}
                    <Card variant="outlined"
                        style={{ padding: "1rem" }}>
                        <CardMedia
                        image="https://foyrboost.s3.ap-south-1.amazonaws.com/banners/staging/banner_617965e3-c83c-44c3-ac69-2f9a951bdbc4_cornflix.PNG"
                        style={{ backgroundSize: "contain", height: "8rem", }} />
                        <Grid container spacing={1}>
                            <Grid
                                item xs={12} sm={12} md={12} lg={12}>
                                <TextField
                                    id="outlined-email-input"
                                    label="Email"
                                    type="email"
                                    variant="outlined"
                                    value={email}
                                    fullWidth={true}
                                   
                                size="medium"
                                inputProps={{style: {fontSize: 20}}} 
                                 InputLabelProps={{style: {fontSize: 25 , marginTop : '3px'}}}
                                    autoFocus={true}
                                    onChange={(e) => { setEmail(e.target.value) }}
                                />
                            </Grid>
                            <Grid
                                item xs={12} sm={12} md={12} lg={12} >
                                <TextField
                                    id="outlined-password-input"
                                    label="Password"
                                    type="password"
                                    variant="outlined"
                                    value={password}
                                    fullWidth={true}
                                    className={classes.defaultStyle}
                                size="medium"
                                inputProps={{style: {fontSize: 20}}} 
                                 InputLabelProps={{style: {fontSize: 25 , marginTop : '3px'}}}
                                    onChange={(e) => { setPassword(e.target.value) }}
                                    // onClick={() => {change}}
                                    style={styl}
                                />
                            </Grid>
                            <Grid
                                item xs={12} sm={12} md={12} lg={12}>
                                <Typography
                                    className={classes.textField}
                                    variant="body1"
                                    gutterBottom>
                                    <LinkButton content="Forgot Password?"
                                        routeLink="/signup"></LinkButton>
                                </Typography>
                            </Grid>
                            <Grid
                                item xs={12} sm={12} md={12} lg={12}>
                                <Button
                                    variant="contained"
                                    disabled={loader}
                                    fullWidth={true}
                                    size="medium"
                                    style={{ backgroundColor: "#2e86de", color: "#ffffff", fontSize : "2rem" }}
                                    onClick={handleSubmit}>Login
                                </Button>
                            </Grid>
                        </Grid>
                    </Card>
                    <Card
                        variant="outlined"
                        style={{ marginTop: "2rem" }}>
                        <Typography
                            style={{ textAlign: "center", padding: "0.5rem", fontSize : "3rem" }}
                            variant="body1"
                            gutterBottom>
                            Don't have an account? <LinkButton content="Sign up"
                                routeLink="/signup" />
                        </Typography>
                    </Card>
                </Grid>
            </Grid >
        </div>

    );
}

function LinkButton({ content, routeLink }) {
    return (
        <Link style={{ textDecoration: "none", color: "#2e86de" }} to={routeLink}>{content}</Link>
    );
}