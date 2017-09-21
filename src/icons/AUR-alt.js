import React from 'react';
import PropTypes from 'prop-types';

const AurAlt = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 123.305 595.279 595.28"
      fill={color}
      {...otherProps}
    >
      <path d="M297.592 123.305C133.235 123.305 0 256.429 0 420.665c0 164.221 133.235 297.35 297.591 297.35 164.353 0 297.591-133.129 297.591-297.35.001-164.236-133.237-297.36-297.59-297.36zm75.918 237.037l20.552 39.388-137.675 71.821v114.876h-44.421V264.385h44.421v50.337l117.124-61.097 20.552 39.382-137.675 71.825v56.609l117.122-61.099z" />
    </svg>
  );
};

AurAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

AurAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default AurAlt;
