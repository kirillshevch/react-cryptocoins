import React from 'react';
import PropTypes from 'prop-types';

const MtrAlt = props => {
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
      <path d="M178.758 32.115l2.621 10.259L.023 121.48l2.052 6.612 150.808-46.444v113.014h22.91V74.591l12.083-3.722 3.079 10.945 36.133-43.544z" />
      <path d="M35.59 194.662H58.5v-74.894l-22.91 7.056zm39.095 0h22.912v-86.974l-22.912 7.058zm39.099 0h22.911V95.676l-22.911 7.057z" />
    </svg>
  );
};

MtrAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MtrAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default MtrAlt;
