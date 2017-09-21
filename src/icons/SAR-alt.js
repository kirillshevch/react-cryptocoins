import React from 'react';
import PropTypes from 'prop-types';

const SarAlt = props => {
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
      <path d="M113.439 0C50.788 0 0 50.789 0 113.438c0 62.65 50.788 113.438 113.439 113.438 62.649 0 113.438-50.788 113.438-113.438C226.877 50.789 176.088 0 113.439 0zm0 191.552l-51.45-137.8 32.09 32.63 19.36-32.63 19.361 32.63 32.09-32.63-51.451 137.8z" />
    </svg>
  );
};

SarAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SarAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default SarAlt;
