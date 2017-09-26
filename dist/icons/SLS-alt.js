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

var SlsAlt = function SlsAlt(props) {
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
      d: 'M113.4 0C50.8 0 0 50.8 0 113.4 0 176 50.8 226.8 113.4 226.8S226.8 176 226.8 113.4C226.8 50.8 176 0 113.4 0zm0 185.2c-38.9 0-70.4-31.5-70.4-70.4C43 85.7 60.7 60.7 85.9 50 71.7 61.7 71 75.7 72.7 86.2c2.1 12.7 9.3 22.3 22.1 28.2 12.7 6 24.7 8.8 33.6 15.3 17.2 12.5 13 34.5 2.5 46.6-3.3 3.8-8.1 6.6-13.2 8.8-1.4 0-2.9.1-4.3.1zm15.5-1.7c9.8-4.1 23.9-12.9 25-37.3 1.5-32.6-19.4-40.1-42.2-46.4-22.7-6.2-30-22.2-23.8-37.6C94 46.8 115 47 126.4 54s16.8 26 16.8 26l4.1-1.2-2.5-27c23.1 11.6 38.9 35.4 38.9 63 .1 33.5-23.4 61.6-54.8 68.7z'
    })
  );
};

SlsAlt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

SlsAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = SlsAlt;