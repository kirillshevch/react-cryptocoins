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

var YbcAlt = function YbcAlt(props) {
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
    _react2.default.createElement('path', { d: 'M86.182 157.237h54.731v66.147a113.77 113.77 0 0 1-27.63 3.393C50.602 226.777-.21 175.964-.21 113.283c0-47.096 28.688-87.49 69.54-104.666v131.809l16.852 16.811z' }),
    _react2.default.createElement('path', { d: 'M157.237 86.14v131.809c40.854-17.176 69.54-57.569 69.54-104.666 0-62.681-50.813-113.494-113.494-113.494-9.529 0-18.782 1.182-27.626 3.393V69.33h54.73l16.85 16.81z' })
  );
};

YbcAlt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

YbcAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = YbcAlt;