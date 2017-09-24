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

var MueAlt = function MueAlt(props) {
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
    _react2.default.createElement('path', { d: 'M184.741 34.274l-70.057 88.04-71.868-88.04L0 214.203h42.816l22.612-93.815 49.256 58.214 48.408-58.214 22.611 93.815h41.374z' }),
    _react2.default.createElement('path', { d: 'M104.276 71.558c11.908 0 22.552-17.68 37.526-29.227 14.974-11.546 42.037-27.241 40.412-29.587-1.624-2.346-37.887 20.387-46.186 27.242-8.298 6.855-21.288 19.846-26.339 19.124-5.052-.722-31.752-42.396-40.773-36.804-4.26 2.641-4.33 8.24-1.263 11.968 3.067 3.728 24.717 37.284 36.623 37.284z' })
  );
};

MueAlt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

MueAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = MueAlt;