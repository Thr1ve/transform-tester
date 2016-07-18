import React, { PropTypes } from 'react';

import styles from './styles.css';

const TransformBox = ({
  perspective, transition,
  tx, ty, tz, rx, ry, rz,
  scx, scy, scz, skx, sky, matrix
}) => (
  <div
    className={styles.transformBox}
    style={{
      transition: `${transition ? 'all 1.0s' : 'none'}`,
      transform: `matrix3d(${matrix})`
    }}
  >
    <div>translateX: {tx} </div>
    <div>translateY: {ty} </div>
    <div>translateZ: {tz} </div>
    <div>rotateX: {rx} </div>
    <div>rotateY: {ry} </div>
    <div>rotateY: {rz} </div>
    <div>ScaleX: {scx} </div>
    <div>ScaleY: {scy} </div>
    <div>ScaleY: {scz} </div>
    <div>SkewX: {skx} </div>
    <div>SkewY: {sky} </div>
    <div>perspective: {perspective} </div>
  </div>
);

export default TransformBox;

TransformBox.propTypes = {
  perspective: PropTypes.number,
  transition: PropTypes.bool,
  tx: PropTypes.number,
  ty: PropTypes.number,
  tz: PropTypes.number,
  rx: PropTypes.number,
  ry: PropTypes.number,
  rz: PropTypes.number,
  scx: PropTypes.number,
  scy: PropTypes.number,
  scz: PropTypes.number,
  skx: PropTypes.number,
  sky: PropTypes.number,
  matrix: PropTypes.array
};
