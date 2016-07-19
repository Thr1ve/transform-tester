// from:
// https://github.com/reactjs/redux/blob/master/examples/real-world/index.js
// https://github.com/reactjs/redux/pull/1455/files

import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import configureStore from './config/configureStore';

import { isSafari } from './lib/is';

if (isSafari) {
  // TODO: Safari does not have movementX or movementY properties for mousemove events; compute manually?
  // TODO: Safari can't seem to use flexbox correctly. Find out why
  document.write('Please use Chrome or Firefox');
} else {
  const store = configureStore();

  const rootEl = document.getElementById('root');
  let render = () => {
    // https://github.com/reactjs/redux/pull/1455/files#r54380102
    const Root = require('./Root').default;
    ReactDOM.render(
      <Root store={store} history={browserHistory} />,
     rootEl
    );
  };

  if (module.hot) {
    // Support hot reloading of components
    // and display an overlay for runtime errors
    const renderApp = render;
    const renderError = (error) => {
      const RedBox = require('redbox-react');
      ReactDOM.render(
        <RedBox error={error} />,
       rootEl
      );
    };

    render = () => {
      try {
        renderApp();
      } catch (error) {
        renderError(error);
      }
    };

    module.hot.accept('./Root', () => {
      // https://github.com/reactjs/redux/pull/1455/files#r55138543
      setTimeout(render);
    });
  }

  render();
}
