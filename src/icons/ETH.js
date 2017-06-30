import React from 'react';
import PropTypes from 'prop-types';

const Eth = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="226.777"
      height="226.777"
      viewBox="0 0 226.777 226.777"
      {...otherProps}
    >
      <path d="M112.553 157V86.977l-68.395 29.96zm0-74.837V-.056L46.362 111.156zM116.962-.09v82.253l67.121 29.403zm0 87.067v70.025l68.443-40.045zm-4.409 140.429v-56.321L44.618 131.31zm4.409 0l67.935-96.096-67.935 39.775z" />
    </svg>
  );
};

Eth.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Eth.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Eth;