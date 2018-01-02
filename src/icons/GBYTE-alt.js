import React from 'react';
import PropTypes from 'prop-types';

const GbyteAlt = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 250 250"
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      {...otherProps}
    >
      <path
        d="M125 250C55.964 250 0 194.036 0 125S55.964 0 125 0s125 55.964 125 125-55.964 125-125 125zm0-50c41.421 0 75-33.579 75-75s-33.579-75-75-75-75 33.579-75 75 33.579 75 75 75zm0-12c-34.794 0-63-28.206-63-63s28.206-63 63-63 63 28.206 63 63-28.206 63-63 63z"
        fillRule="evenodd"
      />
    </svg>
  );
};

GbyteAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

GbyteAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default GbyteAlt;
