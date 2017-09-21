import React from 'react';
import PropTypes from 'prop-types';

const Swift = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 226.8 226.8"
      width={size}
      height={size}
      fill={color}
      {...otherProps}
    >
      <path
        className="st0"
        d="M112.1 0L66.7 26.2l45.4 26.2zM61.8 81.5V29L16.4 55.2zM61.8 139.8V87.4l-45.4 26.2zM162.5 139.8V87.4l-45.4 26.2zM61.8 198.1v-52.4l-45.4 26.2zM14.9 116.5v52.4l45.4-26.2zM14.9 58.2v52.4l45.4-26.2zM65.3 29v52.5l45.4-26.3zM112.1 226.8v-52.4l-45.4 26.2zM65.3 145.3v52.4l45.4-26.2zM115.7 0v52.4l45.4-26.2zM166 29v52.5l45.3-26.3zM166 87.4v52.4l45.3-26.2zM166 198.1l45.3-26.2-45.3-26.2zM212.9 168.9v-52.4l-45.4 26.2zM167.5 84.4l45.4 26.2V58.2zM162.5 81.5V29l-45.4 26.2zM115.7 226.8l45.4-26.2-45.4-26.2zM162.5 197.7v-52.4l-45.4 26.2z"
      />
    </svg>
  );
};

Swift.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Swift.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Swift;
