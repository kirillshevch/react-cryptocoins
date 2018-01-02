import React from 'react';
import PropTypes from 'prop-types';

const IncntAlt = props => {
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
      <path d="M113.4 0C50.8 0 0 50.8 0 113.4s50.8 113.4 113.4 113.4c62.6 0 113.4-50.8 113.4-113.4S176 0 113.4 0zm0 29.3l29.481 8.475-5.198 15.445-24.283-6.931-24.283 6.931-5.198-15.445L113.4 29.3zm0 168.2L69.133 65.969 113.4 53.244l44.267 12.726L113.4 197.5z" />
    </svg>
  );
};

IncntAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

IncntAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default IncntAlt;
