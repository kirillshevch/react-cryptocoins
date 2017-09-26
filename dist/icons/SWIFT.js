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

var Swift = function Swift(props) {
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
      d: 'M112.1 0L66.7 26.2l45.4 26.2zM61.8 81.5V29L16.4 55.2zM61.8 139.8V87.4l-45.4 26.2zM162.5 139.8V87.4l-45.4 26.2zM61.8 198.1v-52.4l-45.4 26.2zM14.9 116.5v52.4l45.4-26.2zM14.9 58.2v52.4l45.4-26.2zM65.3 29v52.5l45.4-26.3zM112.1 226.8v-52.4l-45.4 26.2zM65.3 145.3v52.4l45.4-26.2zM115.7 0v52.4l45.4-26.2zM166 29v52.5l45.3-26.3zM166 87.4v52.4l45.3-26.2zM166 198.1l45.3-26.2-45.3-26.2zM212.9 168.9v-52.4l-45.4 26.2zM167.5 84.4l45.4 26.2V58.2zM162.5 81.5V29l-45.4 26.2zM115.7 226.8l45.4-26.2-45.4-26.2zM162.5 197.7v-52.4l-45.4 26.2z'
    })
  );
};

Swift.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Swift.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Swift;