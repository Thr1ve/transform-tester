import React from 'react';

import Card from '../../components/Card';
import Button from '../../components/Button';

import styles from './styles.css';

const SnapShots = ({ snapShots, createClickHandler }) =>
  <div className={styles.container}>
    <Card column width={'10vw'}>
      {
        snapShots.map((snapShot, i) =>
          <Button
            label={`Position ${i + 1}`}
            key={i}
            onClick={createClickHandler({ ...snapShot })}
          />
        )
      }
    </Card>
  </div>;

export default SnapShots;
