import React from 'react';
import PropTypes from 'prop-types';

const NeosAlt = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 595.279 595.281"
      fill={color}
      {...otherProps}
    >
      <path d="M297.619.001C133.249.001 0 133.25 0 297.618 0 461.991 133.249 595.24 297.619 595.24c164.37 0 297.62-133.249 297.62-297.622C595.239 133.25 461.989.001 297.619.001zm30.4 161.702v26.361l-45.637-26.361h45.637zm-57.998 0l57.998 33.504v34.216l-117.129-67.72h59.131zm-78.458 270.975h-29.631V161.703h29.631v270.975zm35.815 0h-29.631V161.703l130.273 74.864v34.222l-100.642-58.146v220.035zm39.841 0v-26.361l45.634 26.361h-45.634zm57.998 0l-57.998-33.505v-34.217l117.129 67.722h-59.131zm72.272 0l-130.27-74.864v-34.228l100.642 58.151V161.703h29.628v270.975zm35.814 0h-29.628V161.703h29.628v270.975z" />
    </svg>
  );
};

NeosAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

NeosAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default NeosAlt;
