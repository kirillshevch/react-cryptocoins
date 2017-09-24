'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Game = function Game(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ['color', 'size']);

  return _react2.default.createElement(
    'svg',
    _extends({
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 123.305 595.279 595.28',
      fill: color
    }, otherProps),
    _react2.default.createElement('path', { d: 'M298.554 125.132C134.678 125.132 1.829 257.98 1.829 421.86s132.848 296.726 296.725 296.726H595.28V421.86c0-163.88-132.849-296.728-296.726-296.728zm221.32 517.889h-54.71v-78.737c-40.464 47.277-100.507 77.331-167.471 77.331-121.561 0-220.457-98.898-220.457-220.459s98.896-220.459 220.457-220.459c109.17 0 200.011 79.78 217.405 184.089h-55.725c-16.63-73.953-82.784-129.379-161.681-129.379-91.393 0-165.747 74.354-165.747 165.749 0 91.393 74.354 165.749 165.747 165.749 61.165 0 114.659-33.33 143.381-82.752h-114.78v-54.71h193.581v193.578z' })
  );
};

Game.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Game.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Game;