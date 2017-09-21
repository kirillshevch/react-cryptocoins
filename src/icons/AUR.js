import React from 'react';
import PropTypes from 'prop-types';

const Aur = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 123.305 595.279 595.28"
      fill={color}
      {...otherProps}
    >
      <path d="M423.467 315.074L214.422 424.12V323.085l245.717-128.186-36.672-70.295-209.045 109.047v-89.85h-79.281v574.784h79.281V513.558l245.717-128.192z" />
    </svg>
  );
};

Aur.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Aur.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Aur;
