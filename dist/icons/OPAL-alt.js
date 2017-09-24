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

var OpalAlt = function OpalAlt(props) {
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
    _react2.default.createElement('path', { d: 'M111.046 0L65.654 26.206l45.392 26.209zm-50.25 81.45V29.035l-45.39 26.208zm0 58.318V87.354l-45.39 26.207zm0 58.319v-52.415l-45.39 26.207zM13.894 116.51v52.416l45.391-26.207zm0-58.317v52.414l45.391-26.206zm50.362-29.158V81.45l45.391-26.207zm46.79 197.742v-52.415L65.655 200.57zm-46.79-81.451v52.415l45.391-26.208zM114.679 0v52.415l45.393-26.209zm50.25 29.035V81.45l45.391-26.207zm0 58.319v52.414l45.391-26.207zm0 110.733l45.391-26.208-45.391-26.207zm46.902-29.161V116.51l-45.392 26.209zm-45.392-84.525l45.392 26.206V58.193zm-4.97-2.951V29.035l-45.391 26.208zm-46.79 145.327l45.39-26.207-45.39-26.208zm46.79-29.036v-52.415l-45.391 26.207z' })
  );
};

OpalAlt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

OpalAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = OpalAlt;