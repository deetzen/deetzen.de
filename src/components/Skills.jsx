import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import {
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from '@material-ui/core';

import {
  FaSymfony as SymfonyIcon,
  FaReact as ReactIcon,
  FaPhp as PhpIcon,
  FaJs as JsIcon,
  FaDocker as DockerIcon,
  FaGitlab as GitlabIcon,
  FaServer as ServerIcon,
} from 'react-icons/fa';

const useStyles = makeStyles({
  root: {
    margin: '4em 0',
  },
  listItem: {
    margin: '1em',
  },
  listItemText: {
    padding: '0 2em 0 0',
  },
});

const Intro = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography align="center" variant="h4" component="h3" color="textSecondary" paragraph>
        Professional skills
      </Typography>
      <Grid container justify="center">
        <Grid item xs={12} sm={9} md={7} lg={4}>
          <Paper>
            <List aria-label="Personal skills">
              <ListItem className={classes.listItem}>
                <ListItemIcon>
                  <SymfonyIcon size={36} />
                </ListItemIcon>
                <ListItemText
                  primary="Symfony 4"
                  secondary="Created and maintained various RESTful APIs and applications with Symfony 4."
                  className={classes.listItemText}
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem className={classes.listItem}>
                <ListItemIcon>
                  <ReactIcon size={36} />
                </ListItemIcon>
                <ListItemText
                  primary="React JS"
                  secondary="Created several React applications with Material UI and Redux."
                  className={classes.listItemText}
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem className={classes.listItem}>
                <ListItemIcon>
                  <PhpIcon size={36} />
                </ListItemIcon>
                <ListItemText
                  primary="PHP"
                  secondary="Started to learn with PHP 4 and writing in version 7.3 at the moment."
                  className={classes.listItemText}
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem className={classes.listItem}>
                <ListItemIcon>
                  <JsIcon size={36} />
                </ListItemIcon>
                <ListItemText
                  primary="JavaScript"
                  secondary="Using JS for React and NodeJS backends with private npm packages."
                  className={classes.listItemText}
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem className={classes.listItem}>
                <ListItemIcon>
                  <DockerIcon size={36} />
                </ListItemIcon>
                <ListItemText
                  primary="Docker"
                  secondary="Created own docker images from scratch and using in dev and prod enviroments."
                  className={classes.listItemText}
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem className={classes.listItem}>
                <ListItemIcon>
                  <GitlabIcon size={36} />
                </ListItemIcon>
                <ListItemText
                  primary="GitLab"
                  secondary="Administrate a GitLab instance for a medium-sized European company."
                  className={classes.listItemText}
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem className={classes.listItem}>
                <ListItemIcon>
                  <ServerIcon size={36} />
                </ListItemIcon>
                <ListItemText
                  primary="Server Administation"
                  secondary="Administrate some Debian and Ubuntu based server instances."
                  className={classes.listItemText}
                />
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Intro;
