import React from 'react';
import PropTypes from 'prop-types';

const DogeAlt = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 226.777 226.777"
      fill={color}
      {...otherProps}
    >
      <path d="M99.24-.054H34.058v100.975H7.287v24.732h26.772v100.975h75.95s106.792 8.947 106.792-111.45C216.801-3.256 114.663-.054 99.24-.054zm9.022 184.779H76.834v-59.071h47.141v-24.732H76.834V41.849h29.972c11.204 0 67.582 4.509 67.668 74.148.088 69.638-58.139 68.728-66.212 68.728z" />
    </svg>
  );
};

DogeAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

DogeAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default DogeAlt;
