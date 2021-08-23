import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProjectRouter from './router';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
require('dotenv').config();

/*
 * The theme pallette containing website colors
 */
const theme = createTheme({
  palette: {
    primary: {
      //light: '#ffbe6d',
      main: '#FA8D3E',
      //dark: '#c25e09',
      //contrastText: '#000000',
    },
    secondary: {
      //light: '#ffffff',
      main: '#CEFA3E',
      //dark: '#ffffff',
      //contrastText: '#000000',
    },
    background: {
      default: '#e9fae1',
      orange: '#fff3e0',
      yellow: '#fffae0',
      green: '#e9fae1',
      white: '#ffffff',
    },
    logo: {
      orange: '#f26924',
      yellow: '#faf07d',
      green: '#cdf57a',
    },
    button: {
      orange: '#fa8d3e',
      yellow: '#faeb3e',
      green: '#cefa3e',
    },
    icon: {
      green: '#b1eb3b',
    },
    text: {
      default: '#343434',
      textbox: '#818181',
      black: '#000000',
    },
    link: {
      default: '#f9a825',
      clicked: '',
    },
  },
  /*overrides: {
    MuiCssBaseline: {
      '@global': {
        shadow: {
          boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.25)',
        },
      },
    },
  },
  '@global': {
    shadow: {
      boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.25)',
    },
  },*/
});

/*
 * The main react configuration file and the root component of project
 */
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ProjectRouter />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
