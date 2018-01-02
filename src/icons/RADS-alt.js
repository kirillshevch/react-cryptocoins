import React from 'react';
import PropTypes from 'prop-types';

const RadsAlt = props => {
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
      <circle cx="146.51" cy="145.51" r="8.137" />
      <circle cx="82.29" cy="145.51" r="8.137" />
      <path d="M114.4 0C51.8 0 1 50.8 1 113.4s50.8 113.4 113.4 113.4S227.8 176 227.8 113.4 177 0 114.4 0zM82.29 54.3c14.906 0 26.99 12.084 26.99 26.99 0 14.906-12.084 26.99-26.99 26.99-14.906 0-26.99-12.084-26.99-26.99 0-14.906 12.084-26.99 26.99-26.99zm26.991 91.21c0 14.906-12.084 26.99-26.99 26.99-14.906 0-26.99-12.084-26.99-26.99 0-14.906 12.084-26.99 26.99-26.99 20.561 0 37.229-16.668 37.229-37.229 0-14.906 12.084-26.99 26.99-26.99 14.906 0 26.99 12.084 26.99 26.99 0 14.906-12.084 26.99-26.99 26.99-20.561 0-37.229 16.668-37.229 37.229zm37.229 26.99c-14.906 0-26.99-12.084-26.99-26.99 0-14.906 12.084-26.99 26.99-26.99 14.906 0 26.99 12.084 26.99 26.99 0 14.906-12.084 26.99-26.99 26.99z" />
      <circle cx="146.51" cy="81.29" r="8.137" />
      <circle cx="82.29" cy="81.29" r="8.137" />
    </svg>
  );
};

RadsAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

RadsAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default RadsAlt;
