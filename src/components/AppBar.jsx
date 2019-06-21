import React, { useState } from 'react';

import {
  AppBar,
  Button,
  Collapse,
  Divider,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';

import {
  MdMenu as MoreIcon,
  MdClose as CloseIcon,
} from 'react-icons/md';

import { makeStyles, useTheme } from '@material-ui/core/styles';

import useScrollTrigger from '@material-ui/core/useScrollTrigger';

import { SectionsSpy } from 'react-smart-sections';

const useStyles = makeStyles(theme => ({
  '@keyframes out': {
    '0%': { transform: 'rotate(0deg)', opacity: 1 },
    '100%': { transform: 'rotate(90deg)', opacity: 0 },
  },
  '@keyframes in': {
    '0%': { transform: 'rotate(90deg)', opacity: 0 },
    '100%': { transform: 'rotate(180deg)', opacity: 1 },
  },
  menuIconWrapper: {
    position: 'relative',
  },
  menuIcon: {
    position: 'absolute',
  },
  menuIconIn: {
    animation: '$in 0.3s ease-in forwards',
  },
  menuIconOut: {
    animation: '$out 0.3s ease-in forwards',
  },
  appbar: {
    padding: '0.5em 1.2em',
    minHeight: '5em',
  },
  title: {
    flexGrow: 1,
    fontSize: '2em',
    fontWeight: 600,
  },
  logo: {
    color: theme.palette.primary.main,
  },
  logo_2: {
    fontFamily: 'Kodchasan',
    opacity: 0.8,
    fontStyle: 'italic',
  },
  divider: {
    margin: '0.5em 0 1.2em',
  },
  mobileButton: {
    width: '100%',
    padding: '0 0 1em',
  },
  navItem: {
    color: theme.palette.text.primary,
  },
  navItemActive: {
    color: theme.palette.text.primary,
    textDecoration: 'underline',
  },
}));

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 8 : 3,
  });
}

Math.easeInOutQuad = (t, b, c, d) => {
  t /= d / 2; // eslint-disable-line
  if (t < 1) return c / 2 * t * t + b;
  t -= 1; // eslint-disable-line

  return -c / 2 * (t * (t - 2) - 1) + b;
};

const scrollTo = (to, duration) => {
  const start = window.pageYOffset;
  const change = to - start;
  const increment = 20;
  let currentTime = 0;

  const animateScroll = () => {
    currentTime += increment;
    const val = Math.easeInOutQuad(currentTime, start, change, duration);
    window.scrollTo(0, val);
    if (currentTime < duration) {
      setTimeout(animateScroll, increment);
    }
  };

  animateScroll();
};

const MyAppBar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const renderMenu = mobile => (
    <SectionsSpy
      render={sections => (
        sections.map(section => (
          <Button
            key={section.name}
            onClick={() => scrollTo(section.yScrollPoint, 500)}
            className={[
              mobile ? classes.mobileButton : '',
              section.active ? classes.navItemActive : classes.navItem,
            ].join(' ')}
            ariaLabel={section.name}
          >
            {section.name}
          </Button>
        ))
      )}
    />
  );

  return (
    <ElevationScroll>
      <AppBar color="default" className={classes.appbar}>
        <Toolbar>
          <Typography
            variant="h6"
            className={classes.title}
            color="textSecondary"
          >
            <span className={classes.logo}>MVD</span>
            <span className={classes.logo_2}>vita</span>
          </Typography>

          <Hidden smUp>
            <IconButton
              onClick={() => setMenuOpen(!menuOpen)}
              color="inherit"
              className={classes.menuIconWrapper}
              disableRipple
              disableFocusRipple
            >
              <MoreIcon
                style={{ fill: theme.palette.text.secondary }}
                className={[
                  classes.menuIcon,
                  classes[menuOpen ? 'menuIconOut' : 'menuIconIn'],
                ].join(' ')}
              />
              <CloseIcon
                style={{ fill: theme.palette.text.secondary }}
                className={[
                  classes.menuIcon,
                  classes[menuOpen ? 'menuIconIn' : 'menuIconOut'],
                ].join(' ')}
              />
            </IconButton>
          </Hidden>

          <Hidden xsDown>
            {renderMenu(false)}
          </Hidden>

        </Toolbar>

        <Hidden smUp>
          <Collapse in={menuOpen}>
            <Divider className={classes.divider} />
            {renderMenu(true)}
          </Collapse>
        </Hidden>

      </AppBar>
    </ElevationScroll>
  );
};

export default MyAppBar;
