import React from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';

import {
  Card,
  CardActions,
  CardContent,
  Divider,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
} from '@material-ui/core';

import {
  FaXingSquare as XingIcon,
  FaLinkedin as LinkedInIcon,
  FaGithubSquare as GithubIcon,
} from 'react-icons/fa';

import { getAge } from '../tools';

const useStyle = makeStyles(theme => ({
  profile: {
    margin: '12em 0 0',
  },
  profileMobile: {
    margin: '5em 0 0',
  },
  profileBalloon: {
    position: 'relative',
    display: 'inline-block',
    background: '#106588',
    color: '#FFF',
    margin: '0',
    padding: '0 0.8em',
    borderRadius: 1,
    '&::before': {
      content: "''",
      width: 0,
      height: 0,
      top: '2.2em',
      left: '0.5em',
      display: 'block',
      position: 'absolute',
      borderStyle: 'solid',
      borderWidth: '0 0 0.5em 0.6em',
      borderColor: 'transparent',
      borderLeftColor: '#106588',
    },
  },
  profileBalloonText: {
    fontWeight: 600,
  },
  profileCover: {
    margin: '3.5em',
    float: 'left',
  },
  profileCoverMobile: {
    display: 'block',
    margin: '3.5em 3.5em -1em',
    minWidth: 200,
  },
  profileContent: {
    margin: '2.5em',
  },
  profileName: {
    margin: '1.5em 0 0',
    display: 'flex',
    flexWrap: 'wrap',
  },
  profileNameIntro: {
    fontWeight: 300,
  },
  profileNamePerson: {
    fontWeight: 500,
    whiteSpace: 'pre-wrap',
    display: 'flex',
  },
  profileTitle: {
    margin: '0 0 1em',
    fontWeight: 100,
  },
  profileDivider: {
    margin: '1.8em 0',
  },
  profileInfoRow: {
    display: 'flex',
    margin: '1em 0',
  },
  profileInfoRowLabel: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: 110,
    fontWeight: 600,
    textTransform: 'uppercase',
  },
  profileActions: {
    padding: '1em',
    display: 'block',
    background: theme.palette.primary.main,
  },
}));

const details = {
  age: getAge('2/13/1983'),
  address: 'Germany, Lower Saxony, 26209 Hatten',
  email: 'hello@deetzen.de',
};

const Profile = () => {
  const classes = useStyle();
  const theme = useTheme();

  const isSm = !useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Grid container justify="center">
      <Grid item xs={12} sm={11} md={9} lg={6} xl={5}>
        <Card raised={false} className={classes[(isSm ? 'profileMobile' : 'profile')]}>
          {isSm ? (
            <picture className={classes.profileCoverMobile}>
              <source type="image/webp" srcSet="static/images/photo_small.webp" />
              <img src="static/images/photo_small.png" alt="Matthias von Deetzen" width="100%" />
            </picture>
          ) : (
            <picture className={classes.profileCover}>
              <source type="image/webp" srcSet="static/images/photo.webp" />
              <img src="static/images/photo.png" alt="Matthias von Deetzen" width="200" height="280" />
            </picture>
          )}
          <CardContent className={classes.profileContent}>
            <div className={classes.profileBalloon}>
              <Typography variant="overline" className={classes.profileBalloonText}>Hello</Typography>
            </div>
            <div className={classes.profileName}>
              <Typography display="inline" variant="h4" component="span" className={classes.profileNameIntro}>
                I&lsquo;m&nbsp;
              </Typography>
              <Typography display="inline" variant="h4" component="h1" className={classes.profileNamePerson}>
                Matthias von Deetzen
              </Typography>
            </div>
            <div>
              <Typography variant="h6" component="h2" className={classes.profileTitle} color="textSecondary">
                Developer
              </Typography>
            </div>

            <Divider className={classes.profileDivider} />

            { Object.keys(details).map(key => (
              <div className={classes.profileInfoRow} key={key}>
                <Typography variant="body2" display="inline" className={classes.profileInfoRowLabel}>
                  {key}
                  :
                </Typography>
                <Typography variant="body2" color="textSecondary" display="inline">{details[key]}</Typography>
              </div>
            )) }
          </CardContent>
          <CardActions className={classes.profileActions} align="right">
            <IconButton target="_blank" href="https://www.xing.com/profile/Matthias_vonDeetzen" aria-label="XING" rel="noreferrer">
              <XingIcon size={30} color="#FFF" />
            </IconButton>
            <IconButton target="_blank" href="https://www.linkedin.com/in/matthias-von-deetzen/" aria-label="LinkedIn" rel="noreferrer">
              <LinkedInIcon size={30} color="#FFF" />
            </IconButton>
            <IconButton target="_blank" href="https://github.com/deetzen" aria-label="GitHub" rel="noreferrer">
              <GithubIcon size={30} color="#FFF" />
            </IconButton>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Profile;
