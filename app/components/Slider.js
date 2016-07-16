import React, { PropTypes } from 'react';

const Slider = ({ onChange, value, label = '', ...props }) =>
  <label> {label}
    <input
      {...props}
      type="range"
      value={value}
      onChange={e => {
        onChange(e.target.value);
      }}
    />
    {value}
  </label>;

Slider.propTypes = {
  onChange: PropTypes.func,
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default Slider;

export const StandardSlider = ({ label, value, onChange, ...props }) =>
  <Slider label={label} value={value} onChange={onChange} max={100} min={-100} step={1} {...props} />;

StandardSlider.propTypes = {
  onChange: PropTypes.func,
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export const DegreesSlider = ({ label, onChange, value, ...props }) =>
  <Slider label={label} value={value} onChange={onChange} max={180} min={-180} step={1} {...props} />;

DegreesSlider.propTypes = {
  onChange: PropTypes.func,
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};
