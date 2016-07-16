import React from 'react';

import styles from './styles.css';

const SnapShots = ({ snapShots, createClickHandler }) => (
  <div className={styles.container}>
    {
      snapShots.map((snapShot, i) =>
        <div
          key={i}
          onClick={createClickHandler({ ...snapShot })}
          className={styles.snapShot}
        >
          {`Snapshot ${i + 1}`}
        </div>)
    }
  </div>
);

export default SnapShots;
