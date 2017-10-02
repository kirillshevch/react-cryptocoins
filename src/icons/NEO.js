import React from 'react';
import PropTypes from 'prop-types';

const Neo = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 227 227"
      fill={color}
      {...otherProps}
    >
      <path d="M207.288 35.521L132.161 0 21.651 39.9l75.127 35.521 110.51-39.9zm-77.066 42.211v73.601l78.278 36.982V49.471l-78.278 28.261zM94.839 89.441V227L18.5 190.991V53.348" />
    </svg>
  );
};

Neo.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Neo.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Neo;
