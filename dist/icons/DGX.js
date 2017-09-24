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

var Dgx = function Dgx(props) {
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
    _react2.default.createElement('path', { d: 'M65.241 83.402h31.294v10.19H65.241z' }),
    _react2.default.createElement('path', { d: 'M113.388 0C50.766 0 0 50.766 0 113.388c0 62.624 50.766 113.389 113.388 113.389 62.624 0 113.389-50.765 113.389-113.389C226.777 50.766 176.011 0 113.388 0zm3.526 50.653h54.58V61.57h-42.938v32.021h31.295v-10.19h-21.834V72.487h33.477v32.021h-54.58V50.653zm-62.07.59H89.03v13.122H54.844V51.243zm-1.246 21.244h42.938V50.653h12.372v53.854h-55.31v-32.02zm119.41 108.301h-24.754l-34.785-23.887-34.784 23.887H53.93l47.162-32.387-47.162-32.385h24.754l34.784 23.885 34.785-23.885h24.754l-47.162 32.385 47.163 32.387z' })
  );
};

Dgx.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Dgx.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Dgx;