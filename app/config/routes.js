
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import TransformTester from '../scenes/TransformTester'; // eslint-disable-line

const App = React.createClass({
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
});

console.log(__DEV__);

const base = __DEV__ === 'ghpages' ? '/transform-tester/' : '/';

const Routes = (
  <Route path={base} component={App}>
    <IndexRoute component={TransformTester} />
  </Route>
);

export default Routes;
