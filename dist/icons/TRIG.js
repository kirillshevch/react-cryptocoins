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

var Trig = function Trig(props) {
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
    _react2.default.createElement('path', { d: 'M123.351 100.469c0-5.496-4.455-9.951-9.951-9.951s-9.951 4.455-9.951 9.951a9.947 9.947 0 0 0 5.209 8.75l-2.837 21.542h15.157l-2.837-21.542a9.948 9.948 0 0 0 5.21-8.75zM113.4 57.366c-10.023 0-18.178 8.417-18.178 18.762v2.662h36.357v-2.662c-.001-10.345-8.156-18.762-18.179-18.762z' }),
    _react2.default.createElement('path', { d: 'M202.96 18.962s-7.324-2.645-12.919-7.223S179.224.278 179.224.278H47.576s-5.222 6.884-10.817 11.461-12.919 7.223-12.919 7.223-15.327 53.595-8.274 89.886c7.053 36.291 18.175 61.18 45.846 86.409 22.785 20.819 51.984 31.263 51.989 31.264.004-.001 29.203-10.446 51.989-31.264 27.67-25.229 38.792-50.118 45.846-86.409 7.051-36.29-8.276-89.886-8.276-89.886zm-45.9 114.132c0 6.053-4.907 10.96-10.96 10.96H80.7c-6.053 0-10.96-4.907-10.96-10.96V86.871a8.08 8.08 0 0 1 8.08-8.08h6.008v-2.662c0-16.628 13.266-30.156 29.572-30.156 16.306 0 29.572 13.528 29.572 30.156v2.662h6.008a8.08 8.08 0 0 1 8.08 8.08v46.223z' })
  );
};

Trig.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Trig.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Trig;