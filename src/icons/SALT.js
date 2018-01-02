import React from 'react';
import PropTypes from 'prop-types';

const Salt = props => {
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
        d="M125 13l106 225H19L125 13zm0 61.5l-65.404 138h130.808L125 74.5z"
        fillRule="evenodd"
      />
    </svg>
  );
};

Salt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Salt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Salt;
