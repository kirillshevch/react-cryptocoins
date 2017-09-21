import React from 'react';
import PropTypes from 'prop-types';

const XpmAlt = props => {
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
      <path d="M12.874 0h43.405v94.721c0 39.543 34.764 39.176 34.764 39.176V0h43.589v133.896s35.864 2.022 35.864-39.727V0h43.407v95.271c0 55.729-43.038 74.673-79.271 74.673v14.531h27.956v19.679h-27.956v22.623H90.919v-22.623H64.188v-19.679h26.668V169.76c-11.584 0-77.982-2.759-77.982-78.535V0z" />
    </svg>
  );
};

XpmAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

XpmAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default XpmAlt;
