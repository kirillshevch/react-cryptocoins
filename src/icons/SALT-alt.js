import React from 'react';
import PropTypes from 'prop-types';

const SaltAlt = props => {
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
        d="M125 250C55.964 250 0 194.036 0 125S55.964 0 125 0s125 55.964 125 125-55.964 125-125 125zm.5-200L55 200h141L125.5 50zm0 41l43.5 92H82l43.5-92z"
        fillRule="evenodd"
      />
    </svg>
  );
};

SaltAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SaltAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default SaltAlt;
