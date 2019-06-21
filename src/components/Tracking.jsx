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
  Zoom,
} from '@material-ui/core';

import {
  makeStyles,
} from '@material-ui/core/styles';

import {
  green,
  red,
} from '@material-ui/core/colors';

import {
  MdDone as AcceptIcon,
  MdClose as DeclineIcon,
} from 'react-icons/md';

const trackingId = 'UA-34470943-2';

const activateTracking = () => {
  ReactGA.initialize(trackingId);
  ReactGA.pageview(window.location.pathname + window.location.search);
};

const useStyles = makeStyles(theme => ({
  link: {
    color: theme.palette.primary.main,
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

  const classes = useStyles();

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
        TransitionComponent={Slide}
        TransitionProps={{
          direction: 'left',
        }}
        variant="success"
      >
        <SnackbarContent
          aria-describedby="client-snackbar"
          message={(
            <span id="client-snackbar">
              Do you allow me to save cookies?
              <br />
              <div
                role="presentation"
                className={classes.link}
                style={{ padding: 0, textTransform: 'inherit' }}
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
        onClose={() => setDialogOpen(false)}
        TransitionComponent={Zoom}
        TransitionProps={{
          direction: 'left',
        }}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">Why I use cookies</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To keep track of my visitors and their behavior on my site I use Google Analytics. I
            do this mainly to optimize my page in the future.
            <br />
            <br />
            <i>
              If you allow me to track your visit, Google saves some cookies on your computer
              to recognize your browser.
            </i>
            <br />
            <br />
            You can get more information in the&nbsp;
            <Link target="_blank" href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage">
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
