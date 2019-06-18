import { createMuiTheme } from '@material-ui/core/styles';

const appTheme = {
  typography: {
    fontFamily: 'Open Sans, sans-serif',
  },
  palette: {
    type: 'light',
    primary: {
      main: '#3085ad',
      contrastText: 'rgba(255, 255, 255, 0.87)',
    },
    secondary: {
      main: '#ba0b0b',
      contrastText: 'rgba(255, 255, 255, 0.87)',
    },
  },
  overrides: {
    MuiPaper: {
      rounded: {
        borderRadius: 0,
      },
    },
    MuiCardContent: {
      root: {
        '&:last-child': {
          paddingBottom: 10,
        },
      },
    },
  },
};

export default createMuiTheme(appTheme);
