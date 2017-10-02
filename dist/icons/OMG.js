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

var Omg = function Omg(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ['color', 'size']);

  return _react2.default.createElement(
    'svg',
    _extends({
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 227 227',
      fill: color
    }, otherProps),
    _react2.default.createElement('path', { d: 'M54.937 117.157c-30.304 0-54.87 24.589-54.87 54.921C.067 202.411 24.636 227 54.94 227c30.308 0 54.874-24.589 54.874-54.922 0-30.332-24.566-54.921-54.874-54.921h-.003zm0 93.23c-21.126 0-38.254-17.143-38.254-38.289s17.128-38.289 38.254-38.289c21.13 0 38.257 17.144 38.257 38.289-.036 21.13-17.144 38.253-38.257 38.289zM172.126 0c-30.304 0-54.873 24.59-54.873 54.922s24.569 54.921 54.873 54.921c30.308 0 54.874-24.589 54.874-54.921C227 24.589 202.434 0 172.126 0zm0 93.229c-21.126 0-38.253-17.143-38.253-38.288 0-21.146 17.127-38.289 38.253-38.289 21.13 0 38.257 17.143 38.257 38.289-.035 21.13-17.143 38.253-38.257 38.288zM54.937 0C28.814-.016 6.296 18.398 1.101 44.026c-5.193 25.624 8.378 51.364 32.443 61.54 24.066 10.173 51.964 1.964 66.695-19.631 14.736-21.595 12.225-50.587-6.002-69.322h15.561V0H54.937zm38.257 54.922c0 21.146-17.127 38.288-38.257 38.288-21.126 0-38.254-17.142-38.254-38.288s17.128-38.29 38.254-38.29c21.12.027 38.24 17.15 38.276 38.29h-.019z' })
  );
};

Omg.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Omg.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Omg;