import React from 'react';
import PropTypes from 'prop-types';

const Gnt = props => {
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
      <path d="M160.287 60.688c0-10.771-3.717-20.67-9.904-28.448l24.89-24.89-7.35-7.35-24.905 24.905c-7.505-5.923-16.908-9.46-27.111-9.46-24.471 0-44.38 20.296-44.38 45.243 0 23.154 17.153 42.289 39.183 44.923v31.024c-22.03 2.633-39.183 21.769-39.183 44.923 0 24.947 19.909 45.243 44.38 45.243s44.38-20.296 44.38-45.243c0-23.154-17.153-42.289-39.183-44.923v-31.024c22.03-2.633 39.183-21.769 39.183-44.923zm-78.366 0c0-19.216 15.246-34.849 33.986-34.849s33.986 15.633 33.986 34.849-15.246 34.849-33.986 34.849-33.986-15.633-33.986-34.849zm67.972 120.869c0 19.216-15.246 34.849-33.986 34.849s-33.986-15.633-33.986-34.849 15.246-34.849 33.986-34.849 33.986 15.633 33.986 34.849z" />
    </svg>
  );
};

Gnt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Gnt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Gnt;
