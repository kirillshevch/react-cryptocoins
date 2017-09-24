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

var Msc = function Msc(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ['color', 'size']);

  return _react2.default.createElement(
    'svg',
    _extends({
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 226.777 226.777',
      fill: color
    }, otherProps),
    _react2.default.createElement('path', { d: 'M113.616.455C51.119.455.455 51.119.455 113.616s50.664 113.161 113.161 113.161 113.161-50.664 113.161-113.161S176.113.455 113.616.455zm-35.561 143.65l-36.107 7.871 49.667-95.857L106 88.141c-18.145 3.632-31.815 19.65-31.815 38.862a39.48 39.48 0 0 0 3.87 17.102zm35.767 10.582c-15.288 0-27.684-12.394-27.684-27.684 0-15.291 12.396-27.686 27.684-27.686 15.291 0 27.687 12.395 27.687 27.686s-12.396 27.684-27.687 27.684zm35.732-10.5a39.516 39.516 0 0 0 3.906-17.184c0-19.084-13.487-35.015-31.45-38.788l15.091-32.097 48.182 95.857-35.729-7.788z' })
  );
};

Msc.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Msc.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Msc;