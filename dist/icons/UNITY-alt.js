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

var UnityAlt = function UnityAlt(props) {
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
    _react2.default.createElement('path', { d: 'M215.38 78.482v66.236c7.228-10.03 11.397-21.239 11.397-33.118 0-11.882-4.17-23.1-11.397-33.118zm-71.061.292c9.58 9.072 37.525 43.724 54.897 65.569V61.9c-20.798-16.197-51.505-26.503-85.84-26.503-16.063 0-31.304 2.278-45.146 6.315 26.197 1.374 51.155 13.433 76.089 37.062z' }),
    _react2.default.createElement('path', { d: 'M133.204 90.496c-23.366-22.138-46.25-32.892-69.957-32.892-30.119 0-38.077 11.069-38.077 16.93-.046 5.828-.081 11.115 4.191 15.434 4.499 4.519 15.535 9.908 42.543 9.908 23.73 0 40.897 5.389 51.041 16.017 6.943 7.281 10.226 16.425 9.718 27.181 0 8.433-8.172 36.705-45.191 42.63 8.331 1.311 16.976 2.074 25.904 2.074 31.912 0 60.703-8.88 81.308-23.142-20.044-25.42-52.034-65.186-61.48-74.14z' }),
    _react2.default.createElement('path', { d: 'M73.111 170.7c41.021 0 43.364-27.322 43.388-27.605.136-3.077.463-10.064-5.241-16.05-6.875-7.194-20.483-11.005-39.353-11.005-26.514 0-44.188-4.8-53.995-14.688-6.505-6.546-8.262-13.976-8.735-19.827-5.908 9.23-9.211 19.387-9.211 30.076 0 13.551 5.332 26.253 14.575 37.291 13.178 12.49 32.95 21.808 58.572 21.808z' })
  );
};

UnityAlt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

UnityAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = UnityAlt;