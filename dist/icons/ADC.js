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

var Adc = function Adc(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ['color', 'size']);

  return _react2.default.createElement(
    'svg',
    _extends({
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 226.8 226.8',
      width: size,
      height: size,
      fill: color
    }, otherProps),
    _react2.default.createElement('path', {
      'class': 'st0',
      d: 'M113.4 38.4c-41.4 0-75 33.6-75 75s33.6 75 75 75 75-33.6 75-75-33.7-75-75-75zm35.9 82.4l-50.4 29.1c-4.4 2.5-9.8-.6-9.8-5.7V86c0-5 5.4-8.2 9.8-5.7l50.4 29.1c4.3 2.6 4.3 8.9 0 11.4z'
    }),
    _react2.default.createElement('path', {
      'class': 'st0',
      d: 'M113.4 0C50.8 0 0 50.8 0 113.4s50.8 113.4 113.4 113.4c62.6 0 113.4-50.8 113.4-113.4S176 0 113.4 0zm0 198.2c-46.8 0-84.8-38-84.8-84.8s38-84.8 84.8-84.8 84.8 38 84.8 84.8c0 46.7-38.1 84.8-84.8 84.8z'
    })
  );
};

Adc.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Adc.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Adc;