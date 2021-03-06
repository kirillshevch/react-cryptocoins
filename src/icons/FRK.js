import React from 'react';
import PropTypes from 'prop-types';

const Frk = props => {
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
      <path d="M83.948 173.413v-15.165H68.557v-16.295h15.391V52.32h86.917v23.993h-62.697v27.161h46.626v16.296h-46.626v22.184h15.166v16.295h-15.166v15.165H209.62c10.882-17.405 17.176-37.975 17.176-60.014C226.796 50.769 176.027 0 113.399 0S0 50.769 0 113.399c0 22.04 6.296 42.609 17.176 60.014h66.772zm-52.526 18.334c20.646 21.596 49.739 35.049 81.978 35.049 32.235 0 61.328-13.453 81.975-35.049H31.422z" />
    </svg>
  );
};

Frk.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Frk.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Frk;
