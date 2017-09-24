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

var Cloak = function Cloak(props) {
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
    _react2.default.createElement('path', { d: 'M113.403 0C50.872 0 0 50.872 0 113.403c0 62.53 50.872 113.402 113.403 113.402 62.53 0 113.402-50.872 113.402-113.402C226.804 50.872 175.932 0 113.403 0zm0 209.023c-52.725 0-95.621-42.896-95.621-95.62 0-52.726 42.896-95.622 95.621-95.622 52.726 0 95.621 42.896 95.621 95.622-.001 52.725-42.895 95.62-95.621 95.62z' }),
    _react2.default.createElement('path', { d: 'M113.403 62.497c-28.069 0-50.905 22.836-50.905 50.906 0 15.191 6.698 28.843 17.287 38.177 5.119-2.67 10.736-4.743 16.712-6.111-11.5-6.09-19.356-18.174-19.356-32.065 0-19.995 16.268-36.262 36.262-36.262 19.995 0 36.261 16.267 36.261 36.262 0 13.892-7.854 25.976-19.355 32.065 5.977 1.369 11.594 3.441 16.712 6.111 10.588-9.334 17.288-22.985 17.288-38.177-.001-28.07-22.837-50.906-50.906-50.906z' }),
    _react2.default.createElement('path', { d: 'M113.403 30.073c-45.949 0-83.331 37.38-83.331 83.33 0 23.784 10.032 45.256 26.067 60.452 2.678-4.816 6.215-9.239 10.466-13.126-12.214-12.08-19.798-28.832-19.798-47.326 0-36.721 29.875-66.596 66.596-66.596s66.594 29.875 66.594 66.596c0 18.494-7.584 35.246-19.799 47.326 4.253 3.887 7.79 8.31 10.469 13.126 16.034-15.196 26.065-36.668 26.065-60.452 0-45.95-37.382-83.33-83.329-83.33z' })
  );
};

Cloak.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Cloak.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Cloak;