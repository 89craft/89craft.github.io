import React, {useState} from 'react';
import {
  Paper,
  makeStyles,
  Button,
  Toolbar,
  Link,
  MenuItem,
} from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import globalStyles from '../globalStyling.module.css';

const useStyles = makeStyles((theme) => ({
  text: {
    color: '#ffffff',
    margin: theme.spacing(0, 2),
  },
  background: {
    backgroundColor: 'black',
    height: '64px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollTop: {
    color: 'grey',
    position: 'fixed',
    bottom: '16px',
    right: '16px',
    width: '1.5em',
    height: '1.5em',
  },
  toolbar: {
    display: 'static',
  },
  websiteHome: {
    textDecoration: 'none',
    color: 'white',
  },
}));

const ScrollArrow = () =>{
  const classes = useStyles();
  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 20){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 20){
      setShowScroll(false)
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  window.addEventListener('scroll', checkScrollTop)

  return (
    <ArrowUpwardIcon large className={classes.scrollTop} onClick={scrollTop} style={{ display: showScroll ? 'flex' : 'none' }}/>
  );
}

/** This is a separated component for the copyright of the website */
function Footer() {
  const classes = useStyles();

  return (
    <footer className={`${globalStyles.footer}`}>
      <Paper className={classes.background} square>
        <Toolbar className={classes.toolbar}>
          <Button href='/' className={classes.websiteHome}>
            website home
          </Button>
          <ScrollArrow />
        </Toolbar>
      </Paper>
    </footer>
  );
}
export default Footer;
