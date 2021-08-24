import { createTheme } from '@material-ui/core/styles';

/*
 * The theme pallette containing the default website colors
 */
const cgTheme = createTheme({
  palette: {
    spacing: '8px',
    primary: {
      //light: '#ffbe6d',
      main: '#00ff00',
      //dark: '#c25e09',
      //contrastText: '#000000',
    },
    secondary: {
      //light: '#ffffff',
      main: '#0000ff',
      //dark: '#ffffff',
      //contrastText: '#000000',
    },
    text: { //Typography
      primary: '#fff',
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
    },
    action: { //Buttons
      active: '#fff',
      hover: 'rgba(255, 255, 255, 0.08)',
      selected: 'rgba(255, 255, 255, 0.16)',
      disabled: 'rgba(255, 255, 255, 0.3)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
    },
    background: { //Background
      default: '#303030',
      paper: '#424242',
    },
    divider: 'rgba(255, 255, 255, 0.12)', //Divider
  },
});

export default cgTheme;