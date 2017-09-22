import React from 'react';
import PropTypes from 'prop-types';

const Game = props => {
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
      <path d="M298.554 125.132C134.678 125.132 1.829 257.98 1.829 421.86s132.848 296.726 296.725 296.726H595.28V421.86c0-163.88-132.849-296.728-296.726-296.728zm221.32 517.889h-54.71v-78.737c-40.464 47.277-100.507 77.331-167.471 77.331-121.561 0-220.457-98.898-220.457-220.459s98.896-220.459 220.457-220.459c109.17 0 200.011 79.78 217.405 184.089h-55.725c-16.63-73.953-82.784-129.379-161.681-129.379-91.393 0-165.747 74.354-165.747 165.749 0 91.393 74.354 165.749 165.747 165.749 61.165 0 114.659-33.33 143.381-82.752h-114.78v-54.71h193.581v193.578z" />
    </svg>
  );
};

Game.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Game.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Game;
