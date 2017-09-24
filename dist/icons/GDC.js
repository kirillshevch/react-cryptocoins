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

var Gdc = function Gdc(props) {
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
    _react2.default.createElement('path', { d: 'M139.621 174.621c17.635 0 31.98-14.345 31.98-31.979s-14.346-31.979-31.98-31.979c-15.063 0-27.696 10.484-31.066 24.527H37.788V39.431h70.767c3.37 14.043 16.003 24.526 31.066 24.526 17.635 0 31.98-14.346 31.98-31.979S157.256 0 139.621 0c-15.063 0-27.696 10.482-31.066 24.526h-85.67v125.569h85.669c3.371 14.043 16.004 24.526 31.067 24.526zm0-49.055c9.418 0 17.078 7.66 17.078 17.076 0 9.417-7.66 17.077-17.078 17.077-9.414 0-17.076-7.66-17.076-17.077 0-9.416 7.662-17.076 17.076-17.076zm0-110.664c9.418 0 17.078 7.662 17.078 17.077 0 9.417-7.66 17.076-17.078 17.076-9.414 0-17.076-7.66-17.076-17.076s7.662-17.077 17.076-17.077z' }),
    _react2.default.createElement('path', { d: 'M203.89 76.686h-85.67c-3.371-14.047-16.003-24.527-31.067-24.527-17.633 0-31.979 14.344-31.979 31.977 0 17.635 14.346 31.98 31.979 31.98 15.064 0 27.696-10.483 31.067-24.529h70.768v95.762H118.22c-3.371-14.046-16.003-24.527-31.067-24.527-17.633 0-31.979 14.346-31.979 31.979 0 17.635 14.346 31.98 31.979 31.98 15.064 0 27.696-10.483 31.067-24.529h85.67V76.686zM87.153 101.214c-9.417 0-17.076-7.659-17.076-17.078 0-9.414 7.66-17.076 17.076-17.076s17.077 7.662 17.077 17.076c0 9.419-7.661 17.078-17.077 17.078zm0 110.665c-9.417 0-17.076-7.66-17.076-17.078 0-9.416 7.66-17.075 17.076-17.075s17.077 7.659 17.077 17.075c0 9.418-7.661 17.078-17.077 17.078z' })
  );
};

Gdc.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Gdc.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Gdc;