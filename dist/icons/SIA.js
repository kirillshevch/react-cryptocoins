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

var Sia = function Sia(props) {
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
      d: 'M39.8 35.8c.2.2.4.4.7.6l-.7-.6M43.8 31.9l.6.6c-.2-.2-.4-.5-.6-.6 0-.1 0 0 0 0'
    }),
    _react2.default.createElement('path', {
      'class': 'st0',
      d: 'M191.4 88.3c-21.7-13.6-48.8-15-71.7-4.3-12.1 5.5-26.7 3.5-37.1-5.8-.5-.4-.9-.8-1.4-1.3l-46-46c-3.1-3.4-4.4-7.9-3.9-12.2.2-.9.3-1.9.3-2.9C31.5 7 24.4 0 15.7 0S0 7.1 0 15.7c0 8.7 7 15.7 15.7 15.7 1 0 2-.1 2.9-.3 4.4-.3 8.9.9 12.4 3.9l46.2 46.2c.4.4.7.8 1 1.2 9.3 10.4 11.2 25 5.7 37.1-10.8 22.8-9.4 50 4.3 71.7 2.9 4.7 6.4 9.1 10.4 13.1 12.9 12.9 30 20.5 46.9 22 4.4.4 67.4.2 67.4.2 3.4 0 6.9-1.7 9.3-4.1 2.4-2.4 4.4-6.3 4.4-9.7v-61c0-3-.7-7.4-.7-8-1.5-16.9-8.7-32.2-21.6-45.1-3.9-3.9-8.3-7.4-12.9-10.3zm4 51.1c1.8 8.7 1.9 12.5 1.9 13.1v30.9c0 3.4-1.5 7.4-3.9 9.8-2.4 2.4-6.4 3.9-9.8 3.9h-30c-.6 0-7.6-.1-14.1-1.9-7.3-2-14.1-5.9-19.8-11.6-17.7-17.7-17.7-46.4 0-64.1 17.7-17.7 46.5-17.7 64.1 0 5.6 5.8 10.1 12.5 11.6 19.9z'
    })
  );
};

Sia.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Sia.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Sia;