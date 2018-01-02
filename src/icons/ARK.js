import React from 'react';
import PropTypes from 'prop-types';

const Ark = props => {
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
      <path d="M124.956 99.113L13 213.916 125.458 36 238 215 124.956 99.113zm16.245 45.604h-35.003l18-19.258 17.003 19.42v-.162zM73.708 176.31l-.003-.246 19.845-19.76v-.082l60.546-.254 20.431 20.342H73.709z" />
    </svg>
  );
};

Ark.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Ark.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Ark;
