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

var GnoAlt = function GnoAlt(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ['color', 'size']);

  return _react2.default.createElement(
    'svg',
    _extends({
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 226.8 226.8',
      fill: color
    }, otherProps),
    _react2.default.createElement('path', { d: 'M138.092 88.931C131.782 82.621 123.21 79 114.281 79h-.06c-8.87 0-17.144 3.323-23.454 9.455l23.811 23.87 23.514-23.394z' }),
    _react2.default.createElement('path', { d: 'M114.4 0C51.8 0 1 50.8 1 113.4s50.8 113.4 113.4 113.4S227.8 176 227.8 113.4 177 0 114.4 0zM87.256 87.431C94.28 79.99 103.864 76 114.162 76h.06c10.417 0 20.418 4.288 27.382 12.026l1.071 1.102-28.097 27.933-28.453-28.506 1.131-1.124zm50.836 16.372c0 3.869-3.155 7.024-7.024 7.024-1.488 0-2.798-.417-3.929-1.19l9.762-9.762a6.941 6.941 0 0 1 1.191 3.928zm-35.538 6.429a6.817 6.817 0 0 1-4.286 1.488c-3.869 0-7.024-3.155-7.024-7.024 0-1.607.536-3.095 1.429-4.286l9.881 9.822zm-22.68 24.941c-14.167-.893-33.692-4.405-46.312-15.775-7.798-6.965-9.286-13.325-9.346-13.622L23.8 104h51.55l-.298 1.657a36.945 36.945 0 0 0-.357 5.115c0 7.858 2.262 15.415 6.607 21.904l1.905 2.767-3.333-.27zM114.46 147h-.06c-18.989 0-34.466-15.616-34.407-34.605 0-6.369 1.786-12.6 5.06-17.957l.595-1.032 3.155 3.145c-.595.893-1.131 1.84-1.488 2.912-2.5 6.846 1.071 14.403 7.977 16.903a13.367 13.367 0 0 0 11.846-1.489l7.322 7.381 8.393-8.394c.774.536 1.667.952 2.619 1.309 6.727 2.381 14.108-1.131 16.489-7.798 1.429-3.929.774-8.036-1.31-11.31l2.619-2.619.655 1.071a34.909 34.909 0 0 1 5 17.997C148.866 131.503 133.449 147 114.46 147zm80.837-27.601c-12.62 11.37-32.204 14.882-46.372 15.775l-3.333.238 1.845-2.798c4.345-6.488 6.607-14.048 6.607-21.846 0-1.786-.119-3.384-.357-5.11L153.45 104H205l-.417 1.776c-.059.298-1.547 6.658-9.286 13.623z' })
  );
};

GnoAlt.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

GnoAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = GnoAlt;