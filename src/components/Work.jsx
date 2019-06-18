import React, { Fragment } from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import {
  Chip,
  Grid,
  Hidden,
  Paper,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    margin: '4em 0',
  },
  timeline: {
    margin: '3em 0 0',
  },
  timelineCenter: {
    '&:after': {
      content: "''",
      display: 'block',
      width: 0,
      height: '100%',
      borderLeft: '1px solid #FFF',
    },
  },
  timelineItem: {
    padding: '1.5em',
    borderTop: `3px solid ${theme.palette.primary.main}`,
  },
  workTitle: {
    marginTop: '-0.4em',
  },
  tag: {
    margin: '0.8em 0.2em 0',
    color: theme.palette.text.secondary,
    height: 28,
    textTransform: 'lowercase',
  },
  tagList: {
    margin: '0 -0.2em',
  },
}));

const list = [{
  time: '05/2013 - today',
  title: 'Senior Web-Developer',
  company: 'CEWE Stiftung & Co KGaA',
  description: 'Planing and developing an headless content management system, a content-less '
                + 'webpage manager and a single sign on with RESTful APIs and several React '
                + 'frontends.',
  tags: ['react', 'symfony', 'docker', 'gitlab'],
}, {
  time: '01/2010 - 04/2013',
  title: 'Leading Developer',
  company: 'new-data-services GmbH',
  description: 'Creating a PHP framework for internal use. Plan and develop an online photo '
              + 'service platform. Creation of various customer projects. Customer care.',
  tags: ['PHP', 'phpBB', 'Contao'],
}, {
  time: '11/2006 - 12/2009',
  title: 'IT Specialist for development',
  company: 'CEWE Color AG & Co OHG',
  description: 'Realization of an eurpean solution for managing customer individual webpages '
              + 'based on the OpenText WebSolutions CMS.',
  tags: ['OT WebSolutions', 'PHP', 'phpBB'],
}, {
  time: '08/2005 - 10/2006',
  title: 'Trainee',
  company: 'new-data-services GmbH',
  description: 'Learning the fundamentals of object oriented programming in PHP and '
              + 'use it for several customer projects.',
  tags: ['PHP', 'phpBB'],
}];

const calcMargin = (key, noMargin) => {
  if (noMargin === true) return '0 0 2em';

  if (key === 0) return '0';
  if (key === 1) return '10em 0 0';
  if (key % 2 === 1) return '5em 0 0';

  return '-5em 0 0';
};

const Work = () => {
  const classes = useStyles();
  const theme = useTheme();
  const noMargin = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div className={classes.root}>
      <Typography align="center" variant="h4" component="h3" color="textSecondary" paragraph>
        Work experience
      </Typography>
      <Typography align="center" variant="subtitle1" color="textSecondary" paragraph>
        I started developing with PHP 4 as it was released in the year 2000.
        <br />
        And until today I love to solve challenges with code.
      </Typography>
      <Grid container justify="center">
        <Grid item xs={12} sm={10} lg={8} xl={6}>

          <Grid container className={classes.timeline} justify="center">
            {list.map((item, key) => (
              <Fragment key={`work-${item.time}`}>
                <Grid
                  item
                  xs={12}
                  sm={10}
                  md={5}
                  align={key % 2 !== 0 ? 'left' : 'right'}
                  style={{ margin: calcMargin(key, noMargin) }}
                >
                  <Paper className={classes.timelineItem}>
                    <Typography variant="h6" component="h4" className={classes.workTitle}>{item.title}</Typography>
                    <Typography color="textSecondary" variant="subtitle1">{item.company}</Typography>
                    <Typography color="textSecondary" variant="subtitle2" paragraph>{item.time}</Typography>
                    <Typography color="textSecondary" variant="body2">{item.description}</Typography>
                    <div className={classes.tagList}>
                      {item.tags.map(tag => (<Chip key={tag} className={classes.tag} size="small" variant="outlined" label={tag} />))}
                    </div>
                  </Paper>
                </Grid>
                {key % 2 === 0 ? <Hidden smDown><Grid item sm={1} align="center" className={classes.timelineCenter} /></Hidden> : ''}
              </Fragment>
            ))}
          </Grid>

        </Grid>
      </Grid>
    </div>
  );
};

export default Work;
