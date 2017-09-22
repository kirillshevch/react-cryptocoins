import React from 'react';
import PropTypes from 'prop-types';

const FrkAlt = props => {
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
      <path d="M92.525 226.777v-35.311h27.41V162.01h-27.41v-40.094h84.277V92.459H92.525V43.366h113.322V0H48.748v162.01H20.93v29.456h27.818v35.311z" />
    </svg>
  );
};

FrkAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

FrkAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default FrkAlt;
