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

var Pivx = function Pivx(props) {
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
    _react2.default.createElement('path', { d: 'M112.178.293L19.655 19.619v128.07c0 18.725 19.225 36.548 40.053 50.267 23.531 15.521 49.065 27.436 51.068 28.237l1.402.601 1.402-.601c3.705-1.402 91.121-38.551 91.121-78.504V19.619L112.178.293zM72.148 78.75h47.807v9.964H72.148V78.75zm54.168 43.355H94.939v49.715H82.536v-60.846h42.083c16.961 0 27.879-10.282 27.879-27.561 0-17.066-11.024-27.031-27.667-27.031l-44.415.212V45.253h45.899c22.685 0 39.009 14.734 39.009 38.161.001 23.533-16.324 38.691-39.008 38.691z' })
  );
};

Pivx.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Pivx.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Pivx;