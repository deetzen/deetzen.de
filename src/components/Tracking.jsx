import React, { useState, useEffect } from 'react';

import ReactGA from 'react-ga';

import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  IconButton,
  Link,
  Slide,
  Snackbar,
  SnackbarContent,
  Typography,
  useMediaQuery,
} from '@material-ui/core';

import {
  makeStyles,
  useTheme,
} from '@material-ui/core/styles';

import {
  green,
  red,
} from '@material-ui/core/colors';

import {
  MdDone as AcceptIcon,
  MdClose as CloseIcon,
  MdClose as DeclineIcon,
} from 'react-icons/md';

const trackingId = 'UA-34470943-2';

const activateTracking = () => {
  ReactGA.initialize(trackingId);
  ReactGA.pageview(window.location.pathname + window.location.search);
};

const useStyles = makeStyles(theme => ({
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  link: {
    fontStyle: 'italic',
    textDecoration: 'underline',
    color: theme.palette.primary.contrastText,
    '&:hover': {
      textDecoration: 'underline',
      cursor: 'pointer',
    },
  },
}));

const Tracking = () => {
  const allowCookies = localStorage.getItem('allowCookies');
  const [allow, setAllow] = useState(allowCookies);
  const [dialogOpen, setDialogOpen] = useState(false);

  const theme = useTheme();
  const classes = useStyles();
  const fullScreenDialog = useMediaQuery(theme.breakpoints.down('xs'));

  useEffect(() => {
    if (allow === 'true') {
      activateTracking();
    }
    localStorage.setItem('allowCookies', allow);
  }, [allow]);

  return (
    <React.Fragment>

      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        open={(allow === 'null' || allow === null)}
        variant="success"
      >
        <SnackbarContent
          message={(
            <span id="client-snackbar">
              Do you allow me to save cookies?
              <br />
              <div
                role="presentation"
                className={classes.link}
                onClick={() => setDialogOpen(true)}
              >
                More Information
              </div>
            </span>
          )}
          action={[
            <IconButton key="accept" aria-label="Close" color="inherit" onClick={() => { setAllow('true'); }}>
              <AcceptIcon color={green[500]} />
            </IconButton>,
            <IconButton key="decline" aria-label="Close" color="inherit" onClick={() => { setAllow('false'); }}>
              <DeclineIcon color={red[500]} />
            </IconButton>,
          ]}
        />
      </Snackbar>

      <Dialog
        open={dialogOpen}
        fullScreen={fullScreenDialog}
        onClose={() => setDialogOpen(false)}
        TransitionComponent={Slide}
        TransitionProps={{
          direction: 'down',
        }}
        style={{
          zIndex: 1400,
        }}
      >
        <DialogTitle disableTypography>
          <Typography variant="h6">Why I use cookies</Typography>
          <IconButton aria-label="Close" className={classes.closeButton} onClick={() => setDialogOpen(false)}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            To keep track of my visitors and their behavior on my site I use Google Analytics. I
            do this mainly to optimize my page in the future.
            <br />
            <br />
            <i>
              If you allow me to track your visit, Google saves some cookies on your computer
              to recognize your behavior.
            </i>
            <br />
            <br />
            You can get more information in the&nbsp;
            <Link target="_blank" href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage#analyticsjs">
              docs by Google
            </Link>
            .
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)} color="primary" autoFocus>
            Got it
          </Button>
        </DialogActions>
      </Dialog>

    </React.Fragment>
  );
};

export default Tracking;
