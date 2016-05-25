import React from 'react';
import { connect } from 'react-redux';

import styles from './styles.css';

import { transitionMoveBox, enableTransition } from './services';

import ControlPanel from './scenes/ControlPanel';
import TransformBox from './components/TransformBox';
import SnapShots from './scenes/SnapShots';
import ViewWindow from './scenes/ViewWindow';

const TransformTester = ({ dispatch, snapShots }) => {
  return (
    <div className={styles.container}>
      <ViewWindow />
      <ControlPanel />
      <SnapShots snapShots={snapShots} createClickHandler={createGoTo} />
    </div>
  );

  function createGoTo(matrix) {
    return () => {
      dispatch(enableTransition());
      dispatch(transitionMoveBox(matrix));
    };
  }
};

function mapStateToProps(state) {
  return {
    snapShots: state.transformTester.snapShots,
  };
}

export default connect(mapStateToProps)(TransformTester);
