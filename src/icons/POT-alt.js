import React from 'react';
import PropTypes from 'prop-types';

const PotAlt = props => {
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
      <path d="M128.394.015H46.13l-11.131 57.2H11.212L6.07 84.422h23.633L2 226.777h40.489l15.858-82.157h60.407c29.135 0 96.617-5.73 105.019-74.887C231.619 5.144 183.399.015 128.394.015zm54.201 66.411c-2.785 24.423-24.423 39.848-47.774 39.848H65.75l4.217-21.852h57.357l5.142-27.208H75.22l3.474-17.996h64.912c17.78.001 41.775 2.786 38.989 27.208z" />
    </svg>
  );
};

PotAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

PotAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default PotAlt;
