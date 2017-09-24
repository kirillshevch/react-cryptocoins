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

var OkAlt = function OkAlt(props) {
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
    _react2.default.createElement('path', { d: 'M114.842 48.151c-36.162 0-65.476 29.314-65.476 65.478s29.314 65.478 65.476 65.478c36.161 0 65.478-29.314 65.478-65.478s-29.317-65.478-65.478-65.478zm-22.969 84.18c-4.387-.957-28.951-7.417-32.619-8.375-3.669-.955-7.577-4.234-5.104-10.491 2.472-6.256 9.649-23.403 12.361-29.543 2.712-6.142 13.357-4.463 17.386-3.429 3.767.965 22.809 5.583 26.796 6.699 3.988 1.117 9.411 4.465 7.258 10.367-2.153 5.904-9.49 23.05-12.202 29.11-2.711 6.061-9.489 6.62-13.876 5.662zm72.515-2.771c-1.614 4.307-7.655 18.781-7.655 18.781l-15.374-3.828s5.025-11.843 5.504-13.339c.479-1.495.896-3.409-1.375-4.066-2.273-.658-15.792-4.187-15.792-4.187l-7.058 17.047-15.672-4.068 18.961-45.1 15.552 3.947-9.63 22.311 27.873-17.825 18.543 4.695-21.832 13.129s5.982 2.333 7.417 4.486c1.436 2.155 2.154 3.71.538 8.017z' }),
    _react2.default.createElement('path', { d: 'M113.494 0C50.813 0 0 50.813 0 113.494s50.813 113.494 113.494 113.494 113.493-50.813 113.493-113.494S176.175 0 113.494 0zm1.349 196.81c-45.941 0-83.184-37.24-83.184-83.182s37.243-83.184 83.184-83.184c45.939 0 83.181 37.243 83.181 83.184s-37.242 83.182-83.181 83.182z' }),
    _react2.default.createElement('path', { d: 'M97.517 96.691c-1.958-.547-10.747-2.686-12.596-3.158-1.976-.508-5.066-.841-6.396 2.171-1.331 3.013-5.128 11.885-6.341 14.954-1.213 3.069.645 4.223 2.445 4.693 1.8.469 11.074 2.688 13.227 3.157 2.151.469 4.235.291 5.565-2.683 1.331-2.973 5.191-11.901 6.248-14.798 1.056-2.894-.198-3.788-2.152-4.336z' })
  );
};

OkAlt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

OkAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = OkAlt;