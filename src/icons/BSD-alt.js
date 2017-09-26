import React from 'react';
import PropTypes from 'prop-types';

const BsdAlt = props => {
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
      <path
        class="st0"
        d="M113.4 0C50.8 0 0 50.8 0 113.4 0 176 50.8 226.8 113.4 226.8S226.8 176 226.8 113.4C226.8 50.8 176 0 113.4 0zm22 169.6v-34.7h-93v-17.7h142l-49 52.4zm49-60h-142l48.9-52.4v34.7h93v17.7z"
      />
    </svg>
  );
};

BsdAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BsdAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default BsdAlt;
