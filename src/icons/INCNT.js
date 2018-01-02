import React from 'react';
import PropTypes from 'prop-types';

const Incnt = props => {
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
      <path d="M113.4 32.286L53.711 49.445 113.4 226.8l59.689-177.355zm0-9.379l32.743 9.346 7.009-20.825L113.4 0 73.648 11.428l7.009 20.826z" />
    </svg>
  );
};

Incnt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Incnt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Incnt;
