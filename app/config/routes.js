/* global __DEV__ */

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import TransformTester from '../containers/TransformTester';

const App = React.createClass({
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
});

const base = __DEV__ === 'ghpages' ? '/transform-tester/' : '/';

const Routes = (
  <Route path={base} component={App}>
    <IndexRoute component={TransformTester} />
  </Route>
);

export default Routes;
