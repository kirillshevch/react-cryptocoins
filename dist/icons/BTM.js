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

var Btm = function Btm(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ['color', 'size']);

  return _react2.default.createElement(
    'svg',
    _extends({
      width: size,
      height: size,
      viewBox: '0 0 250 250',
      xmlns: 'http://www.w3.org/2000/svg',
      fill: color
    }, otherProps),
    _react2.default.createElement('path', { d: 'M86.957 76.783l21.913 21.913-61.044 61.434 9 34.044 23.087 6.26 28.957 28.957-8.61 8.609-68.869-18.391L13 150.739l13.696-13.696 60.26-60.26zm132.652 142.826L150.739 238l-73.956-73.957 21.913-21.913 61.434 61.044 34.044-9 6.26-23.087 28.957-28.957 8.609 8.61-18.391 68.869zM194.174 56.826l-23.087-6.26-28.957-28.957L150.74 13l68.869 18.391L238 100.261l-73.957 73.956-21.913-21.913 61.044-61.434-9-34.044zM50.565 79.913L21.61 108.87 13 100.26l18.391-68.869L100.261 13l13.696 13.696 60.26 60.26-21.913 21.914L90.87 47.826l-34.044 9-6.26 23.087z' })
  );
};

Btm.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Btm.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Btm;