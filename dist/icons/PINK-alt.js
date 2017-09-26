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

var PinkAlt = function PinkAlt(props) {
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
      d: 'M119.4 78.6c-17.1 0-31.1 13.9-31.1 31.1 0 17.1 13.9 31.1 31.1 31.1 17.1 0 31.1-13.9 31.1-31.1 0-17.2-13.9-31.1-31.1-31.1z'
    }),
    _react2.default.createElement('path', {
      'class': 'st0',
      d: 'M113.4 0C50.8 0 0 50.8 0 113.4 0 176 50.8 226.8 113.4 226.8S226.8 176 226.8 113.4C226.8 50.8 176 0 113.4 0zm6 157.4c-11.9 0-22.7-4.4-31.1-11.5v33.5H71.7v-69.8c0-26.3 21.4-47.7 47.7-47.7 26.3 0 47.7 21.4 47.7 47.7.1 26.3-21.3 47.8-47.7 47.8z'
    })
  );
};

PinkAlt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

PinkAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = PinkAlt;