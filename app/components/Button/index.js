import React, { PropTypes } from 'react';

import styles from './styes.css';

const Button = ({ label, onClick }) =>
  <button className={styles.button} onClick={onClick}>
    {label}
  </button>;


Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
