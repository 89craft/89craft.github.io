import React from 'react';
import {
  Typography,
  makeStyles,
  Paper,
  Grid,
  Box,
  Button
} from '@material-ui/core';
import BioPic from '../media/bioPic.jpg';
import globalStyles from '../styling/globalStyling.module.css';

const useStyles = makeStyles((theme) => ({
  splashImage: {
    //boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.25)',
    //position: 'relative',
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '75%',
    height: '100vh',
    padding: theme.spacing(4, 0),
  },
  splashTextContainer: {
    padding: theme.spacing(16, 12, 16),
  },
  splashLinks: {
    textDecoration: 'none',
  },
  splashButton: {
    margin: theme.spacing(1, 0, 1),
  },
  splashTitle: {
    margin: theme.spacing(0, 0, 4),
  },
  splashText: {
    margin: theme.spacing(0, 0, 8),
  },
  splashButtonContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

function Home() {
  const classes = useStyles();
  console.log("home");

  return (
    <div>
      <Grid container spacing={0}>
        <Grid item xs={6} className={classes.splashTextContainer}>
          <Typography variant="h2" className={classes.splashTitle}>
            Ryan Heal
          </Typography>
          <Typography variant="body1" className={classes.splashText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            hendrerit enim ut urna vestibulum bibendum. Vestibulum tempor,
            ipsum in lobortis fringilla, augue elit tempus odio, sit amet
            tincidunt augue nisl et mauris. Etiam tempor mauris nisi, sed
            maximus felis tincidunt et.
          </Typography>
          <div className={classes.splashButtonContainer}>
            <Button variant="contained" href="/&/cg" className={classes.splashButton}>
              3D Graphics
            </Button>
            <Button variant="contained" href="/&/gd" className={classes.splashButton}>
              Game Development
            </Button>
            <Button variant="contained" href="/&/wd" className={classes.splashButton}>
              Web Development
            </Button>
          </div>
        </Grid>
        <Grid item xs={6}>
          <Box
            className={classes.splashImage}
            style={{ backgroundImage: `url(${BioPic})` }}
          >
            {/* Increase the priority of the hero background image */}
            <img
              style={{ display: 'none' }}
              src={BioPic}
              alt="Ryan Heal's portrait picture"
            />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
export default Home;