import React from 'react';
import PropTypes from 'prop-types';

const Mco = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="-15 0 227 227"
      fill={color}
      {...otherProps}
    >
      <path d="M98.182 0L0 56.75v113.5L98.182 227 197 170.25V56.75L98.182 0zm89.777 165.039l-89.777 51.793-89.968-51.793V61.453l89.968-51.73 89.777 51.73v103.586z" />
      <path d="M72.968 116.678l-22.986-14.616-25.978 19.319 35.465 61.515h14.135l16.746-15.632v-7.754l-17.382-16.65zm50.428 0v26.182l-17.319 16.586.064 7.881 16.745 15.379h13.944l35.211-61.325-25.915-19.511zm-73.095-28.09l95.825.064-9.359-39.464H59.215z" />
      <path d="M115.055 116.678l8.277-22.052H73.031l8.469 22.052-2.61 24.593 38.584-.063z" />
    </svg>
  );
};

Mco.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Mco.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Mco;
