import React from 'react';
import PropTypes from 'prop-types';

const Sls = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 226.8 226.8"
      {...otherProps}
    >
      <path
        class="st0"
        d="M120.4 226.6c8.2-3.4 15.9-8 21.3-14.1 17-19.5 23.8-54.9-4-75-14.4-10.4-33.7-15.1-54.2-24.7s-32.2-25-35.6-45.5C45.1 50.4 46.2 27.8 69.1 9 28.5 26.2 0 66.5 0 113.4 0 176 50.8 226.8 113.4 226.8c2.4 0 4.7-.1 7-.2z"
      />
      <path
        class="st0"
        d="M164.1 11.9l4 43.6-6.6 1.9s-8.7-30.7-27-42-52.1-11.6-62 13.2c-9.9 24.8 1.8 50.5 38.4 60.5s70.3 22.1 67.9 74.7c-1.8 39.4-24.5 53.5-40.3 60.1 50.6-11.4 88.4-56.6 88.4-110.6-.1-44.3-25.6-82.8-62.8-101.4z"
      />
    </svg>
  );
};

Sls.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Sls.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Sls;