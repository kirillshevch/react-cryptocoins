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

var Eth = function Eth(props) {
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
    _react2.default.createElement('path', { d: 'M113.313 0C50.732 0 0 50.732 0 113.313s50.732 113.313 113.313 113.313 113.313-50.732 113.313-113.313S175.894 0 113.313 0zm-1.469 188.386l-44.78-63.344 44.78 26.218v37.126zm0-46.41l-45.083-26.408 45.083-19.748v46.156zm0-49.329l-43.631 19.11 43.631-73.306v54.196zm2.906-54.218l44.244 73.6-44.244-19.382V38.429zm0 149.957V151.26l44.78-26.218-44.78 63.344zm0-46.409V95.821l45.116 19.762-45.116 26.394z' })
  );
};

Eth.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Eth.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Eth;