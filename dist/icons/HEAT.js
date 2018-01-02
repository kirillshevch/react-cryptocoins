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

var Heat = function Heat(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ['color', 'size']);

  return _react2.default.createElement(
    'svg',
    _extends({
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 226.8 226.8',
      fill: color
    }, otherProps),
    _react2.default.createElement('path', { d: 'M87.931 226.282h50.938L136.15 115.71h-45.5zM91.51 80.724h43.78L133.317.518H93.483zm-31.721-49.17c-20.845.866-38.223 16.537-41.01 37.388l-8.707 65.149c-3.2 23.945 15.274 45.235 39.352 45.536L59.789 31.554zm156.939 102.537l-8.707-65.149c-2.787-20.851-20.165-36.523-41.01-37.388l10.365 148.073c24.078-.301 42.553-21.591 39.352-45.536z' })
  );
};

Heat.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Heat.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Heat;