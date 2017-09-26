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

var Lbc = function Lbc(props) {
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
      d: 'M202 113.2l-1.8 10 7 1.3-97.2 60-99.9-49.6v-27.4l106.1-65.3 94.5 45.5v1.8L110 151.3l-75.9-36.9v11.2l76.4 37.2 110.3-67.7V81.3L115.6 30.7 0 101.8v39.4L110.5 196l103.7-64-1.4 9.1 9.9 1.6 4.1-24.8z'
    })
  );
};

Lbc.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Lbc.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Lbc;