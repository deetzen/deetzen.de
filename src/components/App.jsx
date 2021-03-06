import React from 'react';

import { MuiThemeProvider, useTheme } from '@material-ui/core/styles';

import {
  CssBaseline,
  Grid,
  IconButton,
} from '@material-ui/core';

import {
  FaXingSquare as XingIcon,
  FaLinkedin as LinkedInIcon,
  FaGithubSquare as GithubIcon,
} from 'react-icons/fa';

import { Section } from 'react-smart-sections';

import appTheme from '../theme';

import AppBar from './AppBar';
import Profile from './Profile';
import Intro from './Intro';
import Skills from './Skills';
import Work from './Work';
import Interests from './Interests';
import Badges from './Badges';
import Tracking from './Tracking';

function App() {
  const theme = useTheme();

  return (
    <MuiThemeProvider theme={appTheme}>
      <CssBaseline />
      <AppBar />
      <Section name="profile">
        <Profile />
        <Intro />
      </Section>
      <Section name="skills">
        <Skills />
      </Section>
      <Section name="work">
        <Work />
      </Section>
      <Section name="interests">
        <Interests />
      </Section>
      <Grid container justify="center">
        <Grid item style={{ padding: '0 0 3em' }}>
          <IconButton target="_blank" href="https://www.xing.com/profile/Matthias_vonDeetzen" aria-label="XING" rel="noreferrer">
            <XingIcon size={30} color={theme.palette.text.disabled} />
          </IconButton>
          <IconButton target="_blank" href="https://www.linkedin.com/in/matthias-von-deetzen/" aria-label="LinkedIn" rel="noreferrer">
            <LinkedInIcon size={30} color={theme.palette.text.disabled} />
          </IconButton>
          <IconButton target="_blank" href="https://github.com/deetzen" aria-label="GitHub" rel="noreferrer">
            <GithubIcon size={30} color={theme.palette.text.disabled} />
          </IconButton>
        </Grid>
      </Grid>
      <Badges />
      <Tracking />
    </MuiThemeProvider>
  );
}

export default App;
