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

var SteemAlt = function SteemAlt(props) {
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
      d: 'M113.4 0C50.8 0 0 50.8 0 113.4 0 176 50.8 226.8 113.4 226.8S226.8 176 226.8 113.4C226.8 50.8 176 0 113.4 0zM92.1 138.3c-.7 7.2-17.4 24.2-19.1 23-1.9-.5 5.1-12 2.5-21.6-3-11.2-20.9-40.1-20.9-52.8 0-9.3 15.3-22 16.6-21.4 1.4.2-2 9.1-.1 19.2 1.5 8.6 21.8 42.1 21 53.6zm44.1 6.8c-.8 9.2-22.2 30.8-24.4 29.4-2.4-.7 6.5-15.3 3.2-27.6-3.8-14.2-26.7-51.1-26.7-67.4 0-11.9 19.6-28.1 21.1-27.3 1.7.3-2.6 11.6-.2 24.4 2.1 11.1 28.1 53.9 27 68.5zm33.7-6.8c-.6 7.2-17.4 24.2-19.1 23-1.9-.5 5.1-12 2.5-21.6-3-11.2-20.9-40.1-20.9-52.8 0-9.3 15.4-22 16.6-21.4 1.4.2-2 9.1-.1 19.2 1.5 8.6 21.9 42.1 21 53.6z'
    })
  );
};

SteemAlt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

SteemAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = SteemAlt;