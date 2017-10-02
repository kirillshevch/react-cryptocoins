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

var SyncAlt = function SyncAlt(props) {
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
    _react2.default.createElement('path', { d: 'M119.638 59.08c15.701 2.59 21.365 15.217 21.365 15.217h24.443s-7.447-21.366-25.414-31.079-39.659-9.389-60.214 6.959c-20.559 16.35-17.968 51.151-17.968 51.151l72.519 58.516s-6.152 9.469-23.312 7.851c-17.158-1.619-22.66-15.702-22.66-15.702H63.793c0 3.508 7.608 21.691 22.662 29.945 15.053 8.257 33.346 13.598 58.758-2.103 25.414-15.703 22.177-54.064 22.177-54.064L94.872 66.85s9.065-10.36 24.766-7.77zm25.25 71.385v15.217L84.027 96.635V81.419l60.861 49.046z' }),
    _react2.default.createElement('path', { d: 'M113.379 0C50.251 0 26.725 57.786 26.725 72.516L47.283 89.35c0-26.654 19.154-67.498 68.795-67.498 42.301 0 66.202 38.469 66.202 67.498h-37.067l58.921 47.428V89.35c0-38.2-26.872-89.35-90.755-89.35zm-.665 204.924c-42.303 0-66.206-38.47-66.206-67.499h37.069L24.656 89.999v47.426c0 38.202 26.87 89.353 90.753 89.353 63.13 0 86.655-57.787 86.655-72.518l-20.558-16.835c.001 26.654-19.154 67.499-68.792 67.499z' })
  );
};

SyncAlt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

SyncAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = SyncAlt;