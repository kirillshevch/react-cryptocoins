import React from 'react';
import PropTypes from 'prop-types';

const DaoAlt = props => {
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
      <path d="M79.5 157.1h36.3c19.5 0 37.6-10.1 37.6-43.7 0-33.5-22.2-44.4-37-44.4h-37v40.6h-8.5v7.4h8.5v40.1zM90.9 117h22.5v-7.4H90.9V80h25.3c10.1 0 25.3 8.1 25.3 33.3 0 25.2-12.4 32.8-25.7 32.8H90.9V117z" />
      <path d="M113.4 0C50.8 0 0 50.8 0 113.4 0 176 50.8 226.8 113.4 226.8S226.8 176 226.8 113.4C226.8 50.8 176 0 113.4 0zM170 170H56.8V56.8H170V170z" />
    </svg>
  );
};

DaoAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

DaoAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default DaoAlt;
