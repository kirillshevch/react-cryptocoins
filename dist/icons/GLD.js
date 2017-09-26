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

var Gld = function Gld(props) {
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
      d: 'M220.4 108h-71.7c-3.5 0-6.4 2.9-6.4 6.4v22.4c0 3.5 2.9 6.4 6.4 6.4h40c-10.6 24.8-34.4 41.8-63.9 40.7-24.1-.9-45.3-14.2-57.3-33.7h14.3c3.5 0 6.4-2.9 6.4-6.4v-5.4c0-3.5-2.9-6.4-6.4-6.4H59.6c-1.4-5.1-2.3-10.4-2.5-15.9-.2-5.8.3-11.3 1.4-16.7h23.4c3.5 0 6.4-2.9 6.4-6.4v-5.4c0-3.5-2.9-6.4-6.4-6.4H64.8c11.7-22.8 35.4-38.4 62.8-38.4 22.4 0 42.4 10.5 55.3 26.8 2.2 2.8 6.5 3.1 8.9.4l17.3-18.5c1.5-1.6 1.6-4.1.2-5.8-19.8-23.9-49.8-39-83.4-38.5C79.6 8 40.1 39 26.5 81.3H6.4c-3.5 0-6.4 2.9-6.4 6.4V93c0 3.5 2.9 6.4 6.4 6.4h16.1c-.5 3.8-.8 7.6-.9 11.4-.2 7.2.4 14.3 1.6 21.2H6.4c-3.5 0-6.4 2.9-6.4 6.4v5.4c0 3.5 2.9 6.4 6.4 6.4h21.7c15 40.5 53.9 69.3 99.5 69.3 78.6 0 99.2-67.4 99.2-82.7v-22.4c0-3.5-2.9-6.4-6.4-6.4z'
    })
  );
};

Gld.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Gld.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Gld;