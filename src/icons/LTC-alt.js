import React from 'react';
import PropTypes from 'prop-types';

const LtcAlt = props => {
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
      <path d="M94.718 184.145l12.778-60.835 64.578-44.271 7.57-36.156-64.591 44.452L133.398 0h-49.61L57.142 127.189l-27.167 18.698-6.308 34.894 25.972-17.806-13.358 63.768h158.917l8.829-42.598z" />
    </svg>
  );
};

LtcAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

LtcAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default LtcAlt;
