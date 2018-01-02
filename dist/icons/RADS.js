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

var Rads = function Rads(props) {
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
    _react2.default.createElement('path', { d: 'M176.011 103.577c28.602 0 51.788-23.186 51.788-51.788S204.613 0 176.011 0s-51.788 23.186-51.788 51.788c0 39.452-31.982 71.434-71.434 71.434C24.186 123.223 1 146.41 1 175.012S24.186 226.8 52.788 226.8s51.788-23.186 51.788-51.788c.001-39.453 31.983-71.435 71.435-71.435zm0-67.401c8.622 0 15.612 6.99 15.612 15.612S184.633 67.4 176.011 67.4s-15.612-6.99-15.612-15.612 6.99-15.612 15.612-15.612zM52.788 190.624c-8.623 0-15.612-6.99-15.612-15.612s6.99-15.612 15.612-15.612S68.4 166.39 68.4 175.012c.001 8.622-6.989 15.612-15.612 15.612z' }),
    _react2.default.createElement('path', { d: 'M176.012 123.223c-28.602 0-51.788 23.186-51.788 51.788S147.41 226.8 176.012 226.8s51.788-23.186 51.788-51.788-23.186-51.789-51.788-51.789zm0 67.401c-8.622 0-15.612-6.99-15.612-15.612s6.99-15.612 15.612-15.612 15.612 6.99 15.612 15.612-6.99 15.612-15.612 15.612zM52.788 103.577c28.602 0 51.788-23.186 51.788-51.788S81.39 0 52.788 0 1 23.186 1 51.788s23.186 51.789 51.788 51.789zm0-67.401c8.622 0 15.612 6.99 15.612 15.612S61.41 67.4 52.788 67.4s-15.612-6.99-15.612-15.612 6.99-15.612 15.612-15.612z' })
  );
};

Rads.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Rads.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Rads;