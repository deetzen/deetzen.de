import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import {
  Grid,
  Link,
} from '@material-ui/core';

const useStyles = makeStyles({
  badgeList: {
    margin: '1em 0 2em',
  },
  badge: {
    margin: '0 0.5em',
    opacity: 0.7,
  },
});

const badges = [{
  link: 'https://developers.google.com/speed/pagespeed/insights/?hl=de&url=https%3A%2F%2Fvon.deetzen.de',
  url: '/static/badges/page_speed.svg',
  alt: 'Google PageSpeed Insights',
}, {
  link: 'https://www.ssllabs.com/ssltest/analyze.html?d=von.deetzen.de',
  url: '/static/badges/ssl_labs.svg',
  alt: 'SSL Labs',
}, {
  link: 'https://gtmetrix.com/reports/von.deetzen.de/ny9wiK0w',
  url: '/static/badges/gt_metrix.svg',
  alt: 'GTMetrix',
}, {
  link: 'https://observatory.mozilla.org/analyze/von.deetzen.de',
  url: '/static/badges/observatory.svg',
  alt: 'Mozilla Observatory',
}];

const Badges = () => {
  const classes = useStyles();

  return (
    <Grid container justify="center" className={classes.badgeList}>
      {badges.map(badge => (
        <Grid item className={classes.badge} key={badge.alt}>
          <Link target="_blank" href={badge.link} rel="noreferrer">
            <img
              src={badge.url}
              alt={badge.alt}
              title={badge.alt}
            />
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default Badges;
