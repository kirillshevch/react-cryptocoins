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

var ArdrAlt = function ArdrAlt(props) {
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
    _react2.default.createElement('path', { d: 'M297.64 124.087C133.689 124.087.782 256.994.782 420.945c0 163.953 132.907 296.86 296.858 296.86s296.857-132.907 296.857-296.86c0-163.951-132.906-296.858-296.857-296.858zm-173.979 409.79l172.598-301.509 44.531 76.711-131.06 224.798h-86.069zm92.194 0l70.584-121.287 44.061 54.541-114.645 66.746zm176.268-.068L288.601 407.551l82.651-45.043 100.366 171.301h-79.495z' })
  );
};

ArdrAlt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

ArdrAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = ArdrAlt;