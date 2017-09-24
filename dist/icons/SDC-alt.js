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

var SdcAlt = function SdcAlt(props) {
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
    _react2.default.createElement('path', { d: 'M113.564 0L15.367 56.695v113.387l98.197 56.695 98.196-56.695V56.695L113.564 0zm78.221 156.726l-78.221 45.161-78.222-45.161V66.405l78.222-45.162 78.221 45.162v90.321z' }),
    _react2.default.createElement('path', { d: 'M52.49 76.306v12.932l90.851 51.441-29.777 17.194-40.103-23.154v-26.81L52.49 96.028v50.799l61.074 35.261 61.072-35.261v-14.714L85.294 81.582l28.27-16.322 40.101 23.153v25.028l20.971 11.885v-49.02l-61.072-35.26z' })
  );
};

SdcAlt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

SdcAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = SdcAlt;