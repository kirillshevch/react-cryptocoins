import React from 'react';
import PropTypes from 'prop-types';

const ZecAlt = props => {
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
      <path d="M297.582 123.305C133.231 123.305 0 256.581 0 421.006c0 164.407 133.231 297.689 297.582 297.689 164.349 0 297.582-133.282 297.582-297.689 0-164.425-133.233-297.701-297.582-297.701zm104.83 224.116c-1.869 9.971-13.072 18.691-20.545 27.423-23.654 28.043-47.312 55.464-71.589 83.513-9.336 11.219-18.672 21.19-29.254 32.403h121.388v61.078h-74.701c1.245 17.454 1.866 33.655 3.111 51.109h-62.873v-50.482H193.25c0-19.948-2.487-39.888 1.246-58.584 1.867-9.977 13.072-18.702 19.918-27.425 23.654-28.047 47.309-55.47 71.586-83.511 9.338-10.595 18.677-20.565 29.258-32.411H198.851v-61.073h69.096v-51.105h60.384v49.857h75.322c.003 20.564 2.492 40.511-1.241 59.208z" />
    </svg>
  );
};

ZecAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ZecAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default ZecAlt;
