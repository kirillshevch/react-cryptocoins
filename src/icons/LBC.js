import React from 'react';
import PropTypes from 'prop-types';

const Lbc = props => {
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
      <path d="M202 113.2l-1.8 10 7 1.3-97.2 60-99.9-49.6v-27.4l106.1-65.3 94.5 45.5v1.8L110 151.3l-75.9-36.9v11.2l76.4 37.2 110.3-67.7V81.3L115.6 30.7 0 101.8v39.4L110.5 196l103.7-64-1.4 9.1 9.9 1.6 4.1-24.8z" />
    </svg>
  );
};

Lbc.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Lbc.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Lbc;
