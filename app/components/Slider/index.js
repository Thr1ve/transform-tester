import React, { PropTypes } from 'react';

import styles from './styles.css';

const Slider = ({ onChange, value, label = '', ...props }) =>
  <div className={styles.container}>
    <label className={styles.label}> {label}: {value}
      <input
        {...props}
        className={styles.slider}
        type="range"
        value={value}
        onChange={e => {
          onChange(e.target.value);
        }}
      />
    </label>
  </div>;

Slider.propTypes = {
  onChange: PropTypes.func,
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default Slider;

export const StandardSlider = ({ label, value, onChange, ...props }) =>
  <Slider
    label={label} value={value}
    onChange={onChange}
    max={1000} min={-1000} step={1}
    {...props}
  />;

StandardSlider.propTypes = {
  onChange: PropTypes.func,
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export const DegreesSlider = ({ label, onChange, value, ...props }) =>
  <Slider
    label={label} value={value}
    onChange={onChange}
    max={180} min={-180} step={1}
    {...props}
  />;

DegreesSlider.propTypes = {
  onChange: PropTypes.func,
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export const SmallSlider = ({ label, value, onChange, ...props }) =>
  <Slider
    label={label} value={value}
    onChange={onChange}
    max={10} min={0.1} step={0.1}
    {...props}
  />;

SmallSlider.propTypes = {
  onChange: PropTypes.func,
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};
