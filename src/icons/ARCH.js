import React from 'react';
import PropTypes from 'prop-types';

const Arch = props => {
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
      <path d="M113.385 0C50.763 0 0 50.763 0 113.385S50.764 226.77 113.385 226.77 226.77 176.006 226.77 113.385 176.006 0 113.385 0zm11.256 158.821L92.318 99.729l-31.305 54.214h52.174l2.382 4.878h-63.46L115.568 52.66l59.092 106.161h-50.019z" />
    </svg>
  );
};

Arch.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Arch.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Arch;
