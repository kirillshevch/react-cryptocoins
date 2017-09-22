import React from 'react';
import PropTypes from 'prop-types';

const Xcp = props => {
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
      <path d="M113.367.044C50.756.044 0 50.8 0 113.411c0 62.611 50.756 113.367 113.367 113.367 62.611 0 113.367-50.756 113.367-113.367C226.733 50.8 175.978.044 113.367.044zM184.63 126.48l-20.964 20.964h-19.911a4.086 4.086 0 0 0-4.083 4.081l-.008.007-.018 11.954a2.374 2.374 0 0 1-2.37 2.36h-15.187a2.375 2.375 0 0 1-2.375-2.375v-29.064l12.45-12.45h.009a2.366 2.366 0 0 1 3.337.04h.005l5.497 5.496h14.39l9.278-9.277v-12.185l-9.557-9.556h-12.8l-50.896 50.896H61.761L40.629 126.24V97.733l21.162-21.161h28.926l12.536 12.539v.004a2.36 2.36 0 0 1 .676 1.653c0 .655-.267 1.25-.695 1.679v.01l-10.641 10.611a2.361 2.361 0 0 1-1.778.814 2.362 2.362 0 0 1-1.714-.738l-6.647-6.623h-12.4l-9.475 9.474v11.983l9.445 9.444h13.142l50.896-50.896h29.325L184.63 97.77v28.71z" />
    </svg>
  );
};

Xcp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Xcp.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Xcp;
