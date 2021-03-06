import React from 'react';
import PropTypes from 'prop-types';

const XzcAlt = props => {
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
      <title>ZCoin (XZC) Flat-alt</title>
      <path
        d="M125 250C55.964 250 0 194.036 0 125S55.964 0 125 0s125 55.964 125 125-55.964 125-125 125zm22.71-98.77h28.244v24.704h-84.86L196.438 70.5c3.435-3.438 4.453-8.659 2.671-13.116C197.201 52.93 192.875 50 187.913 50H62.087C55.344 50 50 55.348 50 62.097v89.134l52.29-52.335H74.046v-24.83h84.733L53.562 179.5c-3.435 3.438-4.453 8.659-2.671 13.116C52.799 197.07 57.125 200 62.087 200h125.826c6.616 0 12.087-5.348 12.087-12.097V98.896l-52.29 52.335z"
        fillRule="evenodd"
      />
    </svg>
  );
};

XzcAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

XzcAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default XzcAlt;
