import React from 'react';
import PropTypes from 'prop-types';

const VrcAlt = props => {
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
      <path d="M167.272 2.863l-53.384 111.909L59.315 2.863H0l113.49 221.052L226.984 2.863z" />
      <path d="M113.49 63.762c9.934 0 17.993-8.058 17.993-17.994s-8.059-17.994-17.993-17.994c-9.935 0-17.99 8.058-17.99 17.994s8.055 17.994 17.99 17.994zm81.524 49.626c-9.934 0-17.994 8.057-17.994 17.99 0 9.938 8.061 17.995 17.994 17.995 9.938 0 17.991-8.057 17.991-17.995.001-9.933-8.053-17.99-17.991-17.99z" />
    </svg>
  );
};

VrcAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

VrcAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default VrcAlt;
