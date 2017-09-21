import React from 'react';
import PropTypes from 'prop-types';

const ArchAlt = props => {
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
      <path d="M117.539 15.073L0 211.704h117.539l-4.412-9.033H16.492l57.982-100.418 59.87 109.451h92.644z" />
    </svg>
  );
};

ArchAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArchAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default ArchAlt;
