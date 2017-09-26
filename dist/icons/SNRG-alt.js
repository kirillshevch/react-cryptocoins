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

var SnrgAlt = function SnrgAlt(props) {
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
      d: 'M113.4 0C50.8 0 0 50.8 0 113.4 0 176 50.8 226.8 113.4 226.8c62.6 0 113.4-50.8 113.4-113.4C226.8 50.8 176 0 113.4 0zm60.2 149.6L114 188.4l-60.7-39.7v-22.3L114 166l46.5-30.2-15.2-9.9-31.9 21-17.5-11.4 49.2-31.9 28.5 18.3v27.7zm0-49.4l-60.7-39.6-46.6 30.2 15.2 9.9 31.9-21 17.5 11.4L81.7 123l-28.5-18.3V77.1l59.6-38.8L173.6 78v22.2z'
    })
  );
};

SnrgAlt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

SnrgAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = SnrgAlt;