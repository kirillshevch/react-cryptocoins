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

var ErcAlt = function ErcAlt(props) {
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
      d: 'M129 98.1l18.3-6.1c-7.1-11.2-19.6-18.6-33.9-18.6-18.4 0-33.9 12.4-38.6 29.4l57.8-18.4-3.6 13.7z'
    }),
    _react2.default.createElement('path', {
      'class': 'st0',
      d: 'M113.4 0C50.8 0 0 50.8 0 113.4 0 176 50.8 226.8 113.4 226.8S226.8 176 226.8 113.4C226.8 50.8 176 0 113.4 0zM77.3 130.7c6.5 13.5 20.2 22.8 36.2 22.8 15.3 0 28.7-8.6 35.4-21.3l15.3-5c-6.1 22.3-26.5 38.7-50.7 38.7-21.4 0-39.8-12.8-48-31.1l-7.8 2.7c9.3 21.6 30.8 36.7 55.8 36.7 29.9 0 54.7-21.5 59.8-49.9l12.7-4.1c-3.4 37.1-34.6 66.1-72.5 66.1-34.1 0-62.6-23.4-70.6-54.9l64.4-20.9-3.3 15.2 69.4-22.9c-5.1-28.5-29.9-50.1-59.9-50.1-32.4 0-58.8 25.3-60.7 57.1l8.5-2.7c3.2-26 25.3-46.1 52.2-46.1 23.6 0 43.6 15.5 50.2 37l-50.3 16.5 4.2-14.1-76.1 24.4c-.6-3.7-.9-7.4-.9-11.2 0-40.2 32.6-72.8 72.8-72.8 39 0 70.8 30.6 72.8 69.1l-96.7 31.5 3-15.8-15.2 5.1z'
    })
  );
};

ErcAlt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

ErcAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = ErcAlt;