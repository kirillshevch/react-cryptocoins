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

var IncntAlt = function IncntAlt(props) {
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
    _react2.default.createElement('path', { d: 'M113.4 0C50.8 0 0 50.8 0 113.4s50.8 113.4 113.4 113.4c62.6 0 113.4-50.8 113.4-113.4S176 0 113.4 0zm0 29.3l29.481 8.475-5.198 15.445-24.283-6.931-24.283 6.931-5.198-15.445L113.4 29.3zm0 168.2L69.133 65.969 113.4 53.244l44.267 12.726L113.4 197.5z' })
  );
};

IncntAlt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

IncntAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = IncntAlt;