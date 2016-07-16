import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Slider, { StandardSlider, DegreesSlider } from '../../components/Slider';

import {
  updateMoveBoxState, setMoveBoxState,
  addSnapshot, disableTransition
} from '../../actions';

import styles from './styles.css';

const defaultState = {
  tx: 0, ty: 0, tz: 0,
  rx: 0, ry: 0, rz: 0,
  scx: 1, scy: 1, scz: 1,
  skx: 0, sky: 0,
  perspective: 1000,
};

const ControlPanel = ({ dispatch, moveBox }) => {
  const {
    tx, ty, tz, rx, ry, rz,
    scx, scy, scz, skx, sky,
    perspective
  } = moveBox;

  return (
    <div className={styles.controls}>
      <button onClick={reset}>Reset</button>
      <button onClick={saveSnapshot}>SnapShot</button>
      <StandardSlider label="TransformX" onChange={createDispatcher('tx')} value={tx} />
      <StandardSlider label="TransformY" onChange={createDispatcher('ty')} value={ty} />
      <StandardSlider label="TransformZ" onChange={createDispatcher('tz')} value={tz} />
      <DegreesSlider label="RotateX" onChange={createDispatcher('rx')} value={rx} />
      <DegreesSlider label="RotateY" onChange={createDispatcher('ry')} value={ry} />
      <DegreesSlider label="RotateZ" onChange={createDispatcher('rz')} value={rz} />
      <StandardSlider label="ScaleX" onChange={createDispatcher('scx')} value={scx} />
      <StandardSlider label="ScaleY" onChange={createDispatcher('scy')} value={scy} />
      <StandardSlider label="ScaleZ" onChange={createDispatcher('scz')} value={scz} />
      <DegreesSlider label="SkewX" onChange={createDispatcher('skx')} value={skx} />
      <DegreesSlider label="SkewY" onChange={createDispatcher('skY')} value={sky} />
      <Slider
        label="Perspective" onChange={createDispatcher('perspective')}
        value={perspective} max={1000} min={0} step={10}
      />
    </div>
  );

  function reset() {
    dispatch(setMoveBoxState(defaultState));
  }

  function createDispatcher(key) {
    return (val) => {
      dispatch(disableTransition());
      dispatch(updateMoveBoxState(key, val));
    };
  }

  function saveSnapshot() {
    dispatch(addSnapshot({ ...moveBox }));
  }
};

ControlPanel.propTypes = {
  dispatch: PropTypes.func,
  moveBox: PropTypes.object
};

function mapStateToProps(state) {
  return {
    moveBox: state.transformTester.moveBox
  };
}

export default connect(mapStateToProps)(ControlPanel);
