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

var Nxt = function Nxt(props) {
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
    _react2.default.createElement('path', { d: 'M179.909 156.554L93.515 99.3H70.459c-8.002 0-14.487-6.487-14.487-14.488 0-7.998 6.485-14.482 14.487-14.482h31.783l86.396 57.251h37.163c.067 0 .135.011.204.011.575-4.636.877-9.357.877-14.151 0-4.79-.302-9.507-.877-14.141h-43.112c-7.999 0-14.483-6.487-14.483-14.488 0-7.998 6.484-14.482 14.483-14.482h35.5C201.423 29.061 160.829 0 113.441 0 62.205 0 18.911 33.97 4.831 80.613l70.878 46.968h22.366c7.998 0 14.482 6.488 14.482 14.488 0 7.996-6.485 14.484-14.482 14.484H66.982L.016 112.175c-.004.423-.016.842-.016 1.265 0 62.653 50.79 113.442 113.441 113.442 47.388 0 87.982-29.061 104.952-70.329h-38.484z' })
  );
};

Nxt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Nxt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Nxt;