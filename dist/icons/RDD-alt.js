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

var RddAlt = function RddAlt(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ['color', 'size']);

  return _react2.default.createElement(
    'svg',
    _extends({
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 226.8 226.8',
      fill: color
    }, otherProps),
    _react2.default.createElement('path', { d: 'M113.5 0C50.9 0 .1 50.8.1 113.4c0 62.6 50.8 113.4 113.4 113.4S226.9 176 226.9 113.4C226.9 50.8 176.1 0 113.5 0zm18.1 56.6c-1.2 1.8-2.2 3.7-3 5.7-1.3-.7-2.4-1.3-3.2-1.6-.4-.2-.9-.2-1.3 0s-.8.5-.9 1l-1.5 4.1c-.3.8 0 1.6.7 2 3 1.8 11 6.8 18.5 14.4 7.5 7.5 12.7 16 14.7 19.4.2.4.6.7 1.1.8h.4c.3 0 .7-.1 1-.3l4-2.8c.7-.5.9-1.3.6-2-.2-.6-.6-1.4-1.1-2.3 2.1-.6 4-1.4 5.9-2.4.4 1.2.8 2.5 1.2 3.7L127 133.1l-8.7-79.8c4.7.6 9.1 1.7 13.3 3.3zm-6.8 78.4l-27 23.9-27.2-57 48.9-15.5 5.3 48.6zm-14.2-82.2c1.8 0 3.6.1 5.3.2l3.4 31-49.7 15.8L60.1 80c10.8-16.4 29.4-27.2 50.5-27.2zm-52 29.6l8.7 18.2-16.7 5.3c1-8.6 3.8-16.5 8-23.5zm-8.5 30.9c0-1.6.1-3.3.2-4.9l18-5.7L96 160.6l-9.4 8.3c-21.5-9.3-36.5-30.7-36.5-55.6zm39 56.6l8-7.1 5 10.4c-4.5-.7-8.9-1.8-13-3.3zm21.5 3.9c-1.9 0-3.8-.1-5.7-.3L99 161.1l26.2-23.2 3.6 33.1c-5.8 1.8-11.9 2.8-18.2 2.8zm20.4-3.6l-3.7-34.2 42-37.2c1.1 4.6 1.8 9.5 1.8 14.5 0 26.2-16.7 48.5-40.1 56.9zM154.2 92h-.6c-2.4-3.5-5.8-8.1-9.9-12.2-4.4-4.4-8.9-7.8-12.3-10.1.4-11.5 10.5-20.8 22.8-20.8 12.6 0 22.8 9.7 22.8 21.6 0 11.8-10.2 21.5-22.8 21.5z' })
  );
};

RddAlt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

RddAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = RddAlt;