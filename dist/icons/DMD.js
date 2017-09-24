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

var Dmd = function Dmd(props) {
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
    _react2.default.createElement('path', { d: 'M113.369 0C50.757 0 0 50.757 0 113.369s50.757 113.369 113.369 113.369c62.611 0 113.369-50.757 113.369-113.369S175.98 0 113.369 0zm66.871 95.253l-23.266-4.063 9.102-22.763a69.08 69.08 0 0 1 14.164 26.826zm-27.773-6.654l-14.365-14.366 23.913-9.513-9.548 23.879zm-39.097 19.055L97.359 75.907h32.021l-16.01 31.747zm20.887-29.986l14.814 14.815-29.886 15.072 15.072-29.887zm-26.702 29.887L77.669 92.484 92.484 77.67l15.071 29.885zm.099 5.815l-31.748 16.011V97.359l31.748 16.011zm-.099 5.815l-15.073 29.887-14.813-14.814 29.886-15.073zm5.815-.098l16.01 31.746H97.359l16.011-31.746zm5.815.098l29.886 15.071-14.814 14.813-15.072-29.884zm-.098-5.815l31.746-16.011v32.021l-31.746-16.01zm39.215-52.714l-22.816 9.077-4.515-23.373a69.071 69.071 0 0 1 27.331 14.296zm-57.608-15.393a69.837 69.837 0 0 1 24.803-.103l4.945 25.598H96.241l4.453-25.495zm-5.441 1.238l-4.064 23.264-22.762-9.1a69.066 69.066 0 0 1 26.826-14.164zm-6.655 27.772L74.232 88.638 64.72 64.726l23.878 9.547zm-27.942-5.836l9.077 22.816-23.372 4.514a69.079 69.079 0 0 1 14.295-27.33zM44.101 113.37c0-4.137.365-8.189 1.06-12.125l25.597-4.946v34.2l-25.496-4.452a69.687 69.687 0 0 1-1.161-12.677zm2.399 18.116l23.265 4.064-9.1 22.763A69.1 69.1 0 0 1 46.5 131.486zm27.773 6.656l14.365 14.365-23.913 9.513 9.548-23.878zm-5.836 27.943l22.815-9.077 4.516 23.372a69.082 69.082 0 0 1-27.331-14.295zm57.609 15.393a69.757 69.757 0 0 1-12.676 1.16 69.73 69.73 0 0 1-12.127-1.059l-4.945-25.598h34.2l-4.452 25.497zm5.44-1.238l4.064-23.266 22.763 9.102a69.097 69.097 0 0 1-26.827 14.164zm6.655-27.773l14.364-14.365 9.515 23.913-23.879-9.548zm27.944 5.835l-9.077-22.816 23.371-4.515a69.074 69.074 0 0 1-14.294 27.331zm15.494-32.806l-25.597 4.946v-34.2l25.496 4.452a69.757 69.757 0 0 1 1.16 12.676c0 4.137-.364 8.188-1.059 12.126z' })
  );
};

Dmd.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Dmd.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Dmd;