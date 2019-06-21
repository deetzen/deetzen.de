import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import {
  Grid,
  Link,
} from '@material-ui/core';

import BadgeSslLabs from '../badges/ssl_labs_svg';
import BadgeGtMetrix from '../badges/gt_metrix_svg';
import BadgeObservatory from '../badges/observatory_svg';
import BadgeHeaders from '../badges/headers_svg';
import BadgePageSpeed from '../badges/page_speed_svg';

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
  svg: <BadgePageSpeed width="7.4em" height="1.5em" />,
  alt: 'Google PageSpeed Insights',
}, {
  link: 'https://www.ssllabs.com/ssltest/analyze.html?d=von.deetzen.de',
  svg: <BadgeSslLabs width="6.3em" height="1.5em" />,
  alt: 'SSL Labs',
}, {
  link: 'https://gtmetrix.com/reports/von.deetzen.de/ny9wiK0w',
  svg: <BadgeGtMetrix width="7.3em" height="1.5em" />,
  alt: 'GTMetrix',
}, {
  link: 'https://observatory.mozilla.org/analyze/von.deetzen.de',
  svg: <BadgeObservatory width="7.5em" height="1.5em" />,
  alt: 'Mozilla Observatory',
}, {
  link: 'https://securityheaders.com/?q=https%3A%2F%2Fvon.deetzen.de&followRedirects=on',
  svg: <BadgeHeaders width="6em" height="1.5em" />,
  alt: 'Security Headers',
}];

const Badges = () => {
  const classes = useStyles();

  return (
    <Grid container justify="center" className={classes.badgeList}>
      {badges.map(badge => (
        <Grid item className={classes.badge} key={badge.alt}>
          <Link target="_blank" href={badge.link} rel="noreferrer">
            {badge.svg}
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default Badges;
