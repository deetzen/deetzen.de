import React from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';

import {
  Fab,
  Grid,
  Paper,
  Tooltip,
  Typography,
  Zoom,
} from '@material-ui/core';

import {
  MdDirectionsRun as RunningIcon,
  MdNaturePeople as HikeIcon,
  MdMovie as MovieIcon,
} from 'react-icons/md';

import {
  GiTennisRacket as SquashIcon,
  GiBookshelf as ReadingIcon,
} from 'react-icons/gi';

const useStyles = makeStyles({
  root: {
    margin: '4em 0',
  },
  paper: {
    padding: '2em',
  },
  item: {
    margin: '0 1.5em 2em',
    display: 'inline-flex',
  },
});

const Intro = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <Typography align="center" variant="h4" component="h3" color="textSecondary" paragraph>
        My interests
      </Typography>
      <Grid container justify="center">
        <Grid item xs={12} sm={9} md={7} lg={6} xl={5} align="center">
          <Paper className={classes.paper}>
            <Tooltip TransitionComponent={Zoom} title="Squash">
              <div className={classes.item}>
                <Fab disabled aria-label="Squash">
                  <SquashIcon size={36} style={{ fill: theme.palette.text.main }} />
                </Fab>
              </div>
            </Tooltip>
            <Tooltip TransitionComponent={Zoom} title="Hiking">
              <div className={classes.item}>
                <Fab disabled aria-label="Hike">
                  <HikeIcon size={36} style={{ fill: theme.palette.text.main }} />
                </Fab>
              </div>
            </Tooltip>
            <Tooltip TransitionComponent={Zoom} title="Running">
              <div className={classes.item}>
                <Fab disabled aria-label="Running">
                  <RunningIcon size={36} style={{ fill: theme.palette.text.main }} />
                </Fab>
              </div>
            </Tooltip>
            <Tooltip TransitionComponent={Zoom} title="Reading">
              <div className={classes.item}>
                <Fab disabled aria-label="Reading">
                  <ReadingIcon size={36} style={{ fill: theme.palette.text.main }} />
                </Fab>
              </div>
            </Tooltip>
            <Tooltip TransitionComponent={Zoom} title="Movies">
              <div className={classes.item}>
                <Fab disabled aria-label="Movie">
                  <MovieIcon size={36} style={{ fill: theme.palette.text.main }} />
                </Fab>
              </div>
            </Tooltip>
            <Typography variant="body1" color="textSecondary">
              I turned my hobby into my job long ago - as a balance, I like to be active and
              enjoy the nature. But most important to me is spending as much time with my
              family as possible.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Intro;
