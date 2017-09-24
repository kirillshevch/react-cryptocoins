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

var Bta = function Bta(props) {
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
    _react2.default.createElement('path', { d: 'M39.39 136.08V0H10.499C4.7 0 0 4.698 0 10.496v28.417h28.458v51.446H0v126.009c0 5.794 4.701 10.496 10.499 10.496h91.417C65.363 212.908 39.39 177.535 39.39 136.08zm169.618 64.722l-36.516-36.519c6.11-7.77 9.784-17.548 9.784-28.203 0-25.251-20.471-45.721-45.721-45.721h-34.789V38.913h34.789c41 0 76.043 25.409 90.31 61.326V10.496c0-5.797-4.7-10.496-10.498-10.496H90.835v136.08c0 25.249 20.467 45.72 45.72 45.72 10.654 0 20.431-3.674 28.203-9.784l36.518 36.519a97.31 97.31 0 0 1-30.069 18.33h45.16c5.798 0 10.498-4.702 10.498-10.496V171.94a97.25 97.25 0 0 1-17.857 28.862z' })
  );
};

Bta.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Bta.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Bta;