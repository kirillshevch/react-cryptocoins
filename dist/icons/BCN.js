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

var Bcn = function Bcn(props) {
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
    _react2.default.createElement('path', { d: 'M130.324 116.855h-27.473v34.143h27.647c12.364 0 25.627-4.413 25.627-15.501.001-11.089-7.552-18.642-25.801-18.642zm16.68-28.946c0-10.697-10.008-15.404-19.819-15.404h-24.333V104h23.743c9.812 0 20.409-5.396 20.409-16.091z' }),
    _react2.default.createElement('path', { d: 'M113.533.288C50.989.288.288 50.989.288 113.533c0 62.543 50.701 113.244 113.245 113.244 62.543 0 113.244-50.701 113.244-113.244C226.777 50.989 176.076.288 113.533.288zm18.165 169.228H82.705V140.5h-30.09v-14.717h30.091v-19.526H52.615V91.538h30.091V57.007h52.916c18.841 0 30.811 15.762 30.811 28.124 0 12.364-11.381 19.361-11.381 19.361s19.622 6.477 19.622 29.433c-.001 22.96-19.821 35.591-42.976 35.591z' })
  );
};

Bcn.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Bcn.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Bcn;