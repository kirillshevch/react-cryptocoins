import React from 'react';
import PropTypes from 'prop-types';

const DashAlt = props => {
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
      <path d="M92.683 97.738H10.195L.65 128.765h82.488z" />
      <path d="M223.896 57.882c-4.539-8.829-13.874-12.097-20.937-12.097H48.831l-10.426 33.79h138.119l-20.803 67.626H16.501l-10.427 33.79h148.032c14.464 0 18.33-2.531 28.673-8.586s18.414-16.649 22.789-29.262c4.376-12.613 15.05-48.181 18.328-60.037 3.281-11.855 4.541-16.395 0-25.224z" />
    </svg>
  );
};

DashAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

DashAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default DashAlt;
