import React, { useState, useEffect } from 'react';

import ReactGA from 'react-ga';

import {
  IconButton,
  Snackbar,
  SnackbarContent,
} from '@material-ui/core';

import {
  green,
  red,
} from '@material-ui/core/colors';

import {
  MdDone as AcceptIcon,
  MdClose as DeclineIcon,
} from 'react-icons/md';

const activateTracking = () => {
  ReactGA.initialize('UA-34470943-2');
  ReactGA.pageview(window.location.pathname + window.location.search);
};

const Tracking = () => {
  const allowTracking = localStorage.getItem('allowTracking');
  const [allow, setAllow] = useState(allowTracking);

  useEffect(() => {
    if (allow === 'true') {
      activateTracking();
    }
    localStorage.setItem('allowTracking', allow);
  }, [allow]);

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      open={(allow === 'null' || allow === null)}
      variant="success"
    >
      <SnackbarContent
        aria-describedby="client-snackbar"
        message={(
          <span id="client-snackbar">
            Do you allow us to use cookies to enable tracking?
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
  );
};

export default Tracking;
