import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import {
  Grid,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    margin: '4em 0 0',
  },
  introText: {
    fontSize: 21,
    fontWeight: 100,
  },
  introQuote: {
    fontSize: 19,
    fontStyle: 'italic',
    fontWeight: 100,
  },
});

const Intro = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <Grid item xs={11} md={8} lg={6} xl={4} align="center">
          <Typography variant="subtitle1" color="textPrimary" paragraph className={classes.introText}>
            Hello! I&lsquo;m Matthias von Deetzen. Senior Web Developer specialized
            to create solutions with Symfony, React and Docker. Experienced with all stages
            of the development cycle. Like to create code in an agile and
            communicative environment.
          </Typography>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item xs={11} md={8} lg={5} xl={3} align="center">
          <Typography variant="subtitle2" color="textSecondary" paragraph className={classes.introQuote}>
            &ldquo;Finding a simple solution to solve a complex problem is the
            challenge to produce lastable code.&ldquo;
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Intro;
