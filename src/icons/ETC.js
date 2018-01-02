import React from 'react';
import PropTypes from 'prop-types';

const Etc = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 226.8 226.8"
      fill={color}
      {...otherProps}
    >
      <path d="M47.1 101.6L114 73.4l64.8 28.9L113.9 0 47.1 101.6zm.2 31.3l66.7 38.7 68.1-38.7-67.5 93.9-67.3-93.9z" />
      <path d="M114.3 87.2l-69.6 29.3 69.6 38.7 67.7-37.8-67.7-30.2z" />
    </svg>
  );
};

Etc.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Etc.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Etc;
