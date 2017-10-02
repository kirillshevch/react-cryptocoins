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

var Str = function Str(props) {
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
    _react2.default.createElement('path', { d: 'M130.607 70.618c-8.484 0-15.362 6.876-15.362 15.36 0 8.483 6.878 15.36 15.362 15.36 8.481 0 15.359-6.877 15.359-15.36.001-8.484-6.877-15.36-15.359-15.36zm-44.749 64.08c-.027.039-.057.072-.084.11-6.819 9.232-8.152 19.818-2.972 23.642 5.177 3.823 14.9-.558 21.722-9.792.049-.066.091-.134.14-.202-3.568-2.508-7.437-5.525-10.671-7.873-2.456-1.778-5.379-3.824-8.135-5.885z' }),
    _react2.default.createElement('path', { d: 'M113.313 0C50.732 0 0 50.732 0 113.313c0 34.818 15.709 65.963 40.42 86.749l15.562-21.855a2.256 2.256 0 1 1 3.674 2.618l-15.721 22.078c1.546 1.2 3.126 2.357 4.734 3.478a2.29 2.29 0 0 1 .295-.597l12.413-17.304a2.258 2.258 0 0 1 3.668 2.632l-12.413 17.303a2.193 2.193 0 0 1-.354.383c17.618 11.285 38.563 17.828 61.036 17.828 62.581 0 113.313-50.732 113.313-113.313S175.894 0 113.313 0zm39.925 111.559c-7.147 8.649-14.107 17.176-14.107 17.176s6.119 9.731 3.624 23.486c-2.493 13.752-10.394 23.063-10.394 23.063s-.657-8.088-2.447-12.602c-1.785-4.515-8.838-13.449-8.838-13.449s-3.196 3.889-6.895 4.077c-1.398.069-3.645-1.021-6.268-2.674-.311.468-.63.935-.959 1.397-10.296 14.547-24.64 22.095-32.036 16.862-7.397-5.238-5.047-21.272 5.252-35.819.435-.618.879-1.215 1.33-1.804-2.888-2.433-4.986-4.669-5.124-6.238-.314-3.574 1.315-6.017 1.315-6.017s-6.895-2.882-13.792-3.072c-6.895-.19-14.107 1.879-14.107 1.879s6.646-11.285 17.493-17.303c10.846-6.019 24.576-5.768 24.576-5.768s6.268-10.845 9.279-15.923c3.009-5.08 9.091-16.114 25.14-24.764 16.048-8.651 35.233-7.335 35.233-7.335s5.14 14.543 5.14 29.591c0 15.047-6.268 26.583-13.415 35.237z' })
  );
};

Str.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Str.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Str;