import React from 'react';
import PropTypes from 'prop-types';

const VtcAlt = props => {
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
      <path d="M215.439 31.87c-7.453-9.837-16.496-18.284-16.496-18.284L80.594 182.888l20.103 26.661s2.982 3.642 7.554 3.642c4.57 0 6.822-3.444 6.822-3.444L227.166 51.348s-4.274-9.64-11.727-19.478zM77.071 178.217l27.88-39.893-31.215-40.669H16.695l-.295.33zm-64.449-76.001L0 116.337h23.268z" />
    </svg>
  );
};

VtcAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

VtcAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default VtcAlt;
