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

var Xzc = function Xzc(props) {
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
    _react2.default.createElement('path', { d: 'M159.565 164.846h42.366v37.055H74.641L232.656 43.75c5.153-5.157 6.68-12.988 4.008-19.673C233.802 17.393 227.313 13 219.87 13H31.13C21.015 13 13 21.022 13 31.145v133.701l78.435-78.501H49.07V49.099h127.099L18.344 207.25c-5.153 5.157-6.68 12.988-4.008 19.673C17.198 233.607 23.687 238 31.13 238h188.74c9.924 0 18.13-8.022 18.13-18.145V86.345l-78.435 78.501z' })
  );
};

Xzc.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Xzc.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Xzc;