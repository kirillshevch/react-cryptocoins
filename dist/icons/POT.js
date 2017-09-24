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

var Pot = function Pot(props) {
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
    _react2.default.createElement('path', { d: 'M130.231 74.484H96.212l-1.822 9.432h30.003l-2.694 14.258H91.638l-2.211 11.454h36.201c12.238 0 23.579-8.084 25.038-20.884 1.461-12.8-11.114-14.26-20.435-14.26z' }),
    _react2.default.createElement('path', { d: 'M113.616.455C51.119.455.455 51.119.455 113.616s50.664 113.161 113.161 113.161 113.161-50.664 113.161-113.161S176.113.455 113.616.455zm58.634 90.022c-4.404 36.246-39.771 39.25-55.043 39.25H85.548l-8.311 43.059H56.015l14.52-74.611H58.148l2.694-14.258h12.469l5.832-29.979h43.117c28.829-.001 54.102 2.687 49.99 36.539z' })
  );
};

Pot.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Pot.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Pot;