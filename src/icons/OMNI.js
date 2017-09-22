import React from 'react';
import PropTypes from 'prop-types';

const Omni = props => {
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
      <path d="M46.087 10.065H9.916v36.248a123.934 123.934 0 0 1 36.171-36.248zm170.135 35.277V10.065h-35.533a123.925 123.925 0 0 1 35.533 35.277zM181.21 216.37h35.013v-34.935a123.969 123.969 0 0 1-35.013 34.935zM9.916 180.465v35.905h35.652a123.933 123.933 0 0 1-35.652-35.905z" />
      <path d="M226.777 113.389C226.777 50.866 175.911 0 113.388 0S-.001 50.866-.001 113.389c0 62.523 50.867 113.388 113.389 113.388s113.389-50.865 113.389-113.388zm-113.389 82.682c-45.592 0-82.683-37.092-82.683-82.682 0-45.592 37.091-82.684 82.683-82.684 45.591 0 82.683 37.092 82.683 82.684 0 45.59-37.092 82.682-82.683 82.682z" />
    </svg>
  );
};

Omni.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Omni.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Omni;
