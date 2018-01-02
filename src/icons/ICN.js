import React from 'react';
import PropTypes from 'prop-types';

const Icn = props => {
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
      <path d="M181.44 0h34.02v226.8h-34.02zm-56.7 113.4h34.02v113.4h-34.02zm-56.7-56.7h34.02v170.1H68.04zm-56.7 113.4h34.02v56.7H11.34z" />
    </svg>
  );
};

Icn.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Icn.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Icn;
