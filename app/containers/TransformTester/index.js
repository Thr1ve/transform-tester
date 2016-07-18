import React from 'react';
import { connect } from 'react-redux';

import styles from './styles.css';

import { setMoveBoxState, enableTransition } from '../../actions';

import ControlPanel from '../ControlPanel';
import SnapShots from '../SnapShots';
import ViewWindow from '../ViewWindow';

const TransformTester = ({ dispatch, snapShots }) => {
  return (
    <div className={styles.container}>
      <ViewWindow />
      <ControlPanel />
      <SnapShots snapShots={snapShots} createClickHandler={createGoTo} />
    </div>
  );

  function createGoTo(snapShot) {
    return () => {
      dispatch(enableTransition());
      dispatch(setMoveBoxState(snapShot.matrix));
    };
  }
};

function mapStateToProps(state) {
  return {
    snapShots: state.transformTester.snapShots,
  };
}

export default connect(mapStateToProps)(TransformTester);
