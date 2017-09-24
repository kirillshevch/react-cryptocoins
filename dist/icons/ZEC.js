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

var Zec = function Zec(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ['color', 'size']);

  return _react2.default.createElement(
    'svg',
    _extends({
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 123.305 595.279 595.28',
      fill: color
    }, otherProps),
    _react2.default.createElement('path', { d: 'M297.606 718.517C133.506 718.517 0 585.015 0 420.914 0 256.81 133.506 123.305 297.606 123.305c164.098 0 297.605 133.505 297.605 297.609 0 164.101-133.508 297.603-297.605 297.603zm0-566.181c-148.092 0-268.573 120.482-268.573 268.577 0 148.092 120.481 268.575 268.573 268.575 148.091 0 268.569-120.482 268.569-268.575 0-148.095-120.478-268.577-268.569-268.577z' }),
    _react2.default.createElement('path', { d: 'M278.497 500.175h138.006v69.357h-84.927c1.416 19.818 2.12 38.221 3.539 58.036h-71.482v-57.325h-84.927c0-22.651-2.829-45.294 1.415-66.525 2.125-11.326 14.862-21.238 22.649-31.143 26.89-31.849 53.788-62.987 81.388-94.833 10.614-12.03 21.232-23.353 33.262-36.803H185.077v-69.356h78.556v-58.032h68.648v56.617h85.637c0 23.353 2.83 46.002-1.415 67.234-2.122 11.323-14.862 21.229-23.356 31.14-26.89 31.849-53.785 62.984-81.388 94.835-10.616 12.738-21.23 24.061-33.262 36.798z' })
  );
};

Zec.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Zec.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Zec;