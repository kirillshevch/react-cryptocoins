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

var Dcr = function Dcr(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ['color', 'size']);

  return _react2.default.createElement(
    'svg',
    _extends({
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 595.279 595.281',
      fill: color
    }, otherProps),
    _react2.default.createElement('path', { d: 'M595.282 254.087c0-102.905-83.421-186.343-186.32-186.343H261.687l100.354 87.109h46.92c54.708 0 99.217 44.515 99.217 99.234 0 54.711-44.509 99.238-99.217 99.238H261.687l200.708 174.212H595.27L479.152 426.73c68.109-27.721 116.13-94.582 116.13-172.643z' }),
    _react2.default.createElement('path', { d: 'M186.334 440.428c-54.705 0-99.227-44.521-99.227-99.228 0-54.718 44.528-99.222 99.227-99.222h147.262L132.888 67.744H.012l116.12 100.807C48.023 196.27 0 263.139 0 341.201c0 102.916 83.425 186.337 186.334 186.337h147.267l-100.353-87.109h-46.914z' })
  );
};

Dcr.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Dcr.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Dcr;