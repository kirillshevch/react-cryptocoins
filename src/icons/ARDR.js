import React from 'react';
import PropTypes from 'prop-types';

const Ardr = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 123.305 595.279 595.28"
      fill={color}
      {...otherProps}
    >
      <path d="M295.279 163.035L0 678.854h147.242L371.46 294.273zM157.723 678.854l196.13-114.191-75.379-93.308zm265.849-293.178l-141.395 77.061 177.104 215.997H595.28z" />
    </svg>
  );
};

Ardr.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Ardr.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Ardr;
