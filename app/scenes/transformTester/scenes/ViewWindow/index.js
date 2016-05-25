import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import TransformBox from '../../components/TransformBox';

import styles from './styles.css';


const ViewWindow = ({ moveBox }) => {
  const { perspective } = moveBox;
  return (
    <div className={styles.viewWindowContainer} style={{ perspective: `${perspective}px` }}>
      <TransformBox {...moveBox} />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    moveBox: state.transformTester.moveBox
  };
}

export default connect(mapStateToProps)(ViewWindow);
