import React, { PropTypes } from 'react';

import styles from './styles.css';

const Card = ({ children, column = false }) =>
  <div
    className={styles.card}
    style={{ flexDirection: `${column ? 'column' : 'row'}` }}
  >
    {children}
  </div>;

Card.propTypes = {
  column: PropTypes.bool,
  children: PropTypes.array
};

export default Card;
