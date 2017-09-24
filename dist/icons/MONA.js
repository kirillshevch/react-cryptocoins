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

var Mona = function Mona(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ['color', 'size']);

  return _react2.default.createElement(
    'svg',
    _extends({
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 226.777 226.777',
      fill: color
    }, otherProps),
    _react2.default.createElement('path', { d: 'M112.951 149.841l12.2-20.604h-23.92z' }),
    _react2.default.createElement('path', { d: 'M198.826 82.449L182.615 9.823l-31.669 49.976c-11.752-2.878-24.376-4.459-37.532-4.459-13.159 0-25.78 1.581-37.532 4.459L44.21 9.823 27.999 82.449C10.58 96.361 0 114.556 0 134.479c0 43.707 50.775 79.139 113.414 79.139 62.637 0 113.414-35.432 113.414-79.139 0-19.923-10.581-38.118-28.002-52.03zM50.348 115.714h-7.619l18.443-21.25h13.521l-24.345 21.25zm62.447 51.892L81.412 112.44l7.749-4.408 6.992 12.287h34.276l7.314-12.354 7.672 4.544-32.62 55.097zm63.683-51.892l-24.343-21.25h13.521l18.439 21.25h-7.617z' })
  );
};

Mona.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Mona.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Mona;