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

var Fc2 = function Fc2(props) {
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
    _react2.default.createElement('path', { d: 'M70.407 162.212h9.262l15.63-108.447h-9.263zm74.636-18.364h-17.154c-.699 0-1.264.567-1.264 1.264v12.978c0 .696.564 1.263 1.264 1.263h17.154c.697 0 1.263-.566 1.263-1.263v-12.978a1.266 1.266 0 0 0-1.263-1.264z' }),
    _react2.default.createElement('path', { d: 'M113.533.289C50.99.289.289 50.99.289 113.533S50.99 226.777 113.533 226.777s113.244-50.701 113.244-113.244S176.076.289 113.533.289zm-3.656 122.366l-6.935 46.826H63.138L80.375 49.07h74.935l-4.148 29.975h-34.829l-1.844 12.446h29.63l-4.341 31.164h-29.901zm48.909 53.109c-1.508 0-2.909-.54-3.945-1.525-.813-.769-1.779-2.173-1.779-4.487v-18.284c0-.7-.449-2.514-2.513-2.514v37.042h1.549c.697 0 1.265.565 1.265 1.264v2.208c0 .698-.567 1.263-1.265 1.263h-31.264a1.264 1.264 0 0 1-1.266-1.263v-2.208c0-.698.566-1.264 1.266-1.264h1.548v-44.425c0-.997.81-1.807 1.809-1.807h24.549c1 0 1.81.81 1.81 1.807v3.67c3.897 0 6.227 3.166 6.227 6.227v18.284c0 .8.209 1.404.621 1.793.344.327.837.508 1.39.508.797 0 2.312-.481 2.312-2.301 0-1.796-.364-2.904-.825-4.314-.592-1.808-1.265-3.86-1.265-7.57v-9.905c-.857-1.493-6.098-7.003-10.672-11.463a1.858 1.858 0 0 1-.032-2.627 1.86 1.86 0 0 1 2.625-.031c11.793 11.501 11.793 13.005 11.793 13.815v10.211c0 3.119.551 4.795 1.079 6.417.498 1.514 1.011 3.081 1.011 5.468-.003 3.903-3.108 6.011-6.028 6.011z' })
  );
};

Fc2.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Fc2.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Fc2;