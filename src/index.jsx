import React from 'react';
import ReactDOM from 'react-dom';

import ReactGA from 'react-ga';

import App from './components/App';

import * as serviceWorker from './serviceWorker';

ReactGA.initialize('UA-34470943-2');
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(<App />, document.getElementById('mvd'));

serviceWorker.register();
