import React from 'react';
import { connect } from 'react-redux';
import { thunk } from 'lib';

// import styles from './styles.css';

import { setMoveBoxState, transitionMoveBox } from './services';

import ControlPanel from './ControlPanel';

const TransformTester = React.createClass({
  getInitialState() {
    return {
      snapShots: []
    };
  },

  snapShot(boxState) {
    this.setState({
      snapShots: this.state.snapShots.concat(boxState)
    });
  },

  createGoTo(matrix) {
    return () => {
      this.props.dispatch(transitionMoveBox(matrix, 200));
    };
  },

  render() {
    return (
      <div>
        <div style={{ position: 'fixed', left: 0, top: 0, height: '15vh', width: '15vw' }}>
          {
            this.props.snapShots.map((snapShot, i) =>
              <div
                key={i}
                onClick={this.createGoTo({ ...snapShot, transition: true })}
                style={{ width: '50px', height: '50px', background: 'grey' }}
              >
                {i}
              </div>)
          }
        </div>
        <ControlPanel snapShot={this.snapShot} />
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    snapShots: state.transformTester.snapShots
  };
}

export default connect(mapStateToProps)(TransformTester);
