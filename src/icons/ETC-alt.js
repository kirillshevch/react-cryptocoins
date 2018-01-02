import React from 'react';
import PropTypes from 'prop-types';

const EtcAlt = props => {
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
      <path d="M113.4 0C50.8 0 0 50.8 0 113.4 0 176 50.8 226.8 113.4 226.8S226.8 176 226.8 113.4C226.8 50.8 176 0 113.4 0zm.3 38.2l43 67.8-43-19.2-44.3 18.7 44.3-67.3zM114 96l44.9 20-44.9 25.1-46.2-25.6L114 96zm.2 92.6l-44.7-62.3 44.3 25.6 45.1-25.6-44.7 62.3z" />
    </svg>
  );
};

EtcAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

EtcAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default EtcAlt;
