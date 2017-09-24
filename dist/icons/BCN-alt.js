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

var BcnAlt = function BcnAlt(props) {
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
    _react2.default.createElement('path', { d: 'M190.199 97.104s21.134-12.992 21.134-35.948c0-22.955-22.226-52.22-57.207-52.22H55.873v64.118H0v27.328h55.873v36.254H0v27.327h55.873v53.879h90.966c42.996 0 79.797-23.453 79.797-66.087-.001-42.624-36.437-54.651-36.437-54.651zm-51.74-59.391c18.22 0 36.802 8.74 36.802 28.602 0 19.858-19.675 29.876-37.896 29.876H93.278V37.713h45.181zm6.155 145.745H93.278V120.06h51.012c33.885 0 47.909 14.023 47.909 34.613 0 20.587-24.628 28.785-47.585 28.785z' })
  );
};

BcnAlt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

BcnAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = BcnAlt;