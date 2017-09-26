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

var GldAlt = function GldAlt(props) {
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
      d: 'M113.4 0C50.8 0 0 50.8 0 113.4 0 176 50.8 226.8 113.4 226.8S226.8 176 226.8 113.4C226.8 50.8 176 0 113.4 0zm60.3 126.7c0 8.9-12 48.1-57.7 48.1-26.6 0-49.2-16.8-57.9-40.3H45.5c-2 0-3.7-1.7-3.7-3.7v-3.1c0-2 1.7-3.7 3.7-3.7h9.8c-.7-4-1-8.1-.9-12.3.1-2.2.2-4.5.5-6.6h-9.4c-2 0-3.7-1.7-3.7-3.7v-3.1c0-2 1.7-3.7 3.7-3.7h11.7C65.1 70 88.1 52 115 51.6c19.5-.3 37 8.5 48.5 22.4.8 1 .8 2.5-.1 3.4l-10.1 10.7c-1.4 1.5-3.9 1.4-5.2-.3-7.5-9.5-19.1-15.6-32.2-15.6-15.9 0-29.7 9.1-36.5 22.3h9.9c2 0 3.7 1.7 3.7 3.7v3.1c0 2-1.7 3.7-3.7 3.7H75.8c-.6 3.1-.9 6.4-.8 9.7.1 3.2.6 6.3 1.4 9.2h12.9c2 0 3.7 1.7 3.7 3.7v3.1c0 2-1.7 3.7-3.7 3.7H81c7 11.3 19.3 19.1 33.3 19.6 17.1.7 31-9.2 37.1-23.7h-23.3c-2 0-3.7-1.7-3.7-3.7v-13c0-2 1.7-3.7 3.7-3.7H170c2 0 3.7 1.7 3.7 3.7v13.1z'
    })
  );
};

GldAlt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

GldAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = GldAlt;