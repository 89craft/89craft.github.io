import { createTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

/*
 * The theme pallette containing the wed development website colors
 */
const wdTheme = createTheme({
  palette: {
    spacing: '8px',
    primary: {
      //light: '#ffbe6d',
      main: '#0000aa',//'rgba(0, 0, 255, 0.67)',
      //dark: '#c25e09',
      //contrastText: '#000000',
    },
    secondary: {
      //light: '#ffffff',
      main: '#0000aa',//'rgba(0, 0, 255, 0.67)',
      //dark: '#ffffff',
      //contrastText: '#000000',
    },
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2,
    text: { //Typography
      primary: '#fff',
      secondary: '#b3b3b3',//rgba(255, 255, 255, 0.7)',
      disabled: '#808080',//rgba(255, 255, 255, 0.5)',
    },
    action: { //Buttons
      active: '#fff',
      hover: '#141414',//'rgba(255, 255, 255, 0.08)',
      selected: '#292929',//'rgba(255, 255, 255, 0.16)',
      disabled: '#4d4d4d',//'rgba(255, 255, 255, 0.3)',
      disabledBackground: '#1f1f1f',//'rgba(255, 255, 255, 0.12)',
    },
    background: { //Background
      default: '#303030',
      paper: '#424242',
    },
    divider: '#1f1f1f',//'rgba(255, 255, 255, 0.12)', //Divider
  },
});

export default wdTheme;