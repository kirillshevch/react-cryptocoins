import React from 'react';
import PropTypes from 'prop-types';

const Bsd = props => {
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
      <path
        class="st0"
        d="M78.2 80.9V25.4L0 109.1h226.8V80.9zM0 145.9h148.6v55.5l78.2-83.8H0z"
      />
    </svg>
  );
};

Bsd.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Bsd.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Bsd;
