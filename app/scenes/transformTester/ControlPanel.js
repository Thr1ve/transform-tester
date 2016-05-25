import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Slider, { StandardSlider, DegreesSlider } from './components/Slider';
import TransformBox from './components/TransformBox';

import { updateMoveBoxState, setMoveBoxState, addSnapshot } from './services';

import styles from './styles.css';

const defaultState = {
  tx: 0, ty: 0, tz: 0,
  rx: 0, ry: 0, rz: 0,
  scx: 1, scy: 1, scz: 1,
  skx: 0, sky: 0,
  perspective: 1000,
};

const Controller = React.createClass({
  propTypes: {
    snapShot: PropTypes.func
  },

  getInitialState() {
    return defaultState;
  },

  reset() {
    this.props.dispatch(setMoveBoxState(defaultState));
  },

  sendState(e) {
    e.preventDefault();
    // this.props.snapShot({ ...this.state });
  },

  createDispatcher(key) {
    return (val) => {
      this.props.dispatch(updateMoveBoxState(key, val));
    }
  },

  addSnapshot() {
    this.props.dispatch(addSnapshot({ ...this.props.moveBox }));
  },

  render() {
    const {
      tx, ty, tz, rx, ry, rz,
      scx, scy, scz, skx, sky,
      perspective, transition
    } = this.props.moveBox;

    return (
      <div className={styles.container}>
        <div className={styles.content} style={{ perspective: `${this.state.perspective}px` }}>
          <TransformBox
            tx={tx} ty={ty} tz={tz}
            perspective={perspective}
            rx={rx} ry={ry} rz={rz}
            scx={scx} scy={scy} scz={scz}
            skx={skx} sky={sky} transition={transition}
          />
        </div>
        <div className={styles.controls}>
          <button onClick={this.reset}>Reset</button>
          <button onClick={this.addSnapshot}>SnapShot</button>
          <StandardSlider label="TransformX" onChange={this.createDispatcher('tx')} value={tx} />
          <StandardSlider label="TransformY" onChange={this.createDispatcher('ty')} value={ty} />
          <StandardSlider label="TransformZ" onChange={this.createDispatcher('tz')} value={tz} />
          <DegreesSlider label="RotateX" onChange={this.createDispatcher('rx')} value={rx} />
          <DegreesSlider label="RotateY" onChange={this.createDispatcher('ry')} value={ry} />
          <DegreesSlider label="RotateZ" onChange={this.createDispatcher('rz')} value={rz} />
          <StandardSlider label="ScaleX" onChange={this.createDispatcher('scx')} value={scx} />
          <StandardSlider label="ScaleY" onChange={this.createDispatcher('scy')} value={scy} />
          <StandardSlider label="ScaleZ" onChange={this.createDispatcher('scz')} value={scz} />
          <DegreesSlider label="SkewX" onChange={this.createDispatcher('skx')} value={skx} />
          <DegreesSlider label="SkewY" onChange={this.createDispatcher('skY')} value={sky} />
          <Slider
            label="Perspective" onChange={this.createDispatcher('perspective')}
            value={perspective} max={1000} min={0} step={10}
          />
        </div>
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    moveBox: state.transformTester.moveBox
  };
}

export default connect(mapStateToProps)(Controller);
