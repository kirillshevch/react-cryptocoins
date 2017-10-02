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

var Mco = function Mco(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ['color', 'size']);

  return _react2.default.createElement(
    'svg',
    _extends({
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '-15 0 227 227',
      fill: color
    }, otherProps),
    _react2.default.createElement('path', { d: 'M98.182 0L0 56.75v113.5L98.182 227 197 170.25V56.75L98.182 0zm89.777 165.039l-89.777 51.793-89.968-51.793V61.453l89.968-51.73 89.777 51.73v103.586z' }),
    _react2.default.createElement('path', { d: 'M72.968 116.678l-22.986-14.616-25.978 19.319 35.465 61.515h14.135l16.746-15.632v-7.754l-17.382-16.65zm50.428 0v26.182l-17.319 16.586.064 7.881 16.745 15.379h13.944l35.211-61.325-25.915-19.511zm-73.095-28.09l95.825.064-9.359-39.464H59.215z' }),
    _react2.default.createElement('path', { d: 'M115.055 116.678l8.277-22.052H73.031l8.469 22.052-2.61 24.593 38.584-.063z' })
  );
};

Mco.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Mco.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Mco;