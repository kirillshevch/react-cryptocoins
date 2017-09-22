import React from 'react';
import PropTypes from 'prop-types';

const Ubq = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 226.8 226.8"
      width={size}
      height={size}
      fill={color}
      {...otherProps}
    >
      <path d="M120.246 0L15.047 59.321v91.212l105.199-60.808zM83.291 191.905v-69.789l-58.996 34.231zM106.554 137.075V226.8l105.199-59.321V76.267zM143.509 34.895v69.789l58.996-34.231z" />
    </svg>
  );
};

Ubq.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Ubq.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Ubq;
