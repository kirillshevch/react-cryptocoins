import React from 'react';
import PropTypes from 'prop-types';

const Bat = props => {
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
      <path d="M107.193 12.925L0 198.589l66.577-38.438 40.616-70.35zm47.073 158.121H72.533L5.955 209.484h214.886zm-34.659-81.241l40.615 70.346 66.578 38.44L119.607 12.928z" />
    </svg>
  );
};

Bat.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Bat.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Bat;
