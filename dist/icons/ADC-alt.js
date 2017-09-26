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

var AdcAlt = function AdcAlt(props) {
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
      d: 'M136.1 110.9l-32-18.5c-2.8-1.6-6.2.4-6.2 3.6v37c0 3.2 3.5 5.2 6.2 3.6l32-18.5c2.8-1.6 2.8-5.6 0-7.2z'
    }),
    _react2.default.createElement('path', {
      'class': 'st0',
      d: 'M113.4 59.6c-29.6 0-53.8 24.1-53.8 53.8 0 29.6 24.1 53.8 53.8 53.8 29.6 0 53.8-24.1 53.8-53.8 0-29.7-24.2-53.8-53.8-53.8zm0 101.3c-26.2 0-47.6-21.3-47.6-47.6 0-26.2 21.3-47.6 47.6-47.6 26.2 0 47.6 21.3 47.6 47.6-.1 26.3-21.4 47.6-47.6 47.6z'
    }),
    _react2.default.createElement('path', {
      'class': 'st0',
      d: 'M113.4 0C50.8 0 0 50.8 0 113.4 0 176 50.8 226.8 113.4 226.8S226.8 176 226.8 113.4C226.8 50.8 176 0 113.4 0zm0 185.3c-39.7 0-71.9-32.2-71.9-71.9s32.2-71.9 71.9-71.9 71.9 32.2 71.9 71.9-32.2 71.9-71.9 71.9z'
    })
  );
};

AdcAlt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

AdcAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = AdcAlt;