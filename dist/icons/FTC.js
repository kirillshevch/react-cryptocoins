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

var Ftc = function Ftc(props) {
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
    _react2.default.createElement('path', { d: 'M113.617.453C51.118.453.454 51.118.454 113.614c0 62.499 50.664 113.163 113.163 113.163 62.496 0 113.16-50.664 113.16-113.163 0-62.496-50.664-113.161-113.16-113.161zm70.26 57.216c-.89 12.451-18.255 31.721-24.604 39.175-6.354 7.454-11.775 15.415-13.512 15.586-1.736.168-13.344-.977-15.415 4.107-.932 2.287 12.494 1.737 12.494 1.737s-21.727 30.66-23.082 30.874c-1.356.211-16.486-.827-25.929 1.079-9.445 1.905-12.992 7.179-12.992 7.179s13.425 1.185 22.785 1.609c9.358.422 23.757.593 23.757.593s-10.332 5.591-26.765 4.7c-16.433-.89-22.997-2.201-22.997-2.201s2.287 5.97 6.819 8.851c4.532 2.88 12.197 5.165 12.028 5.59-.17.423-9.952-.254-16.348-3.346-6.396-3.091-7.539-8.003-8.428-7.198-.889.804 1.651 6.945 3.853 9.019 2.203 2.076 7.794 5.931 7.075 6.184-.721.255-13.341-4.657-15.713-7.538-1.123 2.394-13.066 14.951-13.542 13.627s8.894-11.149 9.529-14.008c.636-2.857-.158-7.21-2.287-7.082-2.126.125-5.844 7.813-5.844 7.813s-1.398-3.018-.825-6.226c.571-3.208 2.828-5.56 2.828-5.56s-4.48-4.796-6.575-6.891c-2.098-2.097-6.924-5.751-6.354-6.988.573-1.239 7.591 2.731 10.005 4.446 2.415 1.715 7.719 6.894 7.719 6.894s-2.033-6.448-3.557-10.801c-1.525-4.351-4.034-9.243-3.462-9.688.572-.445 5.145 5.591 7.114 8.608s5.083 8.798 5.083 8.798-.509-8.1.158-13.436c.667-5.337 2.922-10.705 4.002-10.323 1.08.381 1.239 4.732 3.556 10.228 2.32 5.495 3.908 8.005 4.956 7.337 1.049-.667 2.022-7.708 1.387-17.956-.635-10.248-1.481-18.083-1.481-18.083s6.257-6.587 6.733-6.269c.476.317.159 10.705.603 15.086.445 4.385 1.748 8.705 2.351 8.641.603-.063 3.398-4.668 5.22-15.68 1.82-11.012 2.667-16.559 2.667-16.559s11.901-11.087 12.346-10.959c.444.125.921 6.162 1.652 8.322.73 2.16 2.065 3.176 2.065 3.176s2.762-2.891 3.557-9.529c.794-6.638.856-9.275 1.523-10.736s18.328-15.468 27.794-22.647c9.465-7.179 29.792-19.629 31.191-19.217 1.398.414 7.751 7.211 6.862 19.662z' }),
    _react2.default.createElement('path', { d: 'M94.474 142.837s24.479-24.394 35.151-37.015c10.673-12.62 30.154-40.826 30.154-40.826s-24.563 26.935-36.76 41.25c-12.197 14.313-28.545 36.591-28.545 36.591z' })
  );
};

Ftc.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Ftc.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Ftc;