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

var SiaAlt = function SiaAlt(props) {
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
      d: 'M147.5 116.5c-8.9-8.9-23.3-8.9-32.2 0-8.9 8.9-8.9 23.3 0 32.2 2.9 2.9 6.3 4.8 9.9 5.8 3.3.9 6.8.9 7.1.9h15.1c1.7 0 3.7-.8 4.9-2s2-3.2 2-4.9V133c0-.3 0-2.2-.9-6.6-.8-3.7-3-7-5.9-9.9z'
    }),
    _react2.default.createElement('path', {
      'class': 'st0',
      d: 'M113.4 0C50.8 0 0 50.8 0 113.4 0 176 50.8 226.8 113.4 226.8S226.8 176 226.8 113.4C226.8 50.8 176 0 113.4 0zM77.3 72.5l.3.3-.3-.3zm91.8 90.8c0 1.7-1 3.6-2.2 4.9-1.2 1.2-3 2.1-4.7 2.1 0 0-31.6.1-33.8-.1-8.5-.8-17.1-4.6-23.5-11.1-2-2-3.8-4.2-5.2-6.6-6.8-10.9-7.5-24.5-2.1-36 2.8-6.1 1.8-13.4-2.9-18.6-.2-.2-.3-.4-.5-.6L70.9 74.1c-1.7-1.5-4-2.1-6.2-1.9-.5.1-1 .1-1.5.1-4.4 0-7.9-3.5-7.9-7.9s3.5-7.9 7.9-7.9 7.9 3.5 7.9 7.9c0 .5-.1 1-.1 1.5-.2 2.1.4 4.3 2 6.1l23.1 23.1c.2.2.5.4.7.7 5.2 4.7 12.5 5.6 18.6 2.9 11.5-5.4 25.1-4.7 36 2.1 2.3 1.5 4.6 3.2 6.6 5.2 6.5 6.5 10.1 14.2 10.8 22.7 0 .3.4 2.5.4 4-.1 1.5-.1 30.6-.1 30.6z'
    })
  );
};

SiaAlt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

SiaAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = SiaAlt;