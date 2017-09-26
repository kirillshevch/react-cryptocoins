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

var Ppc = function Ppc(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ['color', 'size']);

  return _react2.default.createElement(
    'svg',
    _extends({
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 226.8 226.8',
      width: size,
      height: size,
      fill: color
    }, otherProps),
    _react2.default.createElement('path', {
      'class': 'st0',
      d: 'M164.6 223.8s10.4-34.6 5.8-65.7C165.8 127 138 89.3 117 72.3S55.7 36 55.7 36s35 26.8 47.1 39.6c12.1 12.8 28.8 34 36.7 61.9 7.9 27.8 6.5 76.2-9.5 86.3-16 10.2-58.3-7.4-72.4-19.2-14.1-11.8-32.1-31.1-37.3-71C15.1 93.6 16.6 0 16.6 0s75.1.4 131.8 36.2c56.8 35.8 62 64.2 62 110 0 45.9-45.8 77.6-45.8 77.6z'
    })
  );
};

Ppc.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Ppc.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Ppc;