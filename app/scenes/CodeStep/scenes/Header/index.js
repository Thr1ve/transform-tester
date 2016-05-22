import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { nextStep, previousStep } from '../../services';

import styles from './styles.css';

const Header = ({ dispatch }) => {
  return (
    <div className={styles.header}>
      <div onClick={menu} className={styles.headerLeft}>
        menu
      </div>
      <div className={styles.headerRight}>
        <div onClick={previous}>
          previous
        </div>
        <div onClick={next}>
          next
        </div>
      </div>
    </div>
  );

  function menu() {
    // TODO: create menu and menuToggle
    // dispatch(menuToggle());
    console.log('there is no menu yet. Sorry!');
  }

  function next() {
    dispatch(nextStep());
  }

  function previous() {
    dispatch(previousStep());
  }
};

Header.propTypes = {
  dispatch: PropTypes.function
};


export default connect()(Header);
