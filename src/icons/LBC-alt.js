import React from 'react';
import PropTypes from 'prop-types';

const LbcAlt = props => {
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
      <path d="M113.4 0C50.8 0 0 50.8 0 113.4 0 176 50.8 226.8 113.4 226.8c62.6 0 113.4-50.8 113.4-113.4C226.8 50.8 176 0 113.4 0zm73.3 133.1L180 132l1-6.1-69.6 42.9L37.3 132v-26.4l77.5-47.7 70.6 34v9.3l-74 45.4-51.3-25v-7.5l50.9 24.8 67.6-41.5v-1.2l-63.4-30.5-71.1 43.8v18.4l67 33.3 65.3-40.3-4.7-.9 1.3-6.7 16.6 3.1-2.9 16.7z" />
    </svg>
  );
};

LbcAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

LbcAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default LbcAlt;
