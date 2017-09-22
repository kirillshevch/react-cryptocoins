import React from 'react';
import PropTypes from 'prop-types';

const IcnAlt = props => {
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
      <path d="M113.4 0C50.8 0 0 50.8 0 113.4s50.8 113.4 113.4 113.4S226.8 176 226.8 113.4 176 0 113.4 0zM77.815 172.709H60.022v-29.654h17.793v29.654zm29.654 0H89.676V83.746h17.793v88.963zm29.655 0h-17.793V113.4h17.793v59.309zm29.654 0h-17.793V54.091h17.793v118.618z" />
    </svg>
  );
};

IcnAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

IcnAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default IcnAlt;
