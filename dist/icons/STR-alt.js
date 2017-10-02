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

var StrAlt = function StrAlt(props) {
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
    _react2.default.createElement('path', { d: 'M58.019 178.357a3.072 3.072 0 0 0-4.285.72L23.351 221.75a3.072 3.072 0 1 0 5.005 3.563l30.383-42.671a3.071 3.071 0 0 0-.72-4.285zm7.349 14.001a3.074 3.074 0 0 0-4.287.705L44.182 216.62a3.07 3.07 0 0 0 .706 4.287 3.072 3.072 0 0 0 4.287-.704l16.899-23.556a3.074 3.074 0 0 0-.706-4.289zM204.398 40.38c0-20.482-6.998-40.282-6.998-40.282s-26.116-1.792-47.964 9.984c-21.85 11.776-30.128 26.799-34.225 33.712S102.58 65.472 102.58 65.472s-18.69-.34-33.456 7.853C54.36 81.517 45.313 96.88 45.313 96.88s9.815-2.816 19.203-2.559c9.388.257 18.776 4.18 18.776 4.18s-2.219 3.328-1.792 8.192c.188 2.138 3.044 5.18 6.976 8.491a85.965 85.965 0 0 0-1.811 2.454c-14.018 19.806-17.22 41.635-7.151 48.763 10.07 7.126 29.596-3.15 43.613-22.952.447-.632.883-1.268 1.307-1.903 3.57 2.249 6.629 3.735 8.53 3.639 5.036-.257 9.388-5.548 9.388-5.548s9.603 12.162 12.034 18.308c2.433 6.145 3.329 17.154 3.329 17.154s10.753-12.674 14.149-31.396-4.933-31.974-4.933-31.974 9.474-11.605 19.203-23.383c9.73-11.779 18.264-27.483 18.264-47.966zm-84.581 98.473c-9.284 12.569-22.522 18.536-29.572 13.33-7.049-5.207-5.235-19.616 4.049-32.186.037-.051.076-.099.114-.15 3.75 2.803 7.731 5.59 11.074 8.013 4.403 3.193 9.669 7.301 14.527 10.717-.067.092-.124.184-.192.276zm35.508-64.42c-11.549 0-20.911-9.362-20.911-20.91 0-11.549 9.362-20.91 20.911-20.91 11.548 0 20.909 9.361 20.909 20.91 0 11.548-9.361 20.91-20.909 20.91z' })
  );
};

StrAlt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

StrAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = StrAlt;