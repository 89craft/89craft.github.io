import React, { useState } from 'react';
import {
  makeStyles,
  Button,
  Toolbar
} from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import globalStyles from '../styling/globalStyling.module.css';

const useStyles = makeStyles((theme) => ({
  text: {
    margin: theme.spacing(0, 2),
  },
  background: {
    height: '64px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollTop: {
    cursor: 'pointer',
    position: 'fixed',
    bottom: '16px',
    right: '16px',
    //width: '1.5em',
    //height: '1.5em',
  },
  toolbar: {
    display: 'flex',
    boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.25)',
  },
  websiteHome: {
    textDecoration: 'none',
    float: 'left',
    padding: theme.spacing(0),
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
    <ArrowUpwardIcon large="true" className={classes.scrollTop} onClick={scrollTop} style={{ display: showScroll ? 'flex' : 'none' }}/>
  );
}

/** This is a separated component for the copyright of the website */
function FOOTER() {
  const classes = useStyles();

  return (
    <footer className={`${globalStyles.footer}`}>
      <Toolbar className={classes.toolbar}>
        <Button href='/' className={classes.websiteHome}>
          website home
        </Button>
        <ScrollArrow />
      </Toolbar>
    </footer>
  );
}
export default FOOTER;
