import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Slider, {
  StandardSlider, DegreesSlider, SmallSlider
} from '../../components/Slider';

import Card from '../../components/Card';
import Button from '../../components/Button';

import {
  updateMoveBoxState, addSnapshot,
  disableTransition, enableTransition,
  reset
} from '../../actions';

import styles from './styles.css';

const ControlPanel = ({ dispatch, moveBox }) => {
  const {
    tx, ty, tz, rx, ry, rz,
    scx, scy, scz, skx, sky,
    perspective
  } = moveBox;

  return (
    <div className={styles.controls}>
      <Card>
        <Button label="SnapShot" onClick={saveSnapshot} />
        <Button label="Reset" onClick={resetMoveBox} />
      </Card>
      <Card column >
        <StandardSlider label="TransformX" onChange={createDispatcher('tx')} value={tx} />
        <StandardSlider label="TransformY" onChange={createDispatcher('ty')} value={ty} />
        <StandardSlider label="TransformZ" onChange={createDispatcher('tz')} value={tz} />
      </Card>
      <Card column >
        <DegreesSlider label="RotateX" onChange={createDispatcher('rx')} value={rx} />
        <DegreesSlider label="RotateY" onChange={createDispatcher('ry')} value={ry} />
        <DegreesSlider label="RotateZ" onChange={createDispatcher('rz')} value={rz} />
      </Card>
      <Card column >
        <SmallSlider label="ScaleX" onChange={createDispatcher('scx')} value={scx} />
        <SmallSlider label="ScaleY" onChange={createDispatcher('scy')} value={scy} />
        <SmallSlider label="ScaleZ" onChange={createDispatcher('scz')} value={scz} />
        <DegreesSlider label="SkewX" onChange={createDispatcher('skx')} value={skx} />
        <DegreesSlider label="SkewY" onChange={createDispatcher('sky')} value={sky} />
        <Slider
          label="Perspective" onChange={createDispatcher('perspective')}
          value={perspective} max={1000} min={0} step={10}
        />
      </Card>
    </div>
  );

  function resetMoveBox() {
    dispatch(enableTransition());
    dispatch(reset());
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
